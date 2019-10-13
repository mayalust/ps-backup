/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      target.off("echart2");
      target.on("echart2", function(data) {

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
            textStyle: {
              color: "#fff",
            },

            orient: "vertical",
            data: ['智能决策项目数', '人工决策项目数']
          },
          //鼠标hover的提示
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color: ["#4f90e0", '#b4b9be', ],
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
              data: data.data1
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
                      // formatter: 11,
                      textStyle: {
                        color: '#ffffff',
                        fontSize: 18,

                      }
                    }
                  },
                  value: "占有率",
                  name: data.percent

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