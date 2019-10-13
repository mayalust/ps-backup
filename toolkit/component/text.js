/**
 * Created by leonlin on 16/11/3.
 */
define([], function(){
  return function(data) {
    var serviceCenterService = data.serviceCenterService;
    var element = data.element;
    var global = data.global;
    var previewMode = data.previewMode;
    var text = $("<div></div>");
    if(element.$attr("data/text")){
      element.$attr("data/series", element.$attr("data/text"));
      delete element.data.text;
    }
    if(element.style) {
      text.css(element.style);
    }
    /**
    if(element.data.applied) {
      text.text(element.data.series.value);
    } else {
      text.text(element.data.$attr("series/0/data/0"));
    }*/
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
        ;
        //throw new Error(funRes.message);
      }
      runExpressionSuccess(expression)
    });
    function runExpressionSuccess(expression){
      element.setText = function(value){
        text.text(value);
      };
      var initFn = expression.$attr("on/init");
      var repeatFn = expression.$attr("on/repeat");
      if(typeof initFn == "function"){
        try{
          initFn({
            target : element
          })
        } catch(e){
          ;
        }
      } else if(typeof initFn == "function"){
        try{
          repeatFn({
            target : element
          })
        } catch(e){
          ;
        }
      }
    }
    return text;
  }
});
