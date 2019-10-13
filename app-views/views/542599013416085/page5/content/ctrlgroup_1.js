/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on : {
    init : function(event){ 
      var target = event.target;
      var global = event.global;
      var Dic = {
        major : {
          label : "验收说明",
          type : "textarea",
          composory: true,
          on: {
              change: function (elem) {
                target.setValue("tallyCheck",elem.value);
              }
          }
        },
        conclusion : {
          label : "备注",
          type : "textarea",
          on: {
              change: function (elem) {
                target.setValue("tallyRemark", elem.value);
              }
          }
        },
      }
      var ctrlGroups = [];
      var loop = function(item){
        var labelObj = {
          type : "label",
          value : item.label,
          class : "col-md-2",
        }
        if(item.label=="验收说明"){
           labelObj.composory = true
        }
        var type = item.type;
        var obj = {};
        obj.type = type;
        obj.options = item.options;
        obj.class = "col-md-9";
        obj.colSpan = 2;
        obj.on = item.on;
      return [labelObj, obj]; 

    }
    for(var i in Dic){
      ctrlGroups.push(loop(Dic[i])); 
    }
    ctrlGroups.push([{
      type : "label",
      value : ""
    },{
      type : "button",
      value : "提交",
      btnclass : "btn btn-primary",
        btnStyle: {
                  "width": "100px",
                  "border": "#10a4fb solid 1px"
                },
      class : "col-md-1",
      on : {
        click : function(elem){ debugger
          var params = target.getPopupData();
          params.taskStatus = 200;
          params.values = {
            tallyCheck: target.getValue("tallyCheck"),
            tallyRemark: target.getValue("tallyRemark")
          }
          delete(params.variables);
          
          function requiredFields(){
                 if(params.values.tallyCheck==""||params.values.tallyCheck==undefined){
                   target.growl("请填写验收说明","warning")
                   return false
               }
                 
               return true;
           }
           if(requiredFields()){
               event.target.postService("ticketTaskService", "doTask", params , function (tc) {
                 if (tc.code == 0) {
                   event.target.growl("处理成功", "success");
                   target.trigger("search_toDolist");
                   target.cancel();
                 } else {
                   event.target.growl(tc.message, "info");
                 }
               })
           }
          
        }
      }
    },{
      type : "button",
      value : "取消",
      btnclass : "btn btn-default",
      class : "col-md-1",
      btnStyle: {
                  "width": "100px",
                  "border": "#10a4fb solid 1px"
      },
      on : {
        click : function(elem){
          target.cancel();
        }
      }
    }])
    target.render(ctrlGroups);
  }
}
}