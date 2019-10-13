define(['../../../node_modules/ps-ultility/ps-ultility.js'], function(ultility){
  return function(data) {
    var dom = $("<div></div>");
    var element = data.element;
    var style = data.element.style;

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
      var render = function(data,kpiValueObj,kpiDic,alertLevelObj1){

        var wrap = document.createElement("div");
        // 根据告警级别判断颜色
        var colorObj = {
          1:"#00bb7b",
          2:"#efd80b",
          3:"#ff8800",
          4:"#cc0000",
        }
          var item = $("<div style='display: flex;flex-wrap: wrap'></div>")
          // 拼接所有的数据项
          for(var i in data){
            var value = kpiValueObj[i] ? (kpiValueObj[i].value-0).toFixed(2) + kpiDic[i].unit: "-";
            var levelColor = alertLevelObj1[i] ? colorObj[alertLevelObj1[i].value] :"#00bb7b";
            var items =  $("<div style='margin:5px 0px;text-align: right;width: 32%'><span style='color:#b4b5b5;margin-right: 6px; '>"+data[i].kpiName+"</span><span class='click' style='cursor: pointer; width: 60px;display: inline-block; border-radius: 8px;background:"+levelColor+";text-align: center;color: white'>"+value+"</span></div>")
            item[0].appendChild(items[0]);
            items.find("span.click").on("click", function(e){
                element.navigateTo("index", "专业分析", {
                // id: elem.row.nodeId,
                // specialty:elem.row.specialtyProp,
                  sensor: "01",
                  dataItems:i
                // startdate: new Date(elem.row.arisingTime).getTime()- 2*60*60*1000,
                // enddate:new Date(elem.row.arisingTime).getTime() + 1*60*60*1000
              });
            });
          }
          wrap.appendChild(item[0]);
        dom[0].appendChild(wrap);
      };
      element.render = render;
      if(initFn){
        try{
          initFn({
            target: element,
          })
        } catch(e){

        }
      }
    }
    return dom;
  }
});

