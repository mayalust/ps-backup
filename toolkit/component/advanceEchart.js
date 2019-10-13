/**
 * Created by leonlin on 16/11/3.
 */
define([], function () {
  return function (data) {
    var myChart;
    var q = data.q;
    var events = {};
    var element = data.element;
    var allLoadedPromise = data.allLoadedPromise;
    var themeData;
    var defer = q.defer();
    var global = data.global;
    var $scope = data.$scope;
    var target = $("<div></div>");
    if (element.style) {
      target.css(element.style);
    };
    if (element.getTheme) {
      var theme = element.getTheme(themeStr);
    } else {

    }
    target.css("position", "relative");
    var themeStr = element.$attr("parameters/theme");
    var expression;
    q.all(allLoadedPromise).then(function (d) {
      events["allComponentReady"];
    })
    $$.runExpression(element.$attr("advance/expression"), function (funRes) {
      if (funRes.code == "0") {
        var fnResult = funRes.data;
        if (typeof fnResult == 'function') {
          expression = fnResult(data, system);
        } else {
          expression = fnResult;
        }
        expression = expression ? expression : {};
      } else {
        expression = {};;
        //throw new Error(funRes.message);
      }
      runExpressionSuccess(expression);
    });

    function runExpressionSuccess(expression) {
      var initFn = expression.$attr("on/init");
      var clickFn = expression.$attr("on/click");
      var dblclickFn = expression.$attr("on/dblclick");
      // echart渲染
      element.$on = function (name, callback) {
        events[name] = callback;
      }
      element.$emit = function (name, data) {
        typeof events[name] === "function" ?
          events[name](data) : null;
      }
      element.showLoading = function () {
        //console.error( "======" + ( myChart ? myChart.id : myChart ));
        myChart && myChart.showLoading('default', {
          text: '计算中，请稍候...',
          maskColor: '#164464',
          textColor: '#fff'
        });
      };
      element.hideLoading = function () {
        myChart.hideLoading();
      }
      element.resize = function () {
        myChart.resize();
      };
      element.hideNoData = function () {
        var noDataDom = target.find("#noDataDom");
        noDataDom.remove();
      }
      element.show = function () {
        target.css("display", "block");
      }
      element.hide = function () {
        target.css("display", "none");
      }
      element.showNoData = function () {
        target.find("#noDataDom").remove();
        var noDataDom = $("<table><tr><td></td></tr></table>");
        noDataDom.attr("id", "noDataDom");
        noDataDom.css("width", "100%");
        noDataDom.css("height", "100%");
        noDataDom.css("position", "absolute");
        noDataDom.css("z-index", 1);
        noDataDom.css("background-color", "#164464");
        var td = noDataDom.find("td");
        td.css("text-align", "center");
        td.css("vertical-align", "middle");
        td.text("暂无数据");
        target.prepend(noDataDom);
        //target.css("border", "1px solid red");
      };
      var requireBack = function (echarts, themeObj) {
        if (themeData) {
          echarts.registerTheme('baogang', themeData);
          myChart = echarts.init($(target)[0], 'baogang');
        } else {
          myChart = echarts.init($(target)[0], themeObj);
        }
        element.render = function (option) {
          defer.resolve("echart render success!!");
          if (myChart == null) {
            return;
          }
          myChart.setOption(option, true);
          myChart.off("click");
          myChart.on("click", function (event) {
            if (clickFn) {
              clickFn({
                target: element,
                global: global,
                ui: event
              })
            }
          });
          myChart.off("dblclick");
          myChart.on("dblclick", function (event) {
            if (dblclickFn) {
              dblclickFn({
                target: element,
                global: global,
                ui: event
              })
            }
          });
          return myChart;
        };
        // 增加渐变的方法
        element.linearGradient = function (a, b, c, d, e) {
          return new echarts.graphic.LinearGradient(a, b, c, d, e)
        };
        element.registerMap = function (type, mapJson) {
          echarts.registerMap(type, mapJson)
        };
        if (initFn) {
          try {
            initFn({
              target: element,
              global: global,
              echarts: echarts
            })
          } catch (e) {
            console.error(e);
          }
        }
      };
      if (theme == 'default') {
        element.Info("../localdb/echartTheme/baogang.json", function (th) {
          themeData = th;
          require(['echarts'], requireBack);
        });
      } else {
        require(['echarts', theme], requireBack);
      };
    }
    element.destroy(function (e) {
      //console.error(myChart.id + "__删除成功( disposed )");
      myChart && myChart.clear();
      myChart && myChart.dispose();
      myChart = null;
    });
    target.promise = defer.promise;
    return target;
  }
})