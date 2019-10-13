/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var repeatData = target.$repeatData;
      var workObj = target.getParameter("id");

      option = {
        // 下面的标题
        title: {
          text: repeatData.province,
          textStyle: {
            color: "#ffffff",
            fontSize: 12
          },
          left: "center",
          bottom: "75"
        },
        //鼠标hover的提示
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        //圆环的颜色：蓝色，黄色，, 橙色红色,
        color: ['#A355F9', '#efd80b', '#ee6b1c', '#d20006'],

        grid: {
          top: 'top'
        },

        graphic: [{
          type: 'image',
          id: 'logo',
          right: 11,
          top: 8,
          z: -10,
          bounding: 'raw',
          style: {
            width: 200
          }
        }],

        series: [{
          name: '',
          type: 'pie',
          // height:'10',
          radius: ['50%', '70%'],
          center: ['50%', '36%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: function(params) {},
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
          data: [{
              value: repeatData.data[0].value,
              name: repeatData.data[0].name
            },
            {
              value: repeatData.data[1].value,
              name: repeatData.data[1].name
            },
            {
              value: repeatData.data[2].value,
              name: repeatData.data[2].name
            },
            {
              value: repeatData.data[3].value,
              name: repeatData.data[3].name
            }
          ]
        }, {
          name: '',
          type: 'pie',
          clockWise: false,
          hoverAnimation: true,
          radius: ['50', '50'],
          center: ['50%', '36%'],
          label: {
            normal: {
                show: false,
              position: 'center'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} "
          },
          data: [{
              label: {
                normal: {
                  formatter: repeatData.data[4].value,
                  textStyle: {
                    color: '#ffffff',
                    fontSize: 18
                  }
                }
              },
              value: repeatData.data[4].value,
              name: repeatData.data[4].name
            }

          ]
        }]
      };



      target.render(option);
    }
  }
}