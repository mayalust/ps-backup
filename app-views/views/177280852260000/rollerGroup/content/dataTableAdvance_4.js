/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;

      //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        kpiName: "名称",

        kpiValue: {
          name: "状态",
          type: "circum1",
          value: "kpiValue"
        },

      };

      var data = target.$repeatData;


      success(data)
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

        render();
      };
    }
  }
}