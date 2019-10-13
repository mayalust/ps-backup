/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on : {
    init : function(event){ 
      var target = event.target;
      var global = event.global;
     
      var Dic = {
        major : {
          label : "原因说明",
          type : "textarea",
          on: {
              change: function (elem) {
                target.setValue("tallyReason",elem.value);
              }
          }
        },
        conclusion : {
          label : "处理过程说明",
          type : "textarea",
          on: {
              change: function (elem) {
                target.setValue("tallyCourseReason", elem.value);
              }
          }
        },
      }
      var ctrlGroups = [];
      var loop = function(item){

        var labelObj = {
          type : "label",
          value : item.label,
          composory:true,
          class : "col-md-2"
        }
        var type = item.type;
        var obj = {};
        obj.type = type;
        obj.composory = true;
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
      class : "col-md-1",
      btnStyle: {
           "width": "100px",
           "border": "#10a4fb solid 1px"
      },
      on : {
        click : function(elem){ 
   
          var params = target.getPopupData();
          params.taskStatus = 200;
          params.values = {
            dealType:2,  
            tallyReason: target.getValue("tallyReason"),
            tallyCourseReason: target.getValue("tallyCourseReason")
          }
          delete(params.variables)
            
          function requiredFields() {
               if (params.values.tallyReason == "" || params.values.tallyReason == undefined) {
                 target.growl("请填写原因说明", "warning")
                 return false
               }
               if (params.values.tallyCourseReason == "" || params.values.tallyCourseReason == undefined) {
                 target.growl("请填写处理过程说明", "warning")
                 return false
               }
               return true;
           } 
           if(requiredFields()){
                event.target.postService("ticketTaskService", "doTask", params , function (tc) {
                  if (tc.code == 0) {
                    event.target.growl("处理成功", "success");
                    target.trigger("search_toDolist");
                    target.trigger("inspectionLoaded");
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