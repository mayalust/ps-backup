/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;

      //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        filePath: {
          type: "link",
          value: "fileName",
          linkage: "filePath",
          name: "报告编号"
        },
        rptDate: "完成时间",
        reportor: "诊断责任人",
        specialtyName: "专业类型",
        conclusionName: "报告结论",
        diagnoseDesc: "诊断描述",
        dealOption: "检修建议",
        comment: "备注"
      };
      var specialtyProps = target.getRootScope("myDicts")["specialtyProps"];
      var alertSeveritys = target.getRootScope("myDicts")["alertSeverity"];
      // 获取设备id
      //   var resource = target.getValue("global/resource");
      //   target.off("tree_resourceChange.report")
      //   target.on("tree_resourceChange.report", function(res){
      //       
      //       resource = res.resource;
      //       getTableData();
      //   });

      var resource = target.getPopupData();

      function getTableData(time) {
        var params = {
          "devId": resource.variables.deviceCode
        };
        target.postService("deviceResumeUIService", "getDeviceOfflineReportListByCondition", params, function(tc) {
          if (tc.data) {
            var datas = [];
            tc.data.forEach(function(ele) {
              var data = ele;
              data.fileName = ele.rptNo;
              data.filePath = ele.reportFile.filePath;
              data.rptDate = new Date(ele.rptDate).Format("yyyy-MM-dd hh:mm:ss");

              alertSeveritys.forEach(function(elem) {
                if (elem.valueCode == ele.conclusion) {
                  ele.conclusionName = elem.label;
                  return
                }
              })

              specialtyProps.forEach(function(elem) {
                if (elem.valueCode == ele.specialty) {
                  data.specialtyName = elem.label;
                  return
                }
              })
              //报告结论
              if (ele.conclusion == "-1") {
                data.conclusionName = "正常"
              } else if (ele.conclusion == "2") {
                data.conclusionName = "注意"
              } else if (ele.conclusion == "3") {
                data.conclusionName = "异常"
              } else if (ele.conclusion == "4") {
                data.conclusionName = "警告"
              } else {
                data.conclusionName = ""
              }

              datas.push(data);
            });
            success(datas)
          }
        });
      }
      if (resource) {
        getTableData();
      }
      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！

      function success(datas) {
        var render = function(advsearch) {
          var format = [];
          for (var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);
            format.push(item);
          };
          target.render({
            showSelect: true,
            data: datas,
            format: format
          }, function(ins) {
            
            target.setValue("dataTableInstance", ins);
          });
        };
        // 点击查询按钮

        target.off("search_toDolist");
        target.on("search_toDolist", function(e) {

          getTableData(e)
          render();
        });

        render();
      };
    }
  }
}