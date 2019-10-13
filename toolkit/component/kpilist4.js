define(['../../../node_modules/ps-ultility/ps-ultility.js'], function (ultility) {
  return function (data) {
    var dom = $("<div></div>");
    var element = data.element;
    var style = data.element.style;

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
      var render = function (data) {


        var wrap = document.createElement("div");
        // 根据告警级别判断颜色
        var colorObj = {
          1: "width: 15px;height: 15px;border-radius: 50%;background:#00bb7b;margin: 0 26% 0 0;cursor: pointer",
          2: "width: 15px;height: 15px;border-radius: 50%;background:#efd80b;margin: 0 26% 0 0;cursor: pointer",
          4: "width: 15px;height: 15px;border-radius: 50%;background:#cc0000;margin: 0 26% 0 0;cursor: pointer",
          3: "width: 15px;height: 15px;border-radius: 50%;background:#ff8800;margin: 0 26% 0 0;cursor: pointer",
        }



        var style = data.style || {
            padding: "4px 18px"
          };



        var item = $("<div></div>")
        for (var i in data.format) {
          var head = $("<span>" + data.format[i].name + "</span>");
          head[0].style.padding = style.padding;
          head[0].style.background = "#214767";
          item[0].appendChild(head[0]);
        }
        for (var i in data.data) {
          var body = $("<div style='display: flex;justify-content: space-between;padding: 6px 0 0 0'><span>" + data.data[i][data.format[0].value] + "</span><span class='click' style='" + colorObj[data.data[i][data.format[1].value]] + "' data-value='" + data.data[i].kpiCode + "'></span></div>");
          item[0].appendChild(body[0]);

          body.find("span.click").on("click", function (e) {
            element.navigateTo("index", "专业分析", {
              // id: elem.row.nodeId,
              // specialty:elem.row.specialtyProp,
              sensor: "02",
              dataItems: e.target.dataset.value,
              // startdate: new Date(elem.row.arisingTime).getTime()- 2*60*60*1000,
              // enddate:new Date(elem.row.arisingTime).getTime() + 1*60*60*1000
            });
          });
        }
        wrap.appendChild(item[0]);
        dom[0].appendChild(wrap);
      };
      element.render = render;
      if (initFn) {
        try {
          initFn({
            target: element,
          })
        } catch (e) {

        }
      }
    }

    return dom;
  }
});

