/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function(event) {
      var target = event.target;
      var repeatData = target.$repeatData;
      var barOption = {
        title: {
          text: 'svgChart入门示例'
        },
        grid: {
          top: "5%",
          left: "10%",
          height: "90%"
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        series: [{
          stack: "总量",
          name: '销量1',
          type: '3dbar',
          itemStyle: {
            normal: {
              color: "#00bc79"
            }
          },
          data: [repeatData.data[0].value]
        }, {
          stack: "总量",
          name: '销量2',
          type: '3dbar',
          itemStyle: {
            normal: {
              color: "#efd709"
            }
          },
          data: [repeatData.data[1].value]
        }, {
          stack: "总量",
          name: '销量3',
          type: '3dbar',
          itemStyle: {
            normal: {
              color: "#ee6b1c"
            }
          },
          data: [repeatData.data[2].value]
        }]
      };

      target.render(barOption);
    }
  }
}