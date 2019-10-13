/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;



      var data = target.$repeatData;

      var option = {
        title: {
          text: data.factoryName,
          x: '10%',
          y: '80%',
          textStyle: {
            //fontSize : 12,
            color: '#babfc3',
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: '5%',
          y: '2%',
          textStyle: {
            color: '#84898d'
          },
          orient: 'vertical',
          data: ['已完成状态项目维修数', '待完成状态项目维修数']
        },
        calculable: true,
        series: [{
            name: '',
            type: 'pie',
            radius: '8%',
            tooltip: {
              show: false
            },
            center: ['25%', '30%'],
            hoverAnimation: false,
            color: ['#dde5e7'],

            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
          },
          {
            name: '',
            type: 'pie',
            radius: ['40%', '60% '],
            center: ['50%', '50%'],
            calculable: true,
            avoidLabelOverlap: true,
            label: {
              normal: {
                position: 'inner',
                show: true,
                formatter: ' {c} ',
                textBorderWidth: 0,
              },
            },
            data: [{
                value: data.finished,
                name: '已完成状态项目检修数',
                itemStyle: {
                  normal: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#CACACC' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#CACACC' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                    borderColor: '#dde5e7',
                    borderWidth: 3,
                    borderType: 'solid',
                  }
                }
              },
              {
                value: data.unfinished,
                name: '待完成状态项目维修数',
                itemStyle: {
                  normal: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#0b7cae' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#33ddee' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                    borderColor: '#dde5e7',
                    borderWidth: 3,
                    borderType: 'solid',
                  }
                }
              }

            ]
          }
        ]
      };
      target.render(option);



    }
  }
}