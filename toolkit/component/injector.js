/**
 * Created by leonlin on 16/11/3.
 */
define(function(){
  return function(data) {
    if(data == undefined){
      throw new Error("undefined");
    }
    var q = data.q;
    var scope = data.scope;
    var element = data.element;
    var constructor = element.constructor;
    var coldomInner = data.coldomInner;
    var previewMode = data.previewMode;
    var traverseColumn = data.traverseColumn;
    var viewFlexService = data.viewFlexService;
    var traverseRow = data.traverseRow;
    var rowDom = data.rowDom;
    var customMethodService = data.customMethodService;
    var style = element.style;
    var cov = $("<div></div>");
    var scope = data.scope;
    var compile = data.compile;
    cov.css("width", "100%");
    cov.css("height", "100%");
    cov.css("background-color", "rgba(250,250,250,.5)");
    var wrap = $("<div></div>");
    wrap.addClass("ww");
    //wrap.css(style);
    if(!previewMode) {
      wrap.css("opacity", ".1");
      wrap.css("pointer-events", "none");
      wrap.css("background-color", "#eee");
    }
    var expression;
    $$.runExpression(element.$attr("advance/expression"), function(expFn){
      if(expFn.code == 0){
        expression = expFn.data;
      }
      runExpressionSuccess(expression);
    }, element);
    function runExpressionSuccess(expression){
      expression = expression ? expression : {};
      var initFn = expression.$attr("on/init");
      element.renderJSON = function(json){
        traverseRow(wrap, json.children, true);
      };
      element.showloading = function(){

      };
      element.renderCtrl = function(ctrlname){
        wrap.innerHTML = "";
        window._newScope ? window._newScope.$destroy() : null;
        element.createRenderCtrl( ctrlname ).then(function( dom ){
          window._newScope = scope.$new();
          wrap[0].appendChild( dom );
          compile(wrap)(window._newScope);
          window._newScope.$on("$destroy", function(){
            ;
          })
        });
      };
      element.render = function(json, a){
        runtime("开始加载视图");
        var defers = [];
        if(json.layout == undefined){
          json.layout = json.groups[0].layout;
        }
        json.layout = json.layout.$remapByChild(function(element){
          var rs = new constructor(element);
          return rs;
        });
        element.children = json.layout.children;
        element.traveseByChild(function(element){
          var defer = q.defer();
          var renderAttr = function(){
            if(element.data){
              element.getCiKpi(function(ci, kpi){
                if(element.data){
                  element.data.resource = ci;
                  element.data.kpi = kpi;
                };
                defer.resolve("success");
              });
            } else {
              defer.resolve("success");
            };
          };
          if(element.source) {
            var source = element.source;
            if(source == "TOPO") {
              var viewId = 	element.viewId;
              $$.cacheAsyncData.call(viewFlexService.getViewById, [viewId], function(event){
                if(event.code == 0 && event.data != null){
                  var json = JSON.parse(event.data.content);
                  element.JSON = json;
                }
                renderAttr();
              });
            } else {
              renderAttr();
            }
          } else {
            renderAttr();
          }
          defers.push(defer.promise);
        });
        runtime("完成加载视图" + json.viewTitle);
        q.all(defers).then(function(){
          json.layout.traverse(function(){});
          json.layout.root = json;
          Object.defineProperty(json.layout, "root", {
            enumerable : false
          });
          traverseRow.promises = [];
          wrap.children().remove();
          var promises = traverseRow(wrap, json.layout.children, true);
          setTimeout(function(){
            element.trigger("graphicLoaded");
          }, 5000)
          /**
           q.all(promises).then(function(p){
          console.info("graphicLoaded");
          element.trigger("graphicLoaded")
        });*/
        });
      };
      if(initFn){
        try{
          initFn({
            target : element
          });
        } catch(e){
          ;
        } finally {

        }
      }
    }
    return wrap;
  }
});
