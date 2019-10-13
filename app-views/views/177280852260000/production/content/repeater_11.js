/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      //   target.getDomainAreaLineTree(function(domaintree){


      var workObj = target.getParameter("id");
      var filter = {
        "layer": 1,
        "modelId": 301,
        "domains": workObj
      };

      target.getDomainsByFilter(filter, function(domaintree) {
        // 
        // domaintree = domaintree[0];
        // domaintree.children = domaintree.domainInfos;
        // domaintree.children.sort(function(a,b){
        //   var y1 = a.$attr("values/latitude");
        //   var y2 = b.$attr("values/latitude");
        //   return y2 - y1;
        // });
        // var length = domaintree.children.length
        // 六座山
        // var domains = domaintree.children;
        // var domains = domaintree.children;
        var domains = domaintree;
        var description = [];
        var nodeIds = domaintree.map(function(elem) {
          description.push(elem.description)
          return elem.id;
        });


        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": nodeIds,
          "kpiCodes": [6007]
        }];
        // 

        target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
          var kpiNames = ['点检异常数', '注意告警数', '警告告警数', '危险告警数', "异常处理有效率"];
          // var kpiNames = ['正常','注意','警告'];
          //var kpiIds = ['severity,4', 'severity,3', 'severity,2','description']

          var newdata = returnData.data;

          var data = [];
          for (var i = 0; i < domains.length; i++) {
            for (var j = 0; j < newdata.length; j++) {
              if (domains[i].id == newdata[j].nodeId) {
                data.push(newdata[j]);
              }

            }

          };
          // 

          // 

          var denominator = [];
          var numerator = [];

          for (var i = 0; i < data.length; i++) {
            if (data[i].instance == "denominator") {
              denominator.push(data[i])
            } else if (data[i].instance == "numerator") {
              numerator.push(data[i])
            }
          }

          // 
          // 


          var test1 = [];
          var test2 = [];
          var test3 = [];
          for (var i = 0; i < denominator.length; i++) {
            for (var j = 0; j < numerator.length; j++) {
              if (denominator[i].nodeId == numerator[j].nodeId) {
                test1.push(denominator[i].value)
                test2.push(numerator[j].value)

                var num = Math.round((numerator[j].value / denominator[i].value * 10000) / 100.00, 0) + "%"
                if (num == "NaN%") {
                  num = "0%"
                }
                test3.push(num);

              }
            }
          }


          var all = [];
          var notice = [];
          var warning = [];
          var risk = [];
          var percent = test3;

          //对数据的处理   
          for (var i = 0; i < data.length; i++) {

            if (data[i].instance == "1") {
              all.push(data[i].value)
            } else if (data[i].instance == "2") {
              notice.push(data[i].value)
            } else if (data[i].instance == "3") {
              warning.push(data[i].value)
            } else if (data[i].instance == "4") {
              risk.push(data[i].value)
            }


          }

          //     


          var list = domains.map(function(domain, index) {
            // 
            // 
            var num = index;
            var rs = {};
            rs.province = domain.label;
            rs.data = kpiNames.map(function(kp, index) {
              var r = {};
              r.name = kpiNames[index];
              if (index == 0) {
                //点检数据
                r.value = all[num]
              } else if (index == 1) {
                //注意台数
                r.value = notice[num]
              } else if (index == 2) {
                //告警台数
                r.value = warning[num]
              } else if (index == 3) {
                //危险数据
                r.value = risk[num]
              } else if (index == 4) {
                //异常处理有效率
                r.value = percent[num]
              }

              return r;
            })
            return rs;
          });


          target.render(list);
        });





      });
    }
  }
}