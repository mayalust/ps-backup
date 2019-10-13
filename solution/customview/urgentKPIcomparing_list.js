define({
  "on" : {
    "init" : function(event){
      var target = event.target;
      var groups = target.getPopupData() || [];
      target.setValue("addpop/selections", groups);
      var render = function(){
        target.render({
          data : groups,
          format : [{
            type: "label",
            value: "area",
            name: "区域"
          },{
            type: "label",
            value: "device",
            name: "设备"
          },{
            type: "label",
            value: "kpi",
            name: "指标"
          },{
            name: "操作",
            type: "buttonGroup",
            content: [{
              label: "删除",
              icon: "null",
              class: "btn btn-default btn-sm",
              on: {
                click: function (elem) {
                  var index = elem.index;
                  groups.splice(index, 1);
                  render();
                }
              }
            }]
          }]
        })
      }
      target.off("addToSelection");
      target.on("addToSelection", function(obj){
        var remap = {
          area : obj.selections[obj.selections.length > 3 ? 3 : obj.selections.length - 1].label,
          device : obj.selections[obj.selections.length - 1].label,
          kpi : obj.kpi.kpiName,
          collection : obj
        }
        groups.push(remap);
        render();
      })
      render();
    }
  }
});