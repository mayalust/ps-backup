/**
 * Created by whui on 2018/11/5.
 */
define(['../../../node_modules/ps-ultility/ps-ultility.js'], function (ultility) {
  return function (data) {
    var dom = $(`<div style="display:flex;"></div>`);
    var element = data.element;
    var global = data.global;
    var style = data.element.style;
    var wrap = document.createElement("div");
    var expression;
    $$.runExpression(element.$attr("advance/expression"), function (funRes) {
      if (funRes.code == "0") {
        var fnResult = funRes.data;
        if (typeof fnResult == 'function') {
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

    function runExpressionSuccess (expression) {
      var initFn = expression.$attr("on/init");
      style = style ? style : {};
      var render = function (d) {
        var wrap = document.createElement("div");

        var fragement = document.createDocumentFragment();
        //获取鼠标滚动事件
        if (document.addEventListener) {
          document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        var scrollFunc = function (e) {
          var bWidth = wrap.clientWidth;
          var wh = 0.35;
          wrap.style.width = "90%";
          wrap.style.height = bWidth / wh + "px";
        }
        window.onmousewheel = document.onmousewheel = scrollFunc;

        wrap.style.backgroundImage = "url('../images/benti/LBK.svg')";
        wrap.style.backgroundRepeat = "no-repeat";
        wrap.style.backgroundPosition = "center top";
        wrap.style.backgroundSize = "100%";
        wrap.style.paddingLeft = "4%";
        wrap.style.paddingRight = "4%";

        function each (n, i) {
          var item = document.createElement("div");
          item.style.float = "left";
          item.style.width = "6.65%";
          item.style.height = "6.12%";
          item.style.paddingTop = "3%";
          //item.style.marginBottom = "1%";
          var ids = document.createElement("div");
          ids.innerHTML = n.id;
          ids.style.fontSize = "0px";
          ids.style.width = "0px";
          ids.style.height = "0px";
          item.appendChild(ids);
          for (var i = 0; i < n.status.length; i++) {
            var unit0 = document.createElement("div");
            unit0.style.height = "10%";
            unit0.style.paddingLeft = "15%";
            if (i == 1) {
              var text = document.createElement("span");
              text.innerText = n.status[i].split("_")[0];
              text.style.fontSize = "14px";
              text.style.color = "#FFFFFF";
              if (n.status[i].split("_")[1]) {
                if (n.status[i].split("_")[1] == "1") {
                  text.style.backgroundImage = "url('../images/benti/bar_G.svg')";
                } else if (n.status[i].split("_")[1] == "2") {
                  text.style.backgroundImage = "url('../images/benti/bar_Y.svg')";
                } else if (n.status[i].split("_")[1] == "3") {
                  text.style.backgroundImage = "url('../images/benti/bar_O.svg')";
                } else if (n.status[i].split("_")[1] == "4") {
                  text.style.backgroundImage = "url('../images/benti/bar_R.svg')";
                }
              }

              text.style.textAlign = "center";
              text.style.paddingTop = "7%";
              text.style.display = "block";
              text.style.width = "89%";
              text.style.height = "110%";
              text.style.marginTop = "18%";

              text.style.cursor = "pointer";
              text.onclick = function () {
                //兼容性处理
                var oEvent = event;
                //动态获取X,Y
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
                var a = (oEvent.clientX + scrollTop).toString();
                var b = (oEvent.clientY + scrollLeft).toString();

                var mo = document.getElementsByTagName("body")[0];
                //蒙版
                var mo2 = document.createElement("div");
                mo2.style.display = "block";
                mo2.style.position = "fixed";
                mo2.style.left = "0px";
                mo2.style.top = "0px";
                mo2.style.background = "rgba(0,0,0,0.5)";
                mo2.style.width = "100%";
                mo2.style.height = "100%";
                mo2.style.zIndex = "999";
                //弹框
                var mo3 = document.createElement("div");
                mo3.style.display = "block";
                mo3.style.position = "absolute";

                //对四个边界进行判断
                mo3.style.left = a + "px";
                mo3.style.top = b + "px";
                //JS动态获取div的宽度
                var w = wrap.clientWidth || wrap.offsetWidth;
                /*对于大的DIV2个边界的判断*/
                if (a <= 0) {
                  mo3.style.left = 0 + "px";
                }
                if (a >= w * 0.8) {
                  mo3.style.left = w * 0.8 + "px";
                }

                mo3.style.background = "rgba(255,255,255,0.95)";
                mo3.style.width = "19%";
                mo3.style.height = "17%";
                mo3.style.paddingTop = "2%";
                mo3.style.paddingLeft = "2%";
                mo3.style.zIndex = "1000";
                //右上角
                var mo4 = document.createElement("span");
                mo4.innerText = "×";
                mo4.style.position = "absolute";
                mo4.style.right = "5%";
                mo4.style.top = "5%";
                mo4.style.width = "30px";
                mo4.style.height = "30px";
                mo4.style.cursor = "pointer";
                mo4.style.fontSize = "30px";
                mo3.appendChild(mo4);
                mo4.onclick = function () {
                  mo2.style.display = "none";
                  mo3.style.display = "none";
                };
                //form表单
                for (var i = 0; i < n.status.length; i++) {

                  if (typeof (n.status[i]) == "object" && n.status[i].name) {
                    var form = document.createElement('form');
                    form.style.marginTop = "5%";
                    form.style.height = "10px";
                    var input1 = document.createElement('label');
                    input1.style.width = "20%";
                    input1.innerHTML = n.status[i].name;

                    var input2 = document.createElement('label');
                    input2.style.width = "20%";

                    if (i == 2) {
                      input2.innerHTML = n.status[i].data;
                    } else {
                      input2.innerHTML = n.status[i].data;
                    }

                    var input3 = document.createElement('label');
                    input3.style.width = "60%";
                    input3.innerHTML = n.status[i].date;
                    form.appendChild(input1);
                    form.appendChild(input2);
                    form.appendChild(input3);
                    mo3.appendChild(form);
                  }
                }
                mo.appendChild(mo2);
                mo.appendChild(mo3);
              };
              unit0.appendChild(text);
            }
            //第二项
            if (i == 0) {
              if (n.status[0].name == "出水流量") {
                var unit = document.createElement("div");
                unit.innerText = n.status[i].data;
                unit.style.width = "80%";
                unit.style.marginTop = "67%";
                unit.style.textAlign = "center";
                unit.style.color = "black";
                unit.style.fontSize = "14px";
                unit.style.cursor = "pointer";
                //点击设置页面的跳转
                unit.onclick = function (e) {
                  var nodeId = e.path[2].textContent.substring(0, 1);
                  element.trigger("queryTablelist1", nodeId);
                };
                unit0.appendChild(unit);
              } else {
                var unit = document.createElement("div");
                //unit.innerText = n.status[i].data ;
                unit.style.width = "80%";
                unit.style.marginTop = "65%";
                unit.style.textAlign = "center";
                unit.style.color = "black";
                unit.style.fontSize = "14px";
                unit.style.cursor = "pointer";
                //点击设置页面的跳转
                unit.onclick = function (e) {
                  var nodeId = e.path[2].textContent.substring(0, 1);
                  element.trigger("queryTablelist1", nodeId);
                };
                unit0.appendChild(unit);
              }
            }
            //第三项
            if (i == 2) {
              var unit = document.createElement("div");
              unit.innerText = n.status[i].data;
              unit.style.width = "80%";
              unit.style.marginTop = "34%";
              unit.style.textAlign = "center";
              unit.style.color = "yellow";
              unit.style.fontSize = "14px";
              unit.style.cursor = "pointer";

              //点击设置页面的跳转
              unit.onclick = function (e) {
                var nodeId = e.path[2].textContent.substring(0, 1);
                element.trigger("queryTablelist1", nodeId);
              };
              unit0.appendChild(unit);
            }
            //第四项
            if (i == 3) {
              var unit = document.createElement("div");
              unit.innerText = n.status[i].data;
              unit.style.width = "80%";
              unit.style.marginTop = "35%";
              //unit.style.paddingLeft = "25%";
              unit.style.textAlign = "center";
              unit.style.color = "black";
              unit.style.fontSize = "14px";
              unit.style.cursor = "pointer";

              //点击设置页面的跳转
              unit.onclick = function (e) {
                var nodeId = e.path[2].textContent.substring(0, 1);
                element.trigger("queryTablelist1", nodeId);
              };
              unit0.appendChild(unit);
            }
            item.appendChild(unit0);
          }
          wrap.appendChild(item);
        }

        for (var i = 0; i < d.length; i++) {
          each(d[i], i);
        }
        fragement.appendChild(wrap);

        var $titleBox = $(`<div style="width: 10%;"></div>`);
        var $titleItemBox = $(`<div style="height: 100%;transform: translateX(25%)"></div>`);
        for (var num = 0; num < 16; num++) {
          $titleItemBox.append(`<div style="height: 6.12%;padding-top: 55%;">
                <p style="text-align: right;font-size: 16px;">出水流量</p>
                <p style="text-align: right;font-size: 16px;">管号</p>
                <p style="text-align: right;font-size: 16px;margin-top: 15%;">补正后差流量</p>
                <p style="text-align: right;font-size: 16px;margin-top: 16%;">进水流量</p></div>`);
        }
        $titleBox.append($titleItemBox);
        dom.append($titleBox);
        dom[0].appendChild(fragement);
      };
      element.render = render;
      if (initFn) {
        try {
          initFn({
            target: element,
            global: global
          })
        } catch (e) {
        }
      }
    }

    return dom;
  }
});
