/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init:function(event) {
      var target = event.target;
      target.setInvisible(true);
      target.on("moveToPage", function(data){
          if(data == "pageOne"){
             target.setInvisible(true);
          }else {
            target.setInvisible(false);
          }
      });
    }
  }
}