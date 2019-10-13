function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["commonMethod"],function(commonMethod){return function(data){var run,baseOption,extension={},expression,target,echartTarget,zoomOld,mapJson,tg={},growl=data.growl,elemData=data,wrap=$("<div></div>"),echartDom=$("<div></div>"),element=data.element,buttonEnabled=data.buttonEnabled,serviceCenterService=data.serviceCenterService,kqiManagerUIService=data.kqiManagerUIService,thridPartyApiService=data.thridPartyApiService,angularStyle=data.angularStyle,timeout=data.timeout,global=data.global,window=data.window,route=data.route,previewMode=data.previewMode,rootScope=data.rootScope,Info=data.Info,SwSocket=data.SwSocket,scope=data.scope,ngDialog=data.ngDialog,kqiModel=element.$attr("data/kqiModel"),ci,kpi,oriLength=0,loadData=[],reconstruct=function(e){var t=e.$clone();for(var a in t.series)if(0==t.series[a].show)t.series[a].data=[];else{var n=[];for(var r in t.series[a].data)0!=t.series[a].data[r].show&&n.push(t.series[a].data[r]);t.series[a].data=n}return t};wrap.css("position","relative"),element.resource_applied=[],element.kpi_applied=[],element.resource_time={},Object.defineProperty(element,"resource_applied",{enumerable:!1}),Object.defineProperty(element,"kpi_applied",{enumerable:!1}),wrap.append(echartDom),element.showPanel=function(e){var r,t=$("<div></div>"),i=elemData.routeParam.page,a=$("<div></div>").css("position","relative"),n=$("<div></div>").css("height","1px"),s=$("<div></div>").css("cursor","pointer").css("right","10px").css("top","10px").css("position","absolute"),o=$("<div></div>").text("选择本区域项目").css("margin","20px").css("font-weight","bold"),c=$("<ul></ul>").css("margin","10px").css("padding","0px"),l=function(n){var e=$("<li></li>").css("padding","7px").css("margin","3px").css("color","#fff").css("list-style","none").css("cursor","pointer").css("background-color","#3c8dbc");return e.text(n.label),e.on("click",function(e){var t=elemData.routeParam.parameter;t=null==t?["0"]:JSON.parse(t);var a={projectId:n.id};t.push(a),r=encodeURIComponent(JSON.stringify(t)),elemData.window.location.href="../app-sc/index_freeboard.html#/freeboard/"+i+"|topo/"+r}),e};for(var d in e)c.append(l(e[d]));var p=$("<span></span>").addClass("glyphicon glyphicon-remove");s.append(p),s.on("click",function(){t.remove()}),a.append(s),a.append(n),a.append(o),a.append(c),a.css("margin","100px auto"),a.css("width","400px"),a.css("min-height","200px"),a.css("background-color","#fff"),t.css("width","100%"),t.css("height","100%"),t.css("left","0px"),t.css("top","0px"),t.css("position","absolute"),t.css("background-color","rgba(0,0,0,.6)"),t.css("z-index",1e3),echartDom.before(t),t.append(a)},element.setResource=function(e){element.resource_applied=e},element.setTime=function(e){element.resource_time=e},element.setKpi=function(e){element.kpi_applied=e},element.setHighlight=function(e){var t,a;for(var n in baseOption.series)for(var r in baseOption.series[n].data)baseOption.series[n].data[r].label==e&&(a=baseOption.series[n].symbol,t=baseOption.series[n].data[r]);if(t){var i=baseOption.series.find(function(e){return"highlight"==e.name}),s=baseOption.series.find(function(e){return"select"==e.name});i.data=[t],i.show=!0,s&&(s.data=[t],s.symbol=a),baseOption.bmap.center=t.value}echartTarget.setOption(reconstruct(baseOption),!0)},element.searchHighlight=function(i){var s;for(var e in baseOption.series)for(var t in baseOption.series[e].data)baseOption.series[e].data[t].label==i&&(s=baseOption.series[e].data[t]);!function(e){var t=expression.$attr("zoom");baseOption.bmap.center=e.value,baseOption.bmap.zoom=9;if(t){var a=baseOption.series.find(function(e){return"level0"==e.name}),n=baseOption.series.find(function(e){return"level1"==e.name});!function(e){var t=e.data.find(function(e){return e.label==i});for(var a in e.data)e.data[a].show=!0,t&&e.data[a]&&e.data[a].value[0]==t.value[0]&&e.data[a].value[1]==t.value[1]&&e.data[a].label!=t.label&&(e.data[a].show=!1)}(n),a.show=!1,n.show=!0}var r=baseOption.series.find(function(e){return"highlight"==e.name});r.data=[s],r.show=!0,echartTarget.setOption(reconstruct(baseOption),!0)}(s)};var createSearch=function(o){var e=$("<div></div>"),i=o.data;e.css("position","absolute"),e.css("z-index",9),e.css("right","50px"),e.css("top","20px"),e.css("maxHeight","600px"),e.css("overflow","auto");var t=$("<div class='row' style='padding:10px;width:280px;'></div>");t.css("cursor","pointer"),t.css("background-color","rgba(250,250,250,.8)"),t.css("border-bottom","1px solid #ccc");var a,c=$("<input />").addClass("form-control").css("display","inline-block").css("height","35px");expression&&expression.filterLabel&&(a=expression.filterLabel);var n=$("<span></span>").text(a||"项目检索").css("color","#666").css("display","block").css("font-size","14px").css("line-height","30px").css("font-weight","bold"),r=$("<span></span>").addClass("glyphicon glyphicon-search"),s=$("<button></button>").addClass("btn btn-primary"),l=$("<div></div>");return s.append(r),t.append(n),t.append(c),e.append(t),e.append(l),c.on("keyup",function(e){var a=c.val();l.children().remove();var t=function(s){var e=$("<div></div>").text(s.label);return e.css("padding","10px"),e.css("cursor","pointer"),e.css("background-color","rgba(250,250,250,.8)"),e.css("border-bottom","1px solid #ccc"),e.on("click",function(e){e.stopPropagation();var t=expression.$attr("zoom");c.val(s.label),l.children().remove(),baseOption.bmap.center=s.value,baseOption.bmap.zoom=9;if(t){var a=baseOption.series.find(function(e){return"level0"==e.name}),n=baseOption.series.find(function(e){return"level1"==e.name});!function(e){var t=e.data.find(function(e){return e.label==s.label});for(var a in e.data)e.data[a].show=!0,t&&e.data[a]&&e.data[a].value[0]==t.value[0]&&e.data[a].value[1]==t.value[1]&&e.data[a].label!=t.label&&(e.data[a].show=!1)}(n),a.show=!1,n.show=!0}var r=baseOption.series.find(function(e){return"highlight"==e.name}),i=baseOption.series.find(function(e){return"select"==e.name});r.data=o.data.filter(function(e){return e.label==s.label}),r.show=!0,i&&(i.data=dt.data.filter(function(e){return e.label==s.label})),echartTarget.setOption(reconstruct(baseOption))}),e},n=function(e){if(""==a)return!0;var t=$$.chineseCharacterToPinyin(e);return-1!=e.indexOf(a)||-1!=t.indexOf(a.toUpperCase())};for(var r in i)n(i[r].label)&&l.append(t(i[r]))}),e},createDetail=function(){var c=$("<div></div>").css("background-color","#fff");return ci=element.resource_applied,kpi=element.kpi_applied,ci[0]&&serviceCenterService.getValuesByCi(ci,kpi).then(function(e){var t=e.series[0].data.filter(function(e){return-1==e.name.kpi.indexOf("告警")}),a=e.series[0].data.filter(function(e){return-1!=e.name.kpi.indexOf("告警")});t=t.sort(function(e,t){return"项目总数"==t.name.kpi?1:-1}),c.css("position","absolute"),c.css("z-index",9),c.css("left","10px"),c.css("top","10px");var i=["#3c8dbc","#3c8dbc","#aa0000","#649835"],n=function(e,t){var a=$("<div class='row' style='padding:10px;width:170px;'></div>");a.css("cursor","pointer"),a.css("background-color","#fff"),a.css("border-bottom","1px solid #ddd");var n=$("<div class='col-md-12'>"+t.name.kpi+"</div>");n.css("color","#666"),n.css("font-size","14px"),n.css("font-weight","bold");var r=$("<div class='col-md-12'>"+t.value+"</div>");r.css("color",i[e]),r.css("font-size","30px"),r.css("font-weight","bold"),a.append(n),a.append(r),c.append(a),a.on("click",function(e){t.link&&window.open(t.link)})};for(var r in t)n(r,t[r]);var s=$("<div></div>").css("padding","10px");s.css("background-color","#fff");var o=function(e){var t=$("<div></div>").addClass("progress-group"),a=$("<span></span>").addClass("progress-text").text(e.name.kpi),n=$("<span></span>").addClass("progress-number").text(e.value),r=$("<div></div>").addClass("progress sm"),i=$("<div></div>").addClass("progress-bar").css("width",e.value/10*100+"%");switch(e.name.kpi){case"严重告警计数":i.css("background-color","#e7675d");break;case"重要告警计数":i.css("background-color","#ed9700");break;case"次要告警计数":i.css("background-color","#e1cd0a");break;case"警告告警计数":i.css("background-color","#25bce7");break;default:i.css("background-color","#25bce7")}switch(t.append(a).append(n).append(r),r.append(i),i.css("width",n/10*100+"%"),!0){case 8<parseInt(n):i.removeClass().addClass("progress-bar progress-bar-green");break;case 5<parseInt(n):case 3<parseInt(n):i.removeClass().addClass("progress-bar progress-bar-yellow");break;case 1<parseInt(n):i.removeClass().addClass("progress-bar progress-bar-red");break;default:i.removeClass().addClass("progress-bar progress-bar-red")}return t};for(var r in a)s.append(o(a[r]));c.append(s)}),c},removeLast=function(e){return 0<e.length&&0==e[e.length-1].length?e.slice(0,-1):e},setTitle=function(e,t){e.$attr("title/text",t)},setSubtitle=function(e,t){e.$attr("title/subtext",t)},setAxisByCategory=function(e,t,a){var n,r=(n=t)?0==n[n.length-1].length?n.slice(0,-1):n:[];if(oriLength=t[0].length,r.length>=e[a].length){for(var i=0;i<e[a].length;i++)e[a][i].type="category",e[a][i].data=r[i];for(var s=e[a][i-1],o=i;o<r.length;o++)e[a][o]=s,e[a][o].type="category",e[a][o].data=r[o]}else{for(i=0;i<r.length;i++)e[a][i].type="category",e[a][i].data=r[i];for(s=r[i-1],o=i;o<e[a].length;o++)e[a][o].type="category",e[a][o].data=s}},setAxisByValue=function(e,t){for(var a in e[t])e[t][a].type="value"},system={},setSeries=function(r,e){if(e){var t=removeLast(e),a=0;for(var n in t)a++,function(e,t){var a;a=r.series[r.series.length-1]?r.series[r.series.length-1].$clone():{};var n=null==r.series[e]?a:r.series[e].$clone();n.name=t.name,n.data=t.data,n.show=t.show,null==r.series[e]&&(r.series[e]=n),r.series[e].name=t.name,r.series[e].data=t.data,r.series[e].show=t.show}(n,t[n]);for(var i=a;i<r.series.length;i++)delete r.series[i];r.series.$remove(function(e,t){return!t.hasOwnProperty("data")})}},setLegend=function(e,t){e.$attr("legend/data",t)},setVisualMap=function(e,n){var i=function(){var e,t=[];for(var a in n)(e=n[a]).hasOwnProperty("baseline")&&t.push({type:e.baseline,data:e.data});return t}(),t=function(e,t){if(0==t.hasOwnProperty("baseline")){var a=function(e,t,a){var n;for(var r in i)if(0==("over"==(n=i[r]).type?t>n.data[e]:"below"!=n.type||t<n.data[e])){a[e]={name:"alert",value:t};break}};for(var n in t.data)a(n,t.data[n],t.data)}};for(var a in n)t(0,n[a]);return n},setKqiParameters=function(e,t,a){setTitle(e,t.title),setSubtitle(e,t.subtitle),element.data.legend&&setLegend(e,a.getLegend());var n=setVisualMap(e,a.getSeries());setSeries(e,n,a,system),"category"==element.data.xAxisType?setAxisByCategory(e,a.getxAxis(),"xAxis"):setAxisByValue(e,"xAxis"),"category"==element.data.yAxisType?setAxisByCategory(e,a.getxAxis(),"yAxis"):setAxisByValue(e,"yAxis")},setParameters=function(e,t,a){var n=function(e,a,n){var r;return $$.runExpression(e,function(e){if("0"!=e.code)throw new Error(e.message);var t=e.data;r="function"==typeof t?t(a,n):t}),r};setTitle(e,t.title),setSubtitle(e,t.subtitle);var r=element.data.applied?"bind":"manual",i=n(element.$attr("data/legend/"+r),a,system);element.data.legend&&setLegend(e,i);var s=setVisualMap(e,n(element.$attr("data/series/"+r),a,system));if(baseOption.bmap&&1==expression.showFilter){var o=s.find(function(e){return"level0"==e.name}),c=s.find(function(e){return"level1"==e.name}),l=s.find(function(e){return 1==e.searchable});c&&(c.show=!1),previewMode&&(echartDom.before(createDetail()),0!=expression.showSearch&&echartDom.before(createSearch(l))),element.zoomTo=function(e){if(expression.$attr("zoom")){baseOption.bmap.center=e,baseOption.bmap.zoom=9;var t=baseOption.series.find(function(e){return"level0"==e.name}),a=baseOption.series.find(function(e){return"level1"==e.name});baseOption.series.find(function(e){return"highlight"==e.name});t.show=!1,a.show=!0,timeout(function(){echartTarget.setOption(reconstruct(baseOption))})}};var d=function(e){timeout(function(){if(expression.$attr("zoom")){var e=echartTarget.getOption().bmap[0].zoom;if(e<9){var t=baseOption.series.find(function(e){return"level0"==e.name}),a=baseOption.series.find(function(e){return"level1"==e.name}),n=baseOption.series.find(function(e){return"highlight"==e.name});t.show=!0,a.show=!1,n.show=!1}else{t=baseOption.series.find(function(e){return"level0"==e.name}),a=baseOption.series.find(function(e){return"level1"==e.name});t.show=!1,a.show=!0}(baseOption.bmap.zoom=e)!=zoomOld&&echartTarget.setOption(reconstruct(baseOption),!0),zoomOld=e}},e)};window.onmousewheel=function(e){d(1e3)};var p=function e(){$(window).off("click.dbk"),$(window).on("click.db",u),timeout(function(){$(window).off("clic.db"),$(window).on("click.db",e)},500)},u=function(){d(400),$(window).off("click.db"),$(window).on("click.db",p)};$(window).off("click.db"),$(window).on("click.db",p),s=s}setSeries(e,s,a,system),baseOption.bmap&&1==expression.showFilter&&1==o.data.length&&(c&&c.$attr("data/0/value")&&(baseOption.bmap.center=c.$attr("data/0/value")),timeout(function(){echartTarget.setOption(reconstruct(baseOption))})),"category"==element.data.xAxisType?setAxisByCategory(e,n(element.$attr("data/xAxis/"+r),a,system),"xAxis"):setAxisByValue(e,"xAxis"),"category"==element.data.yAxisType?setAxisByCategory(e,n(element.$attr("data/yAxis/"+r),a,system),"yAxis"):setAxisByValue(e,"yAxis")},timespan=element.$attr("data/timespan")?element.$attr("data/timespan"):0,frequency=element.$attr("data/frequency")?element.$attr("data/frequency"):0,format=element.$attr("data/format")?element.$attr("data/format"):"",category=element.$attr("advance/category")?element.$attr("advance/category"):"",condition;$$.runExpression(element.$attr("advance/expression"),function(e){if("0"==e.code){var t=e.data;expression=(expression="function"==typeof t?t(data,system):t)||{}}else expression={}});var validValue=function(e){return"number"==typeof e||"string"==typeof e&&/d+/.test(e)},checkHasValue=function(e){var t=e.series;return t instanceof Array&&t.some(function(e){return e.data.some(function(e){return"object"==_typeof(e)?validValue(e.value):validValue(e)})})},showNoDataSign=function(){if(0==wrap.find(".showNoDataSign").size()){var e=$("<div></div>"),t=(wrap.height(),$("<div></div>"));t.css("color","#fff"),t.css("text-align","center"),t.text("视图无数据输入！"),t.css("line-height","20px"),e.addClass("showNoDataSign"),e.css("width","100%"),e.css("height","20px"),e.css("position","absolute"),e.css("background-color","rgba(0,0,0,.6)"),e.css("z-index",9),e.append(t),wrap.prepend(e)}},hideNoDataSign=function(){wrap.find(".showNoDataSign").remove()};extension.customCategory=element.$attr("advance/custom_category"),extension.aggregate_type=element.$attr("data/aggregate_type"),extension.granularityUnit=element.$attr("data/granularityUnit"),extension.aggregate_instance=element.$attr("data/aggregate_instance"),extension.simulate=expression.simulate;var method=element.$attr("advance/getfunction")?element.$attr("advance/getfunction"):"kpiDataService.getValueList",type=element.$attr("advance/paramtype")?element.$attr("advance/paramtype"):"kpi";extension.aggregate_rule=element.$attr("data/aggregate_rule")?element.$attr("data/aggregate_rule"):0,extension.autoFillBlank=!!element.$attr("data/autoFillBlank")&&element.$attr("data/autoFillBlank"),run=function(e){baseOption=angularStyle.echartToOption(element.echart),"function"==typeof target.hideLoading&&target.hideLoading();var t=function(e){checkHasValue(e);try{target.setOption(e,!0)}catch(e){"freeStyleCtrl"==route.current.$$route.controller&&growl.error("组件［视图］的传入参数发生错误！")}};($(window).on("resize",function(e){target.resize()}),expression.customOption)?t(e[category].getOption()):("object"==_typeof(element.parameters)&&setParameters(baseOption,element.parameters,e),t(baseOption))};var runKqiModel=function runKqiModel(){var kqiModelId=kqiModel.id;kqiManagerUIService.getKqiModelById(kqiModelId,function(event){if("0"==event.code){var kqiModel=event.data,viewContent=JSON.parse(kqiModel.viewContent),expression=eval("("+viewContent.expression+")"),simulate=viewContent.simulate,variables=viewContent.variables,obj={},series=[],xAxis=[],inx=0;obj.getLegend=function(){return variables.map(function(e){return e.name}).concat(["kqi"])},obj.getxAxis=function(){return[xAxis]},obj.getSeries=function(){return series};var loopVar=function(e){var t=e.name,a={name:t,data:[]};for(var n in simulate)simulate[n][t]&&(a.data=a.data.concat(simulate[n][t].split(",").map(function(e){return parseInt(e)})));series.push(a)};for(var i in variables)loopVar(variables[i]);var kqiObj={name:"kqi",data:[]},calKqi=function(e){var t=[];for(var a in variables)e[variables[a].name]&&(e[variables[a].name]=e[variables[a].name].split(",").map(function(e){return parseInt(e)}));for(var n in t[e[variables[0].name].length-1]=expression(e),e[variables[0].name])t[n]=expression(e),xAxis.push(inx),inx++;kqiObj.data=kqiObj.data.concat(t)};for(var j in simulate)calKqi(simulate[j]);series.push(kqiObj),setKqiParameters(baseOption,element.parameters,obj),target.hideLoading(),target.setOption(baseOption,!0)}})};return element.setCondition=function(e){element.$attr("advance/condition",e)},element.getAisInfos=function(){var e=scope.$$childTail.baseConfig;if(e&&e.projectConfig&&"AIS"==e.projectConfig.extendService){var t=e.projectConfig.updateInterval?e.projectConfig.updateInterval:6e4,a=function(){thridPartyApiService.getSignalShipInfo("413149000",function(e){0==e.code&&echartTarget.setOption(reconstruct(baseOption),!0)})};setInterval(function(){a()},t);a()}},element.render=function(data){var ci=element.resource_applied,kpi=element.kpi_applied,startTime=element.resource_time.startTime,endTime=element.resource_time.endTime,getValueList=function(e){element.rawData=e,Object.defineProperty(element,"rawData",{enumerable:!1}),run(e)},getTime=function(e){if(!e)return 0;switch(e.unit){case"second":return 1e3*e.value;case"minute":return 60*e.value*1e3;case"hour":return 60*e.value*60*1e3;case"day":return 24*e.value*60*60*1e3;case"month":return 30*e.value*24*60*60*1e3;default:return e.value}},failure=function(e){run(e)},kpiQueryModel={category:category,isRealTimeData:!0,nodeIds:ci.map(function(e){return e.id}),kpiCodes:kpi.map(function(e){return e.id}),startTime:startTime||null,endTime:endTime||null,timeRange:"",statisticType:"psiot",includeInstance:!0,timePeriod:getTime(timespan),aggregateType:extension.aggregate_type,aggregate_rule:extension.aggregate_rule,aggregate_instance:extension.aggregate_instance,granularityUnit:extension.granularityUnit,condList:[]},condi=element.$attr("advance/condition"),condition;condi=condi||"";try{condition=eval(condi)}catch(e){}null==condition&&(condition=JSON.parse(condi)),data&&(extension.simuData=data),serviceCenterService.getValueListBytime(ci,kpi,timespan,frequency,format,category,type,method,condition,extension,kpiQueryModel).then(getValueList,failure);var paramSocket={ciid:ci.map(function(e){return e.id}).toString(),kpi:kpi.map(function(e){return e.id}).toString()},uuid=Math.uuid(),operation="register",SwSocket_success=function(e,t,a,n,r){if(r&&element.$attr("rawData/category/timestamps")){var i=element.$attr("rawData/category/timestamps")[0],s=function(e){if(!e)return 0;switch(e.unit){case"second":return 1e3*e.value;case"minute":return 60*e.value*1e3;case"hour":return 60*e.value*60*1e3;case"day":return 24*e.value*60*60*1e3;case"month":return 30*e.value*24*60*60*1e3;default:return e.value}}(timespan),o=(a.find(function(e){return r.nodeId==e.id}),n.find(function(e){return r.kpiCode==e.id})),c=t.series.filter(function(e){return e.name==o.label}),l=t.series.filter(function(e){return e.name!=o.label});if(0<c.length){var d=new Date,p=d.getTime();for(var u in t.xAxis[0].data.push(d.FormatByString(format)),c[0].data.push(r.value),l)l[u].data.push(l[u].data[l[u].data.length-1]);if(s<p-i)for(var u in t.xAxis[0].data.shift(),c[0].data.shift(),l)l[u].data.shift();e.setOption(t)}}},gf,hf,jf,kf;gf=echartTarget,hf=baseOption,jf=ci,kf=kpi,SwSocket.register(uuid,operation,function(e){SwSocket_success(gf,hf,jf,kf,e.data)}),SwSocket.send(uuid,operation,"kpi",paramSocket)},element.style&&(wrap.css(element.style),echartDom.css("height",element.style.height),wrap.css("height","auto")),baseOption=angularStyle.echartToOption(element.echart),timeout(function(){$$.loadExternalJs(["echarts","macarons"],function(i){element.getCiKpi(function(e,t){element.resource_applied=e,element.kpi_applied=t;var n=function(){tg.ec=echartTarget=target=i.init(echartDom[0],"macarons"),wrap.off("click"),wrap.on("click",function(e){if(baseOption.bmap){var t=echartTarget.getOption(),a=t.series.find(function(e){return"select"==e.name}),n=t.series.find(function(e){return"highlight"==e.name});a&&(a.data=[]),n&&(n.data=[]);try{expression.$attr("on/wholeClick")({target:element,global:global})}catch(e){}echartTarget.setOption(reconstruct(t),!0)}}),target.on("click",function(e){e.event.cancelBubble=!0;var t=expression.$attr("on/click");if("function"==typeof t)try{t({echart:e,global:global,target:element})}catch(e){"freeStyleCtrl"==route.current.$$route.controller&&growl.error("组件［视图］的点击事件表达式配置发生错误！")}}),target.showLoading();var e=expression.$attr("on/init");if("function"==typeof e)try{e({target:element,global:global})}catch(e){"freeStyleCtrl"==route.current.$$route.controller&&growl.error("组件［视图］的初始化表达式配置发生错误！")}else 0!=expression.$attr("autoload")&&(kqiModel?runKqiModel():element.$attr("data/applied")?element.render():run({}))};if(baseOption.bmap)require(["baiduMap","bmap"],function(e,t){var a=0;!function e(){if(!(a<20))throw new Error("百度视图获取失败!!");a+=1,timeout(function(){null==window.BMap?e():n()})}()},function(){n()});else if(baseOption.geo){var a=baseOption.geo.map;if(mapJson)i.registerMap(a,mapJson),system.mapJson=mapJson,n();else{var r="../localdb/"+a+".json";Info.get(r,function(e){mapJson=e,system.mapJson=mapJson,i.registerMap(a,mapJson),n()})}}else n()})})}),wrap}});
//# sourceMappingURL=../../map/toolkit/component/echart.js.map
