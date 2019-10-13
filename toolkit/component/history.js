/**
 * Created by leonlin on 16/11/3.
 */
define([], function(){
  return function(data) {
    var dom = $("<div></div>").addClass("row");
    var element = data.element;
    var global = data.global;
    var style = data.element.style;
    // var timeData = element.$attr("parameters/data");
    var expression;
    $$.runExpression(element.$attr("advance/expression"), function(funRes) {
      if(funRes.code == "0") {
        var fnResult = funRes.data;
        if(typeof fnResult == 'function') {
          expression = fnResult(data, system);
        } else {
          expression = fnResult;
        }
        expression = expression || {};
      } else {
        expression = {};
        ;
        //throw new Error(funRes.message);
      }
    });
    var initFn = expression.$attr("on/init");
    style = style ? style : {};
    var render = function(data){
        var ul = $("<ul></ul>").addClass("timeline");
        if(style){
          ul.css(style);
        }
        var createItem = function(historyData){
          var li = $("<li></li>");
          var iIcon = $("<i></i>");
          var h3 = $("<h3></h3>").addClass("timeline-header no-border");
          var span = $("<span></span>").addClass("time");
          var divTime = $("<div></div>").addClass("timeline-item");
          var h3Str = document.createDocumentFragment(), h3;
          if(historyData.time){
            span.text(historyData.time);
          }
          if(historyData.icon){
            iIcon.addClass(historyData.icon);
          }
          if(historyData.disList.length > 0){
            for(var i in historyData.disList){
              var fn = historyData.disList[i].click;
              h3 = document.createElement("h3");
              h3.setAttribute("class", "timeline-header no-border");
              h3.innerHTML = historyData.disList[i].value;
              h3Str.appendChild(h3);
              fn ? h3.onclick = fn : null;
            }
          }else{
            h3Str = "<h3 class='timeline-header no-border'>处理人:默认</h3>";
          }
          divTime.append(span);
          divTime[0].appendChild(h3Str);
          li.append(iIcon);
          li.append(divTime);
          return li;
        };
        if(data.length > 0){
          for(var i in data){
            ul.append(createItem(data[i]));
          };
        }
        var li = $("<li></li>");
        li.css("clear", "both");
        ul.append(li);
        dom.append(ul);
    };
    element.render = render;
    if(initFn){
      try{
        initFn({
          target: element,
          global : global
        })
      } catch(e){
        // if(route.current.$$route.controller == "freeStyleCtrl"){
        //   growl.error("组件［时间轴］的初始化表达式配置发生错误！");
        // };
        ;
      }
    }
    return dom;
  }
});
