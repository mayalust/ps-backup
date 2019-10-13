/**
 * Created by leonlin on 16/11/3.
 */
define(['../../../node_modules/ps-ultility/ps-ultility.js'], function (ultility) {
  return function (data) {
    var dom = $("<div></div>");
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

    function runExpressionSuccess(expression) {
      var initFn = expression.$attr("on/init");
      style = style ? style : {};
      var render = function (d) {
        var wrap = document.createElement("div");
        wrap.style.display = "flex";
        var wrap1 = document.createElement("div");
        var wrap2 = document.createElement("div");
        var fragement = document.createDocumentFragment();
        wrap1.style.flex = "1";
        wrap2.style.width = "30px";
        wrap2.style.padding = "4px 0";
        var index = 0;

        function each(n, i) {
          var item = document.createElement("div");
          item.style.float = "left";
          item.style.width = "9%";
          item.style.border = "1px solid #25729d";
          item.style.margin = "2px";

          var ids = document.createElement("div");
          ids.style.padding = "8px 0px 9px 0";
          for (var i = 0; i < n.length; i++) {
            var unit0 = document.createElement("div");
            var empty = document.createElement("div");
            //标题
            if (i == 0) {
              var text = document.createElement("div");
              text.innerText = n[0].instanceName;
              text.style.fontSize = "14px";
              text.style.background = "#214770";
              text.style.textAlign = "center";
              text.style.display = "block";
              text.style.cursor = "pointer";
              unit0.appendChild(text);
              var text1 = document.createElement("div");
              text1.style.height = "17px";
              text1.style.textAlign = "center";
              text1.style.display = "block";
              text1.style.padding = "10px 0";
              empty.appendChild(text1)

            }

            var unit = document.createElement("div");
            unit.innerText = n[i].value;
            unit.style.width = "80%";
            unit.style.margin = "3% auto";
            unit.style.textAlign = "center";
            unit.style.color = "#FFFFFF";
            unit.style.fontSize = "12px";
            unit.style.cursor = "pointer";
            unit.setAttribute("instance", n[i].instance);
            unit.setAttribute("kpiCode", n[i].kpiCode);



            //判断颜色
            if (n[i].alertLevel == 1) {
              unit.style.background = "#00bb7b";
            } else if (n[i].alertLevel == 2) {
              unit.style.background = "#efd80b";
            } else if (n[i].alertLevel == 3) {
              unit.style.background = "#ff8800";
            } else if (n[i].alertLevel == 4) {
              unit.style.background = "#cc0000";
            }
            //点击设置页面的跳转
            unit.onclick = function (e) {
              element.navigateTo("index", "专业分析", {
                sensor: unit.getAttribute("instance"),
                dataItems: unit.getAttribute("kpiCode")
              });
            }
            unit0.appendChild(unit);
            item.appendChild(unit0);
            var unit2 = document.createElement("div");
            unit2.innerText = n[i].kpiName.slice(-2);
            unit2.style.width = "80%";
            unit2.style.textAlign = "center";
            unit2.style.color = "#ffffff";
            unit2.style.fontSize = "12px";
            empty.appendChild(unit2);
            ids.appendChild(empty);
          }
          if (index % 10 == 0) {
            wrap2.appendChild(ids);
          }
          index++;
          wrap1.appendChild(item);

        }

        function sortedKeys(obj, callback) {
          var keys = [],
            key;
          for (var i in obj) {
            keys.push(i);
          };
          keys.sort(function (a, b) {
            return a < b ? -1 : 1;
          });
          for (i = 0; i < keys.length; i++) {
            key = keys[i];
            callback(obj[key], key);
          }
        }
        sortedKeys(d, function (n, i) {
          each(n, i);
        });

        wrap.appendChild(wrap2);
        wrap.appendChild(wrap1);
        fragement.appendChild(wrap);
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
          ;
        }
      }
    }

    return dom;
  }
});