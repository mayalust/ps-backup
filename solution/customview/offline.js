define({
  "on": {
    "init": function (event) {
      var target = event.target;
      var specialtyProps = target.getRootScope("myDicts")["specialtyProps"];
      var id = target.getParameter('id')
      target.getDomainAreaLineTree_alertStatus(function(find) {
        if (find.category == "Device" && find.externalDevId ) {
          getOfflineList(find.externalDevId);
        }
      });
      function getOfflineList(deviceCode) {
          target.postService("deviceResumeUIService", "getDeviceOfflineReportListByCondition", {devId: deviceCode}, function (returnData) {
            target.render({
              pageSize: returnData.data.length,
              data: returnData.data,
              format: [
                {
                  "name": "状态",
                  "value": "conclusion",
                  "type": "text",
                  "format": function (elem) {
                    if (elem == '-1') {
                      return '正常'
                    } else if (elem == '2') {
                      return '注意'
                    } else if (elem == '3') {
                      return '异常'
                    } else if (elem == '4') {
                      return '警告'
                    }
                  }
                }, {
                  "name": "专业",
                  "value": "specialty",
                  "type": "text",
                  "format": function (ele) {

                    var text = "";
                    specialtyProps.forEach(function (elem) {
                      if (elem.valueCode == ele) {
                        text = elem.label
                      }
                    })
                    return text;
                  }
                }, {
                  "name": "报告文件",
                  "value": "reportFile",
                  "type": "jquery",
                  "render": function (elem) {
                    var wrap = $('<a target="_blank" href="' + elem.reportFile.filePath + '">' + elem.reportFile.fileName + '</a>');
                    return wrap;
                  }
                }, {
                  "name": "时间",
                  "value": "rptDate",
                  "type": "date"
                }
              ]
            });
          })
      }
    }
  }
})