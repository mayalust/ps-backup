/**
 * Created by leonlin on 16/11/3.
 */
define([], function(){
  return function(data) {
    var element = data.element;
    var global = data.global;
    var target = data.target;
    var route = data.route;
    var targetDom = data.targetDom;
    var rowDom = data.rowDom;
    var tElement = data.tElement;
    var traverseColumn = data.traverseColumn;
    var previewMode = data.previewMode;
    if(element.style) {
      target.css(element.style);
    };
    // if(route.current.$$route.controller == "freeBoardCtrl"){
    //   target.css("display", "block");
    // }
    var expression;
    $$.runExpression(element.$attr("advance/expression"), function(funRes) {
      if(funRes.code == "0") {
        var fnResult = funRes.data;
        if(typeof fnResult == 'function') {
          expression = fnResult(data, system);
        } else {
          expression = fnResult;
        }
        expression = expression ? expression : {};
      } else {
        expression = {};
      }
      runExpressionSuccess(expression);
    });
    function runExpressionSuccess(expression){
      var initFn = expression.$attr("on/init");
      element.setDimension = function(arr){
        var children = rowDom.children();
        // if(route.current.$$route.controller != "freeBoardCtrl"){
        //   for(var i in element.children){
        //     element.children[i].col = arr[i];
        //   };
        //   children.each(function(i, e){
        //     var self = $(this);
        //     self.removeClass();
        //     self.addClass("col-md-" + arr[i]);
        //   });
        // };
      };
      if(typeof initFn == "function"){
        try {
          initFn({
            target : element
          })
        } catch(e){
          ;
        }
      }
    }
  }
});
