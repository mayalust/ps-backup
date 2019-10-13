/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      // 判断当前的角色id是智能产线决策者 则显示这部分内容
      var getCurrentUser = target.getCurrentUser();


      //   if (getCurrentUser.usercurrentRoleID == 496878991490168) {
      //     target.setInvisible(false);
      //   } else {
      //     target.setInvisible(true);
      //   }

      //当前角色为2050集中监控者的时候显示
      if (getCurrentUser.usercurrentRoleID == 251465483498833) {
        target.setInvisible(true); //true 为显示
      } else {
        target.setInvisible(false);
      }

      //调试开启
      // target.setInvisible(true);//true 为显示


      //   target.on("queryTabelList11", function(args) {
      //     if (args.val == 1) {
      //       target.setInvisible(false);
      //     } else if (args.val == 2 && getCurrentUser.usercurrentRoleID != 496878991490168) {
      //       target.setInvisible(true);
      //     }
      //   })
    }
  }
}