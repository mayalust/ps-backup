/**
 * POPUP设备编码
 * 版本：1.0.0
 * 
 */
expression = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var resource = target.getValue("global/resource");
      var pathnames = target.getdomainNameHandler(resource.domains, []);
      var pathStr = "";

      for(var i = 2; i < pathnames.length; i++) {
        if(pathnames[i]) {
          pathStr += pathnames[i] + "/"
        }
      }

      var deviceName = pathStr + resource.label;

      var render = function() {
        var ctrlGroups = [
          [{
            type: "label",
            value: "设备名称:"
          }, {
            type: "label",
            value: deviceName
          }, {
            type: "label",
            value: "设备编号:"
          }, {
            type: "label",
            value: resource.externalDevId
          }]
        ];
        event.target.render(ctrlGroups);
      }
      render();
    }
  }
}