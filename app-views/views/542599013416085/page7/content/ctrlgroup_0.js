/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on : {
    init : function(event){
      var target = event.target;
      var global = event.global;
      
      var repair = target.getPopupData().variables;
      console.log(repair)
      var repairAccessory="";
      for(var i in repair.repairAccessory){
         repairAccessory += '<a target="_blank" href="'+repair.repairAccessory[i].path+'">'+repair.repairAccessory[i].name+'</a><br />'
      }
      repairQuality = "";
      for(var i in repair.repairQuality){
         repairQuality += '<a target="_blank" href="'+repair.repairQuality[i].path+'">'+repair.repairQuality[i].name+'</a><br />'
      }
      var ctrlGroups = [
        [{
          type : "label",
          value : "处理方式"
        },{
          type : "input",
          value:repair.repairProcessModel,
          disabled:true,
        },{
          type : "label",
          value : "实际完工日期"
        },{
          type : "input",
          value:new Date(repair.repairFinishDate).Format("yyyy-MM-dd hh:mm:ss"),
          disabled:true
        }], [{
          type : "label",
          value : "完工数量"
        },{
          type : "input",
          value:repair.repairFinishCount,
          disabled:true
        },{
          type : "label",
          value : "工作内容补充"
        },{
          type : "input",
          value:repair.repairContent,
          disabled:true
        }],[{
          type : "label",
          value : "施工类别"
        },{
          type : "input",
          value:repair.repairWorkType,
          disabled:true
        },{
          type : "label",
          value : "工时数"
        },{
          type : "input",
          value:repair.repairWorkPeriod,
          disabled:true
        }],[{
          type : "label",
          value : "质量控制要点"
        },{
          type : "customHtml",
          value: repairQuality,

        }],[{
          type : "label",
          value : "附件"
        },{
          type : "customHtml",
          value : repairAccessory
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}