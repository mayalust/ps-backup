/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on : {
    init : function(event){ 
      var target = event.target;
      var global = event.global;

      var evaluate = target.getPopupData().variables;
      var ctrlGroups = [
        [{
          type : "label",
          value : "验收说明"
        },{
          type : "label",
          value: evaluate.tallyCheck,
     
        }],[{
          type : "label",
          value : "备注"
        },{
          type : "label",
          value: evaluate.tallyRemark,
        }]
     ]
    target.render(ctrlGroups);
  }
 }
}