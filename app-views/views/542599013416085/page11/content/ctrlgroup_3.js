/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var composory = false;
      var evaluateObj = {};

      var options = [{
        id: 0,
        label: "通过"
      }, {
        id: 1,
        label: "不通过"
      }];

      var options1 = [{
        id: 1,
        label: "是否按时完工"
      }];
      
      var options2 = [{
        id: 1,
        label: "是否符合质量标准"
      }];

      var val = [options[0]];
      var val1 = [options1[0]];
      var val2 = [options2[0]];
      var render = function () { 
      
      
        target.setValue("evaluateObj", evaluateObj);
        var selectInfo = val.map(function (elem) {
          return elem.id;
        });
        var selectInfo1 = val1.map(function (elem) {
          return elem.id;
        });
        var selectInfo2 = val2.map(function (elem) {
          return elem.id;
        });
        if (selectInfo.length > 0) {  
          if(selectInfo.toString()=="1"){
              composory = true;
          }else{
             composory = false;  
          }      
          evaluateObj.tallyCheck = selectInfo.toString();
          
          
          
        } else {
          //   selectInfo = "没有选项被选中";
        }
        
        if (selectInfo1.length > 0) { 
          evaluateObj.isAccord = selectInfo1.toString();
        } else {
          evaluateObj.isAccord = "0";
        }
        if (selectInfo2.length > 0) {
          evaluateObj.isQuality = selectInfo2.toString();
        } else {
          evaluateObj.isQuality = "0";
        }
        var ctrlGroups = [
          [{
            type: "label",
            value: "验收结果",
            composory: true,
            class: "col-md-2",
          }, {
            type: "checkboxlist",
            multiselect: false,
            icon: "glyphicon glyphicon-search",
            column: 4,
            value: val.map(function (elem) {
              return elem.id;
            }),
            on: {
              change: function (elem) {
                //---------------
                val = elem.value;
                render();
              }
            },
            colSpan: 2,
            class: "col-md-10",
            options: options
          }],
          [{
            type: "label",
            value: "",
            // composory: true,
            class: "col-md-2",
          }, {
            type: "checkboxlist",
            icon: "glyphicon glyphicon-search",
            // column: 1,
            value: val1.map(function (elem) {
              return elem.id;
            }),
            on: {
              change: function (elem) {
              
                //   console.log(elem.value)
                //  evaluateObj.isAccord =  elem.value;
                 
                //---------------
                val1 = elem.value;
                render();
              }
            },
            // colSpan: 1,
            class: "col-md-1",
            options: options1
          },{
            type: "checkboxlist",
            icon: "glyphicon glyphicon-search",
            // column: 1,
            value: val2.map(function (elem) {
              return elem.id;
            }),
            on: {
              change: function (elem) {
                //---------------
                val2 = elem.value;
                render();
              }
            },
            // colSpan: 1,
            class: "col-md-1",
            options: options2
          }],
          [{
            type: "label",
            value: "验收说明",
            composory: composory,
            class: "col-md-2"
          }, {
            label: "处理说明",
            type: "textarea",
            class: "col-md-10",
            value:evaluateObj.tallyRemark,
            colSpan: 2,
            on: {
              change: function (elem) {
                  evaluateObj.tallyRemark =  elem.value;
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