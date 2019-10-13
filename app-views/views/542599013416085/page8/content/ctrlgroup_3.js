/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var sparePart = {};
  
      
      target.postService("sparePartUIService", "getSparePartByDeviceId", [target.getPopupData().deviceId - 0], function (tc) {
        if (tc.code == 0) {
          var getSparePartDateList = tc.data;
          var rander = function () {
            target.setValue("sparePart", sparePart);
            var ctrlGroups = [
              [{
                type: "label",
                value: "易耗件"
              }, {
                type: "select",

                value: sparePart ? sparePart.id : "",
                on: {
                  change: function (elem) {
                    sparePart = elem.value;
                    rander();
                  }
                },
                options: getSparePartDateList,
                format: {
                  "id": "id",
                  "label": "label"
                }
              }, {
                type: "label",
                value: "使用数量",
                style: {
                  textAlign: "center"
                }

              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    sparePart.values.useNum = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "库存",
                style: {
                  textAlign: "center"
                }
              }, {
                type: "input",
                disabled: true,
                value: sparePart.stockNumber,
              }], [{
                type: "label",
                value: "辅料"
              }, {
                type: "textarea",
                value: "",
                colSpan: 5,
                on: {
                  change: function (elem) {
                    sparePart.values.materials = elem.value;
                  }
                }
              }]
            ];
            event.target.render(ctrlGroups);
          }
          rander();
        }

      })
    }
  }
}