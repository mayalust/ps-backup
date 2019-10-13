define({
  on: {
    init: function(event) {
      var json;
      var target = event.target;
      var timer = setTimeout(function() {
        var initParam = target.getScopeValue("INITPARAMS");
        if(initParam && initParam.item) {
          target.trigger("lv1viewchange", initParam)
        }
      });
      target.on("lv1viewchange", function(data) {
        debugger;
        if(timer) {
          clearTimeout(timer)
          timer = null;
        }
        var view = data.item;
        var path = data.path;
        var viewId = view.viewId;

        if(viewId) {
          target.getViewById(viewId, function(view) {
            var content = view.content;

            if(content) {
              json = JSON.parse(content);
              if(path) {
                var find = json.groups.find(function(elem) {
                  return elem.path == path;
                });
                json.layout = find.layout;
              }
              target.render(json, "ppp");
            } else {
              target.Info('../../localdb/echartTemplate/baogang/nographe.json', function(nographe) {
                target.render(nographe);
              });
            }
          });
        } else {
          var viewPath = view.default;
          target.Info('../../localdb/echartTemplate/' + view.default+".json", function(json) {
            if(path) {
              var find = json.groups.find(function(elem) {
                return elem.path == path;
              });
              json.layout = find.layout;
            }
            target.render(json, "ppp");
          });
        };
      })
    }
  }
})