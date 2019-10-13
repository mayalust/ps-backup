/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var diagnoseEvaluateObj = {};
      
      var composory = false;
      var options = [{
        id: 0,
        label: "正确"
      }, {
        id: 1,
        label: "基本正确"
      }, {
        id: 2,
        label: "不正确"
      }]
      var val = [options[0]];
      var tallyEvaluateDealExplain = "";
      var render = function () {
        var selectInfo = val.map(function (elem) {
          return elem.id;
        });
        if (selectInfo.length > 0) {
            
            if(selectInfo.toString()==2){
               composory = true; 
            }else{
               composory = false
            }
            
            diagnoseEvaluateObj.tallyEvaluateCheckboxlist = selectInfo.toString();
        } else {
          //   selectInfo = "没有选项被选中";
        }
        target.setValue("diagnoseEvaluateObj",diagnoseEvaluateObj);
        var ctrlGroups = [
          [{
            type: "label",
            value: "评价等级",
            class: "col-md-2"
          }, {
            type: "checkboxlist",
            multiselect :  false,
            icon: "glyphicon glyphicon-search",
            column: 3,
            value: val.map(function (elem) {
              return elem.id;
            }),
            on: {
              change: function (elem) {  
                val =  elem.value
                render();
              }
            },
            colSpan : 2,
            class: "col-md-10",
            options: options
          }],
          [{
            type: "label",
            composory:composory, 
            value: "评价说明",
            class: "col-md-2"
          }, {
            type: "textarea",
            colSpan : 2,
            class: "col-md-10",
            value:diagnoseEvaluateObj.tallyEvaluateDealExplain,
            on: {
              change: function (elem) {
                diagnoseEvaluateObj.tallyEvaluateDealExplain = elem.value;
              }
            },
          }]
        ];

        target.render(ctrlGroups);
      }
      render();
    }
  }
}