/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on : {
    init : function(event){ 
      var target = event.target;
      var global = event.global;
 
      var resource = target.getPopupData();
      
     
       var ctrlGroups = [
          [{
            type: "label",
            value: "处理人",
            class: "col-md-1",
            style:{
                textAlign:"right"
            }
          }, {
            type: "input",
            class: "col-md-5",
            value:resource.senderName,
            disabled:true
   
          },{
            type: "label",
            value: "退回时间",
            class: "col-md-1",
            style:{
                textAlign:"right"
            }
          }, {
            type: "input",
            class: "col-md-5",
            value: useMomentFormat(resource.sendTime, "yyyy-MM-dd hh:mm:ss"),
            disabled:true
   
          }],
          [{
            type: "label",
          
            value: "退回说明",
            class: "col-md-1",
            style:{
                textAlign:"right"
            }
          }, {
            colSpan:4,
            type: "textarea",
            disabled:true,
            value:resource.variables.recallExplain,
           
          }]
        ];

        target.render(ctrlGroups);
    target.render(ctrlGroups);
  }
}
}