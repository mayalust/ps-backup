/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var filter = {
        "layer": 2,
        "modelId": 300,
        "domains": "/0/515445641576227/"
      };


      target.getDomainAreaLineTree(function(resource) {
        var baseName = [],
          mountain = [];
        resource.getChildren(function(n, i, l) {
          return l < 2
        }).then(function(children) {
          for (var i = children.length - 1; i >= 0; i--) {
            baseName.push(children[i].label);
            mountain.push(children[i].id);
          }
          var params = ["kpi", {
            "isRealTimeData": true,
            "includeInstance": true,
            "nodeIds": mountain,
            "kpiCodes": [6101]
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
            var projectData = [];
            for (var j = 0; j < returnData.data.length; j++) {
              if (returnData.data[j].instance == 'state,all') {
                projectData.push(returnData.data[j].value)
              }
            }

            var option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data: ['状态维修项次数'],
                top: "2%",
                right: "2%"
              },
              grid: {
                left: '5%',
                right: '4%',
                bottom: '3%',
                height: '80%',
                containLabel: true
              },
              xAxis: {
                type: 'value'
              },
              yAxis: {
                type: 'category',
                data: baseName,
                axisLabel: {
                  margin: 30,
                  color: "#72b3d7",
                  fontWeight: "bold"
                }
              },
              series: [{
                  name: '状态维修项目数',
                  type: 'bar',
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'insideRight',
                      textBorderColor: '0'
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: target.linearGradient(0, 0, 1, 0, [{
                          offset: 0,
                          color: '#fed154'
                        },
                        {
                          offset: 1,
                          color: '#ffa823'
                        }
                      ])
                    },

                  },
                  data: projectData
                }

              ]
            };
            event.target.render(option);

            target.trigger("queryTabelList11", {
              val: 1
            });

          }, {
            "isRealTimeData": true,
            "includeInstance": true
          });
        })
      });


    }
  }
}