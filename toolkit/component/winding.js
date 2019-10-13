/**
 * Created by whui on 2018/11/5.
 */
define(['../../../node_modules/ps-ultility/ps-ultility.js'], function(ultility){
  return function(data) {
    var dom = $("<div></div>");
    var element = data.element;
    var global = data.global;
    var style = data.element.style;
    var wrap = document.createElement("div");
    //wrap.style.width = "500px";
    //wrap.style.height = "500px";
    //wrap.style.background = "red";
    //wrap.style.backgroundImage = "url('../car.jpg')";
    //wrap.style.backgroundRepeat = "no-repeat";
    //wrap.style.backgroundPosition = "center";
    //wrap.style.backgroundSize = "100%";
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
        console.error(funRes.message);
      }
      runExpressionSuccess(expression)
    });
    function runExpressionSuccess(expression){
      var initFn = expression.$attr("on/init");
      style = style ? style : {};
      var render = function(d){
        //d为传过来的数据
        //更改代码

        var fragement = document.createDocumentFragment();

        var wrap = document.createElement("div");
        wrap.style.width="100%";
        wrap.style.height="600px";
        wrap.style.border="1px solid black";
        wrap.style.display="flex";
        wrap.style.justifyContent="center";
        wrap.style.alignItems="center";

        var wind = document.createElement("div");
        wind.style.width = "250px";
        wind.style.height = "250px";
        wind.style.backgroundImage = "url('../images/benti/gaolubenti.svg')";
        wind.style.backgroundRepeat = "no-repeat";
        wind.style.backgroundPosition = "center top";
        wind.style.backgroundSize = "contain";
        wind.style.position = "relative";
        wind.style.display="flex";
        wind.style.justifyContent="center";
        wind.style.alignItems="center";

        function each(n, i){

          //point1
          var point1 = document.createElement("div");
          point1.innerText = i<9? "0"+(i+1) :i+1;
          point1.style.width = "30px";
          point1.style.height = "80px";
          point1.style.paddingTop = "5px";
          point1.style.backgroundImage="url(../images/benti/gaolu_green.svg)";
          point1.style.backgroundSize = "contain";
          point1.style.backgroundRepeat ="no-repeat";
          point1.style.textAlign= "center";
          point1.style.fontSize = "14px";
          point1.style.color = "white";
          //point1.style.background = "green";
          //point2
          var point2 = document.createElement("div");
          point2.innerText = i<9? "0"+(i+1) :i+1;
          point2.style.width = "30px";
          point2.style.height = "80px";
          point2.style.paddingTop = "5px";
          point2.style.backgroundImage="url(../images/benti/gaolu_yellow.svg)";
          point2.style.backgroundSize = "contain";
          point2.style.backgroundRepeat ="no-repeat";
          point2.style.textAlign = "center";
          point2.style.fontSize = "14px";
          point2.style.color = "white";
          //point3
          var point3 = document.createElement("div");
          point3.innerText = i<9? "0"+(i+1) :i+1;
          point3.style.width = "30px";
          point3.style.height = "80px";
          point3.style.paddingTop = "5px";
          point3.style.backgroundImage="url(../images/benti/gaolu_orange.svg)";
          point3.style.backgroundSize = "contain";
          point3.style.backgroundRepeat ="no-repeat";
          point3.style.textAlign = "center";
          point3.style.fontSize = "14px";
          point3.style.color = "white";
          //point4
          var point4 = document.createElement("div");
          point4.innerText = i<9? "0"+(i+1) :i+1;
          point4.style.width = "30px";
          point4.style.height = "80px";
          point4.style.paddingTop = "5px";
          point4.style.backgroundImage="url(../images/benti/gaolu_red.svg)";
          point4.style.backgroundSize = "contain";
          point4.style.backgroundRepeat ="no-repeat";
          point4.style.textAlign = "center";
          point4.style.fontSize = "14px";
          point4.style.color = "white";

          var box = document.createElement("div");
          box.style.width = "30px";
          box.style.height = "410px";
          box.style.position = "absolute";
          box.style.transform = "rotate("+i*9+"deg)";

          //设置默认样式
          var col = n;
          //;
          if(col){
            var op = col.split("_")[1];
            if(op == "1"){
              box.appendChild(point1);
            }else if(op == "2"){
              box.appendChild(point2);
            }else if(op == "3"){
              box.appendChild(point3);
            }else if(op == "4"){
              box.appendChild(point4);
            }else {
              box.appendChild(point1);
            }
          }else {
            box.appendChild(point1);
          }

          wind.appendChild(box);


        }
        //动态点数
        //for(var i = 0; i < d.length; i++){
        //  each(d[i], i);
        //}
        //固定点数
        for(var i = 0; i < 40; i++){
          each(d[i], i);
        }
        wrap.appendChild(wind);
        fragement.appendChild(wrap);
        dom[0].appendChild(fragement);









      };
      element.render = render;
      if(initFn){
        try{
          initFn({
            target: element,
            global : global
          })
        } catch(e){
          ;
        }
      }
    }
    return dom;
  }
});

