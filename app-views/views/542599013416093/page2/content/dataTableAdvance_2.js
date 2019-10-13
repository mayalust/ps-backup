/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  //   "theme" : "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      target.on("histroyLoaded", function(data) {
        

        //--------------------------自定义输入-----------------------------
        //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
        var Dictionary = {
          ticketNo: "时间",
          customerName: "项目负责人",
          standardName: "工程项目名称",
          alertTitle: "维修方案",
        };

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
        success(data)
      });
    }
  }
}