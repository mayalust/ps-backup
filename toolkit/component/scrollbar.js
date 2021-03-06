/**
 * Created by leonlin on 16/11/3.
 */
define([], function(){
    return function(data) {
      var element = data.element;
      var global = data.global;
      var target = $("<div></div>");
      target.css("position", "relative");
      target.css("height", "20px");
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
      });
      var initFn = expression.$attr("on/init");
      var repeatFn = expression.$attr("on/repeat");
      var changeFn = expression.$attr("on/change");
      var render = function(val){
        target.children().remove();
        $$.loadExternalJs(['jquery-ui'], function(){
          var slider = $("<div></div>");
          slider.slider({
            range: "min",
            value : val || 0,
            change : function(event){
              var value = slider.slider("option", "value");
              if(changeFn){
                changeFn({
                  target : element,
                  global : global,
                  value : value
                })
              }
            },
            create : function(){
              var slide = slider.find(".ui-slider-handle");
              var slidebg = slider;
              var range = slider.find(".ui-slider-range");
              slide.css("cursor", "pointer");
              slide.css("border-radius", "50%");
              slide.css("width", "20px");
              slide.css("height", "20px");
              slide.css("top", 0);
              slide.css("background-color", "#009f78");
              slide.css("border", 0);
              slidebg.css("height", "22px");
              slidebg.css("border-radius", "9px");
              range.css("border-top-left-radius", "9px");
              range.css("border-bottom-left-radius", "9px");
              range.css("background-color", "#3edda7");
            }
          });
          target.append(slider);
        });
      };
      element.render = render;
      if(typeof initFn == "function"){
        try {
          initFn({
            target : element,
            global : global
          })
        } catch(e){
          ;
        }
      } else if(typeof repeatFn != "function" ){
        render();
      }

      return target;
    };
});
