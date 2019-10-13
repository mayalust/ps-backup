define(["controllers/controllers"],function(e){"use strict";e.controller("Dashboard2Ctrl",["$scope","Info","$timeout","viewFlexService","kpiDataService","alertService","resourceUIService","userLoginUIService","growl","SwSocket","ticketService","$location","$q",function(u,e,t,a,v,r,d,i,o,f,s,n,c){console.info("切换到设备概览"),u.deviceitems=[],u.totalItems2=[],u.orderList=[];var l=e.get("localdb/dashboard2.json",function(e){u.totalItems=e.totalItems,u.leftTitle=e.week.title});for(var p in u.gotoShow=function(e){location.href=e.url,window.sessionStorage&&("待处理紧急工单数"==e.title?sessionStorage.setItem("indexTabOrder","0"):"待处理工单数"==e.title?sessionStorage.setItem("indexTabOrder","1"):"由我发起工单"==e.title?sessionStorage.setItem("indexTabOrder","2"):"所有工单"==e.title&&sessionStorage.setItem("indexTabOrder","3"))},i.user.functionCodeSet);u.changeKpiDisPlay=function(e,t){e.visible=!1,t.visible=!0},u.gotoDeviceShow=function(e){location.href="#/resource/"+e.modelId+"/"+e.id},u.changeBindData=function(e){if(l[e])for(var t in u.leftTitle=l[e].title,u.dashboardItems){var a=u.dashboardItems[t];a.timespan=l[e].timespan,u.$broadcast("itemChanger",a)}};var m=function e(){u.rootCi||t(function(){e()}),[],u.dashboardItems=[],a.getManageDashboard(function(e){try{if(0!=e.code)throw e.msg;var t=e.data;u.userInfo.userID;if("designView"==t.viewType)if("<"==t.content.charAt(0)){var a=jQuery.xml2json(t.content);if(a.SubViews){var r=a.SubViews.chart;if(r.hasOwnProperty("length"))for(var i in r){var o;"TOP"==(o=v.getChartProperty(r[i],"title")).value&&y(r[i],g),"LEFT"==o.value&&(o.value="",u.dashboardItems=[r[i]]),"LEFT2"==o.value&&y(r[i],h),"LEFT3"==o.value&&y(r[i],b),"RIGHT"==o.value&&y(r[i],I)}else"TOP"==(o=v.getChartProperty(r,"title")).value&&y(r,g)}}else{var s=t.content;for(var n in(a=JSON.parse(s)).elements){var l=a.elements[n];"企业概览"==l.option.title.text?y(l,g):"告警趋势"==l.option.title.text?(l.option.title.text="",l.nodes=[u.rootCi],u.dashboardItems=[l]):"环比情况"==l.option.title.text?y(l,h):"处理情况"==l.option.title.text?y(l,b):"运行情况"==l.option.title.text&&y(l,I)}}}catch(e){}})},g=function(l){var e;e={states:"0"},r.countFromCache(e,function(e){if(0==e.code)for(var t in u.totalItems){var a=u.totalItems[t];if("toHandleAlertNum"==a.kpiName){a.value=e.data.total;break}}});var d=Math.uuid(),c=function(e){console.info("监听到事件")};v.getKpiValueList(l,function(e){if(0==e.code){for(var t in e.kpisDic){for(var a in u.totalItems){if(t==(o=u.totalItems[a]).kpi){o.name=l[1].nodeIds[0]+"?"+t,!0;break}}}for(var r in e.data.recordList){var i=e.data.recordList[r];for(var a in u.totalItems){var o;i[(o=u.totalItems[a]).name]&&(o.value=i[o.name])}}var s={ciid:l[1].nodeIds.toString(),kpi:l[1].kpiCodes.toString()},n="register";f.register(d,n,c),f.send(d,n,"kpi",s)}}),u.$on("$destroy",function(){f.unregister(d)})},h=function(d){Math.uuid();v.getKpiValueList(d,function(e){if(0!=e.code);else{var t=[];for(var a in e.kpisDic){var r={title:e.kpisDic[a],lv:"text-green",value:null,state:"fa-caret-up",rate:0,name:d[1].nodeIds[0]+"?"+a};t.push(r)}for(var i in e.data.recordList){var o=e.data.recordList[i];for(var s in t){var n=t[s];if(n.value){var l=0;(l=o[n.name]&&0!=o[n.name]?(o[n.name]-n.value)/o[n.name]:-1)<0?(n.rate=Math.round(100*Math.abs(l)),n.value=o[n.name],n.state="fa-caret-down"):n.lv=0<l?(n.rate=Math.round(100*l),n.value=o[n.name],n.state="fa-caret-up","text-red"):(n.rate=Math.round(100*l),n.value=o[n.name],n.state="fa-caret-left","text-black")}else o[n.name]&&(n.value=o[n.name])}}u.totalItems2=t}})},b=function(l){Math.uuid();v.getKpiValueList(l,function(e){if(0!=e.code);else{var t=[];for(var a in e.kpisDic){var r={title:e.kpisDic[a],lv:"progress-bar-aqua",value:null,state:"",rate:0,name:l[1].nodeIds[0]+"?"+a};t.push(r)}for(var i in e.data.recordList){var o=e.data.recordList[i];for(var s in t){var n=t[s];if(o[n.name])switch(n.value=o[n.name],n.rate=o[n.name],!0){case 100==n.rate:n.lv="progress-bar-aqua";break;case 90<n.rate:n.lv="progress-bar-green";break;case 80<n.rate:case 70<n.rate:n.lv="progress-bar-yellow";break;case 60<n.rate:n.lv="progress-bar-red";break;default:n.lv="progress-bar-danger"}}}u.totalItems3=t}})},I=function(l){Math.uuid();v.getKpiValueList(l,function(e){if(0!=e.code);else{var t=[];for(var a in e.kpisDic){var r={title:e.kpisDic[a],value:0,valuelist:"",name:l[1].nodeIds[0]+"?"+a};t.push(r)}for(var i in e.data.recordList){var o=e.data.recordList[i];for(var s in t){var n=t[s];o[n.name]&&(n.valuelist?n.valuelist=n.valuelist+","+o[n.name]:n.valuelist=o[n.name],n.value=o[n.name])}if(6<i)break}u.totalItems4=t}})},y=function(e,r){var t,a,i,o=[],s=(new Object,[u.rootCi]);if(e.hasOwnProperty("option"))e.hasOwnProperty("timespan")?(o=e.kpis,t=e.timespan,a=e.category,"line"==e.type||"bar"==e.type||"pie"!=e.type&&"gauge"!=e.type||(t=0),i={value:""},e.formatStr&&(i.value=e.formatStr)):defaultChart=!0;else{i=v.getChartProperty(e,"categoryAxisFormatStr");var n=v.getKpisInfo(e);o=n[0],n[1],a=e.dataSource.filters.category,t=(n=v.getNodesInfo(e))[1]}var l={category:a,isRealTimeData:!0,timePeriod:t,nodeIds:s,kpiCodes:o};d.getResourceByIds(s,function(e){l.nodesDic=e;var t=[];for(var a in e)t.push(e[a].modelId);d.getModelByIds(t,function(t){t.data;var a=[];for(var i in t.data){!function(r){var e=t.data[i].id;d.getKpisByModelId(e,function(e){for(var t in o){var a=e.data.find(function(e){return e.id==o[t]});a&&(l.kpisDic||(l.kpisDic={}),l.kpisDic[o[t]]=a)}r.resolve("success")}),a.push(r.promise)}(c.defer())}c.all(a).then(function(e){r(["kpi",l])})})})},k=function(){s.getTicketsByStatus(100,function(e){if(0==e.code)for(var t in e.data)if(t<10){var a=e.data[t];0==a.status?a.statuslab="待处理":100==a.status?a.statuslab="处理中":a.statuslab="已完成",200==a.priorityCode?(a.severitylab="高",a.severitybg="alerts-critical"):100==a.priorityCode?(a.severitylab="中",a.severitybg="alerts-major"):(a.severitylab="低",a.severitybg="alerts-minor"),u.orderList.push(a)}})},w=function(){d.getLatestDevices(function(e){if(0==e.code)for(var t in e.data){var a=e.data[t];u.deviceitems.push(a)}})},S=function(){var r={title:{text:"",subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},toolbox:{show:!0,feature:{mark:{show:!1},dataView:{show:!1,readOnly:!1},magicType:{show:!1,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"left",max:1548}}},restore:{show:!0},saveAsImage:{show:!1}}},calculable:!0,series:[{name:"常见告警",type:"pie",radius:"55%",center:["50%","40%"],data:[{value:0,name:"暂无告警可供分析"}]}]},e=["alert",{category:"ci",isRealTimeData:!0,timePeriod:0,kpiCodes:["alert_code_count"]}];v.getKpiHierarchyValueList(e,function(e){0==e.code&&(!function(e){for(var t in r.series[0].data=[],e){var a={};if(a.value=e[t].alert_code_count,a.name=e[t].category,r.series[0].data.push(a),5<r.series[0].data.length)break}u.$broadcast(Event.ECHARTINFOSINIT,{option:r,name:"dashboard"})}(e.data.recordList),u.alertTypeInfos=e.data.recordList)})};i.user.isAuthenticated&&a.viewLoadFinished?(m(),k(),w(),S()):u.$on("viewLoadFinished",function(e,t){m(),k(),w(),S()})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/dashboard-ctrl.js.map
