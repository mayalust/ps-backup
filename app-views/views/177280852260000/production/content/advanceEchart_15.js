/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      var workObj = target.getParameter("id");

      var params = ["kpi", {
        "isRealTimeData": true,
        "includeInstance": true,
        "nodeIds": [workObj],
        "kpiCodes": [6301]
      }];

      target.postService("kpiDataFlexService", "getKpiValueList", params, function(rs) {

        var obj = {
          "0": "智能决策项目数",
          "1": "人工决策项目数",
          "2": "已完成智能决策项目数",
          "3": "待完成智能决策项目数",
        }

        var data = [];
        var data1 = [];

        var a = 0,
          b = 0,
          c = 0,
          d = 0;

        rs.data.forEach(function(ele) {
          if (ele.instance == "0") {
            c = ele.value;
          }

          if (ele.instance == "2") {
            a = ele.value;
          }
          if (ele.instance == "2" || ele.instance == "3") {
            b += ele.value * 1;
            var item = {
              value: ele.value,
              name: obj[ele.instance]
            }
            data.push(item);
          }

          if (ele.instance == "0" || ele.instance == "1") {
            d += ele.value * 1;
            var item = {
              value: ele.value,
              name: obj[ele.instance]
            }
            data1.push(item);
          }
        })

        var echart2 = {

          percent: Math.ceil((c / d) * 100) + "%" || 0,
          data1: data1
        }

        target.trigger("echart2", echart2)




        var option = {
          // 下面的标题
          // title: {
          //   text: "标题",
          //   textStyle: {
          //     color: "#ffffff",
          //     fontSize: 12
          //   },
          //   left: "center",
          //   //   bottom: "75"
          // },
          legend: {
            orient: "vertical",
            textStyle: {
              color: "#fff",
            },
            data: ['已完成智能决策项目数', '待完成智能决策项目数']
          },
          //鼠标hover的提示
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          //圆环的颜色：蓝色，黄色，, 橙色红色,
          color: ['#c3bfc5', '#a12ecc'],

          grid: {
            //   top: 'top'
          },

          series: [{
              name: '',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '55%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }

              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: data
            },
            {
              name: '',
              type: 'pie',
              clockWise: false,
              hoverAnimation: true,
              radius: ['50%', '50%'],
              center: ['50%', '55%'],
              label: {
                normal: {
                  position: 'center'
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{c}: {b} "
              },
              data: [

                {
                  label: {
                    normal: {
                      formatter: 11,
                      textStyle: {
                        color: '#ffffff',
                        fontSize: 18,

                      }
                    }
                  },
                  value: "占有率",
                  name: Math.ceil((a / b) * 100) + "%" || 0

                }

              ]
            }
          ]
        };

        target.render(option);
      })

    }
  }
}