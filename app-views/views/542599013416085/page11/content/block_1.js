/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init:function(event) {
      var target = event.target;
      var getPopupData = target.getPopupData();

      if(getPopupData && getPopupData.variables.ticket== "90" &&getPopupData && getPopupData.variables.ticket== "260"){
             target.setInvisible(true);
      }else{
         target.setInvisible(false); 
      }
    }
  }
}