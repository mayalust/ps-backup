define({
  "theme": "dark",
  "on": {
    "init": function (event) {
      var target = event.target;

      var finshTimeType = target.getRootScope("myDicts")["finshTimeType"];
      var getAllUserInfo = target.getRootScope("getAllUserInfo");


      //--------------------------自定义输入-----------------------------

      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        title: "报警信息",
        commitTimeUtc: "发起时间",
        sponsorName: "会诊发起人",
        participantName: "会诊参与人",
        finshTimeTypeName: "时限",
        statusName: "状态",
      };

      // 获取设备id
      var resource = target.getValue("global/resource");
      target.on("resource", function (e) {
        resource = e;
        render([]);
      })

      function getTableData1(params, pageRequest, cb) {
        target.getTicketsByConditionAndPage(params, pageRequest, function (tc) {
          tc.data.forEach(function (ele) {
            ele.commitTimeUtc = useMomentFormat(ele.commitTime, "yyyy-MM-dd hh:mm:ss");
            ele.sponsorName = getAllUserInfo[ele.values.sponsor];
            ele.participantName = getAllUserInfo[ele.values.participant];
            finshTimeType.forEach(function (elem) {
              if (elem.valueCode == ele.values.timeLimit) {
                ele.finshTimeTypeName = elem.label;
              }
            })
            ele.statusName = ele.status == 200 ? "协同完毕" : "待协同";
          })
          cb(tc.data, tc.total);
        });
      }


      //--------------------------自定义输入-----------------------------
      var render = function (datas, e) {
        var format = [];
        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        }
        format.push({
          name: "操作",
          type: "buttonGroup",
          content: [{
            label: "诊断详情",
            icon: "null",
            class: "btn btn-default btn-sm",
            on: {
              click: function (elem) {
                var obj = {"task": elem.row, "option": "look"};
                target.createSystemPopupByLocalPath("xtdetail", {
                  width: "40%",
                  title: "诊断详情",
                }, obj);
              }
            }
          }]
        });


        // 表格需要传递的参数
        var params = {
          "values": {
            deviceId: resource.id,
            theTicketType: "join",
            "commitBeginTime": e ? e.commitBeginTime : "",
            "commitEndTime": e ? e.commitEndTime : "",
            "participant": e ? e.participant : ""
          }
        }
        target.render({
          data: datas,
          params: params,
          paging: getTableData1,
          format: format
        });
      };
      target.off("queryTabelOne");
      target.on("queryTabelOne", function (e) {
        render([], e);
      })

    }
  }
})