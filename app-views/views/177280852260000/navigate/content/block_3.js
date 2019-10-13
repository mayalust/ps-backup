/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      //target.setInvisible(false);
      target.on("queryTabelList11", function(args) {
        // 
        if (args.val == 2) {
          target.setInvisible(false);
        } else if (args.val == 1) {
          target.setInvisible(true);
        }

      })
    }
  }
}