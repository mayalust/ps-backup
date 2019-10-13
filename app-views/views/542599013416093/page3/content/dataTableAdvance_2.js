/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
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
        rptNo: "报告编号",
        rptDate: "完成时间",
        reportor: "诊断责任人",
        specialty: "专业类型",
        conclusion: "报告结论",
        diagnoseDesc: "诊断描述",
        dealOption: "检修建议",
        comment: "备注"
      };

      var specialtyProps = target.getRootScope("myDicts")["specialtyProps"];
      var alertSeveritys = target.getRootScope("myDicts")["alertSeverity"];
      target.on("offlineReportList", function(data) {
        data.forEach(function(ele) {

          alertSeveritys.forEach(function(elem) {
            if (elem.valueCode == ele.conclusion) {
              ele.conclusion = elem.label;
              return
            }
          })

          specialtyProps.forEach(function(elem) {
            if (elem.valueCode == ele.specialty) {
              ele.specialty = elem.label;
              return
            }
          })
        })

        success(data);
      });




      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      function success(datas) {
        var render = function(advsearch) {
          var format = [];
          for (var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);
            format.push(item);
          }

          target.render({
            data: datas,
            format: format
          });
        };
        // 点击查询按钮


        render();
      };
    }
  }
}