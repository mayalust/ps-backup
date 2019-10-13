/**
 * Created by leonlin on 16/11/3.
 */
define(['echarts'], function (echarts) {
  return function (data) {
    var dom = $("<div></div>");
    var element = data.element;
    var global = data.global;
    var target = data.target;
    var route = data.route;
    if (element.style) {
      target.css(element.style);
    }

    var expression;
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
        expression = {};
        ;
      }
    });
    element.render = function (data) {
      dom.children().remove();
      element.Info("../localdb/echartTheme/baogang.json", function(thm){

        function createCell(type, text, col, row) {
          var cell = $("<" + type + "></" + type + ">");
          cell.text(text);
          cell.attr("colspan", col);
          cell.attr("rowspan", row);
          // cell.css("line-height", "30px");
          // cell.css("text-align", "center");
          // cell.css("border", "1px solid #35657d");
          cell.css({
            "line-height":"30px",
            "text-align":"center",
            "border":"1px solid #7FB5D3",
            "text-overflow":"ellipsis",
            "white-space":"nowrap",
            "overflow":"hidden",
            "cursor":"pointer"
          });

          cell.attr("title", text);

          if (type == "th") {
            cell.css("color", "#9AC9EA ");
            cell.css("background-color", "#163855");
          } else {
            cell.css("color", "#BBBBBB");
          }
          cell.css("font-weight", "bold");
          return cell;
        }
        function createTable(d) {
          var table = $("<table></table>");
          table.css("table-layout", "fixed");
          table.css("border", "2px solid #107489");
          table.css("width", "calc(100% - 20px)");
          table.css("margin", "20px 10px");
          function createHeader(title, text, header) {
            var thead = $("<thead></thead>");
            var tr = $("<tr></tr>");
            var left
            tr.append(createCell("th", text, 1, 2));
            tr.append(createCell("th", title, header.length, 1))
            var tr1 = $("<tr></tr>");
            for (var i in header) {
              tr1.append(createCell("th", header[i]))
            }
            thead.append(tr);
            thead.append(tr1);
            return thead;
          }

          function createBody(body) {
            var tbody = $("<tbody></tbody>");

            function createTr(d, attr) {
              var tr = $("<tr></tr>");
              tr.append(createCell("td", attr));
              for (var i in d) {
                tr.append(createCell("td", d[i]));
              }
              return tr
            }

            for (var i in body) {
              tbody.append(createTr(body[i], i));
            }
            return tbody;
          }

          table.append(createHeader(d.title, d.text, d.header))
          table.append(createBody(d.body))
          return table;
        }
        function createEchart(data) {
          var HEIGH = 300;
          var seriesData = [];
          var legendData = [];
          var yAxisName = data.title;
          var xAxisData = data.header;
          for (var j in data.body) {
            legendData.push(j);
            var item = {
              name: j,
              type: 'line',
              data: data.body[j]
            }
            seriesData.push(item);
          }
          var option = {
            tooltip: {
              trigger: 'axis',
              formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
              left: 'center',
              data: legendData
            },
            xAxis: {
              type: 'category',
              name: 'x',
              splitLine: {show: false},
              data: xAxisData
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            yAxis: {
              name: yAxisName,
              type: 'value'
            },
            series: seriesData
          };

          function echart(dom) {
            dom.style.height = HEIGH + "px";
            return echarts.init(dom, thm);
          }

          var div = $("<div></div>");
          setTimeout(function () {
            var ins = echart(div[0]);
            ins.setOption(option);
          });
          return div;
        }

        for (var i in data) {
          dom.append(createTable(data[i]))
        }
        for (var i in data) {
          dom.append(createEchart(data[i]));
        }
      });
    }
    function createEchart(){
      var div = $("<div></div>");
      div.css("height", "300px");
      dom.append(div);
      var option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      };
      var ins = echart.init(div[0], options)
    }
    var initFn = expression.$attr("on/init");
    if (initFn) {
      try {
        initFn({
          target: element,
          global: global
        })
      } catch (e) {
        element.growl(e.message, "warning");
      }
    }
    return dom;
  }
});
