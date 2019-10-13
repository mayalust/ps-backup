/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    repeat: function(event) {
      var target = event.target;
      var repeatData = target.$repeatData;
      var composory = false;

      var options = [{
          id: "0",
          label: "正确"
        },
        {
          id: "1",
          label: "基本正确"
        },
        {
          id: "2",
          label: "不正确"
        }
      ];
      var render = function() {
        if (repeatData.evaluateCheckboxlist == 2) {
          composory = true;
        } else {
          composory = false;
        }
        var ctrlGroups = [
          [{
              type: "label",
              value: "评价等级",
              class: "col-md-2"
            },
            {
              type: "checkboxlist",
              multiselect: false,
              options: options,
              icon: "glyphicon glyphicon-search",
              colSpan: 2,
              column: 4,
              value: repeatData.evaluateCheckboxlist ? [repeatData.evaluateCheckboxlist] : ["0"],
              class: "col-md-10",
              on: {
                change: function(elem) {
                  repeatData.evaluateCheckboxlist = elem.value[0].id;
                  render();
                }
              }
            }
          ],
          [{
              type: "label",
              value: "评价说明",
              composory: composory,
              class: "col-md-2"
            },
            {
              type: "textarea",
              colSpan: 2,
              class: "col-md-10",
              value: repeatData.evaluateDealExplain,
              on: {
                change: function(elem) {
                  repeatData.evaluateDealExplain = elem.value;


                }
              },
            }
          ]
        ];

        target.render(ctrlGroups);
      }
      render();
    }
  }
}