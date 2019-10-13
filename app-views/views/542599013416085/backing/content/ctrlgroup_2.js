/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  width:"auto",
  on : {
    init : function(event){
      var target = event.target;
      var global = event.global;
      var timeObj = {"firstTimeFrom":"","firstTimeTo":""};
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期 
      target.setValue("tempDealType",4);
      var currStatus = "today";
      var render = function(){
         var ctrlGroups = [
            [
                {
              type: "label",
              value: "处理方式：",
              style: {
                width:"0px",
                textAlign: "right"
              }
            },{
              type: "button",
              value: "关闭委托",
              btnclass:currStatus=="today"?"btn btn-primary":"btn btn-default",
              btnStyle:{
              "width":"100px",
              "border":"#10a4fb solid 1px"
            },
            on : {
              click : function(elem){
               target.trigger("moveToPage", "pageOne");
               currStatus = "today";
               target.setValue("tempDealType",4);
               render();
              }
            }
            },{
              type: "button",
              value: "重新下发",
              btnclass:currStatus=="bz"?"btn btn-primary":"btn btn-default",
              btnStyle:{
              "width":"100px",
              "border":"#10a4fb solid 1px"
            },
            on : {
              click : function(elem){
               target.trigger("moveToPage", "pageTwo");
               currStatus = "bz";
                target.setValue("tempDealType",5);
                render();
              }
            }
            }]
          ];
        event.target.render(ctrlGroups);
      }
      render()
    }
  }
}