/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      target.off("deviceStatus");
      target.on("deviceStatus", function(deviceStatus) {


        var list = [];
        for (var i in deviceStatus.kpiObj) {
          var item = {
            kpiName: deviceStatus.kpiObj[i].kpiName,
            kpiValue: deviceStatus.alertLevelObj[i] ? deviceStatus.alertLevelObj[i].value : "1"
          }
          list.push(item);
        }

        function sliceArr(array, size) {
          var result = [];
          for (var x = 0; x < Math.ceil(array.length / size); x++) {
            var start = x * size;
            var end = start + size;
            result.unshift(array.slice(start, end));
          }
          return result;
        }

        target.render(sliceArr(list, list.length / 4));
      });

    }
  }
}