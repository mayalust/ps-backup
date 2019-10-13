define(["../services/services.js"],function(e){"use strict";function t(k,e,n,I,r,t,T,i,V){var L,O={},a=!1,o=!1,l={},s={},c={};for(var u in O.ifSimulateAlert=function(){return o},O.ipcam={},O.health={},O.camClick=function(){O.ipcam.openCam&&O.ipcam.openCam(),a=!0},O.closeCam=function(){O.ipcam.closeCam&&O.ipcam.closeCam(),a=!1},O.showCam=function(){return a},O.blinks=[{id:$randomString(32),width:13,height:20,left:44.7,top:7.8,background:"url(../img/tongji/tank1_red.png)"},{id:$randomString(32),width:9,height:20,left:66.9,top:19.5,background:"url(../img/tongji/tank2_red.png)"}],O.marks=[{id:$randomString(32),width:1.3,left:50.7,top:25.6,value:100},{id:$randomString(32),width:1.3,left:70.2,top:34.4,value:100}],O.rotates=[{id:$randomString(32),top:52,left:43,value:10,getValue:p},{id:$randomString(32),top:50,left:46,value:20,getValue:p}],O.bars=[{id:$randomString(32),width:1.3,height:7.2,left:50.7,top:26,value:40,getValue:p,webSocketBack:v},{id:$randomString(32),width:1.3,height:7.2,left:70.2,top:34.7,value:50,getValue:p,webSocketBack:v}],O.fullbars=[{id:$randomString(32),width:1.3,height:7.2,left:50.7,top:26,value:100},{id:$randomString(32),width:1.3,height:7.2,left:70.2,top:34.7,value:100}],O.barsOuters=[{id:$randomString(32),width:3,height:7.7,left:49.9,top:26.3,value:100},{id:$randomString(32),width:3,height:8,left:69.4,top:35.1,value:100}],O.charts=[{min:0,max:100,tg_labal:"混合罐子V102液位曲线",color:"#d99a37"},{min:0,max:120,tg_labal:"混合罐子V103液位曲线",color:"#c25262"},{min:0,max:20,tg_labal:"压力变送器PT101变化曲线",color:"#39a4d9"},{min:0,max:100,tg_labal:"压力变送器PT201变化曲线",color:"#d97c39"},{min:0,max:100,tg_labal:"孔板流量计FT101变化曲线",color:"#4ccbb4"}],n.$on("$destroy",function(){V.unregister(L)}),O.charts)(function(){this.id=$randomString(32),this.getOption=w,this.webSocketBack=g}).call(O.charts[u]);for(var u in O.controllPanel=[{tg_labal:"调节阀门FV101",onSlide:function(e){O.rotates[0].value=parseInt(e),O.rotates[0].highLight&&O.rotates[0].highLight(),this.value=e},onChange:function(e){O.rotates[0].value=parseInt(e),O.rotates[0].highLight&&O.rotates[0].highLight(),this.value=e,this.sendDeviceDirective&&this.sendDeviceDirective(e)}},{tg_labal:"调节阀门FV201",onSlide:function(e){O.rotates[1].value=parseInt(e),O.rotates[1].highLight&&O.rotates[1].highLight(),this.value=e},onChange:function(e){O.rotates[1].value=parseInt(e),O.rotates[1].highLight&&O.rotates[1].highLight(),this.value=e,this.sendDeviceDirective&&this.sendDeviceDirective(e)}},{tg_labal:"变频器U201",onSlide:function(e){this.value=e},onChange:function(e){this.value=e,this.sendDeviceDirective&&this.sendDeviceDirective(e)}},{tg_labal:"调压模块GZ201",onSlide:function(e){this.value=e},onChange:function(e){this.value=e,this.sendDeviceDirective&&this.sendDeviceDirective(e)}}],O.controllPanel)(function(){this.value=50,this.getTitle=h,this.getValue=p,this.webSocketBack=function(e){n.$apply(function(){})}}).call(O.controllPanel[u]);for(var u in O.marks[0].value=50,O.marks[1].value=50,O.toggles=[{tg_labal:"原料泵P101"},{tg_labal:"原料泵P201"},{tg_labal:"变频泵P301"}],O.toggles)(function(){this.getBoolean=m,this.onChange=d,this.webSocketBack=f}).call(O.toggles[u]);function d(e){this.value=e,this.sendDeviceDirectiveBoolean&&this.sendDeviceDirectiveBoolean(e)}function h(e){_(e).then(function(e){e.label})}function f(e){var t=this;n.$apply(function(){t.value=1==parseInt(e)})}function v(e){var t=this;n.$apply(function(){t.value=e})}function g(e,t){var i=this;n.$apply(function(){i.pushData&&i.pushData(e,t)})}function p(t,i){var n=this;b([t],[i],"ci",0).then(function(e){e.length?(n.dataType="real",n.setValue?n.setValue(e[0].value):n.value=e[0].value,_(t).then(function(e){e.label,y(i).then(function(e){e.label})})):(n.dataType="virtual",n.setValue?n.setValue(parseInt(100*Math.random())):n.value=parseInt(100*Math.random()),_(t).then(function(e){e.label,y(i).then(function(e){e.label})}))})}function m(t,i){var n,a=this;b([t],[i],"ci",0).then(function(e){e.length?(a.dataType="real",a.setValue?a.setValue(e[0].value):a.value=e[0].value,_(t).then(function(e){n=e.label,y(i).then(function(e){e.label,a.title=n})})):(a.dataType="virtual",a.setValue?a.setValue(1==Math.round(Math.random())):a.value=1==Math.round(Math.random()),_(t).then(function(e){n=e.label,y(i).then(function(e){e.label,a.title=n+"(模拟数据)"})}))})}function w(e,t,i,n,l,a,o,r){for(var s,c,u,d,h,f,v,g=this,p=[],m=0;m<7;m++)p.push(parseInt(30*Math.random()));var w={animation:!0,grid:{left:"8%",top:"10%",width:"80%",height:"80%",containLabel:!0},title:{show:!1,padding:30,text:"草莓大棚温度变化",textStyle:{fontWeight:"bold",fontSize:16}},tooltip:{trigger:"axis"},legend:{data:[]},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["","","","","","",""],axisLine:{lineStyle:{color:"#b0b0b0",width:1}},axisLabel:{show:!1,textStyle:{}},splitLine:{lineStyle:{color:"rgb(239, 239, 239)",width:1}},axisTick:{show:!1,lineStyle:{}}}],yAxis:[{show:!0,max:o,min:r,type:"value",splitNumber:4,boundaryGap:!0,axisLine:{lineStyle:{color:"#b0b0b0",width:1}},splitLine:{lineStyle:{color:"rgb(239, 239, 239)",width:1}},axisLabel:{show:!1,textStyle:{}},axisTick:{show:!1,lineStyle:{}}}],series:[{name:"数据",type:"line",data:p,itemStyle:{normal:{color:a}},lineStyle:{normal:{color:a}},areaStyle:{normal:{color:a}}}]};return s=k.defer(),c=k.defer(),u=k.defer(),v=[c.promise,u.promise],I.getKpisByKpiIds([t],function(e){h=JSON.parse(JSON.stringify(e)),f=h.minTimespan,delete h.minTimespan,c.resolve("success")}),I.getResourceByIds([e],function(e){d=e,u.resolve("success")}),k.all(v).then(function(){b([e],[t],i,n).then(function(e){var t=new $Array(e),o=function(){var e=new $Array([]);for(var t in h)for(var i in d)e.push({nodeId:parseInt(i),nodeDes:d[i],kpiId:parseInt(t),kpiDes:h[t],valueList:[]});return e}();if(t.each(function(i){var n=i.kpiCode,a=i.nodeId;o.each(function(e){if(e.kpiId==n&&e.nodeId==a){var t=newDateJson(i.arisingTime);i.timeStamp=t.getTime(),e.valueList.push(i)}})}),0<o.first().valueList.length){var i,n,a=new $valueListGroup(o,f,"时分"),r=new $option(JSON.parse(JSON.stringify(w)));r.clearSeries(),n=[],i=a.getxAxisByTime(),a.eachValueListMerged(function(e){var t=e.nodeDes.label+"-"+e.kpiDes.label,i=e.$valueList;r.pushSeries(t,i)}),r.setFirstxAxis(i),r.setLegend(n),r.setTitle(l),0<r.getOption().series.length?(g.dataType="real",g.setOption?g.setOption(r.getOption()):g.option=r.getOption()):(g.dataType="virtual",w.title.text=l+"(模拟数据)",g.setOption?g.setOption(w):g.option=w),g.title=l}else g.dataType="virtual",w.title.text=l+"(模拟数据)",g.setOption?g.setOption(w):g.option=w})}),s.promise}function B(t){var i=k.defer();return c[t]?i.resolve(c[t]):I.getDirectivesByModelId([t],function(e){try{if(0!=e.code)throw e;if(!e.data)throw"data is empty";c[t]=e.data,i.resolve(c[t])}catch(e){i.reject(e)}}),i.promise}function _(t){var i=k.defer();return s[t]?i.resolve(s[t]):I.getResourceById([t],function(e){try{if(0!=e.code)throw e;if(!e.data)throw"data is empty";s[t]=e.data,i.resolve(s[t])}catch(e){i.reject(e)}}),i.promise}function y(t){var i=k.defer();return l[t]?i.resolve(l[t]):I.getKpisByKpiIds([t],function(e){try{if(!e)throw"data is empty";l[t]=e[t],i.resolve(l[t])}catch(e){i.reject(e)}}),i.promise}function b(e,t,i,n){var a=k.defer(),o=["kpi",{category:i,isRealTimeData:!0,timePeriod:n,nodeIds:e,kpiCodes:t,startTime:null,endTime:null,timeRange:"",statisticType:"psiot",condList:[]}];return r.getValueList(o,function(e){try{if(0!=e.code)throw"cannot get value list!";if(!e.data)throw"event.data is undefined!";a.resolve(e.data)}catch(e){alert(e)}}),a.promise}return O.blinkClick=function(){if(o=!o){for(var e in O.blinks)O.blinks[e].startBlink();O.health.startBlink()}else{for(var e in O.blinks)O.blinks[e].stopBlink();O.health.stopBlink()}},O.orderHandlerClick=function(){T.open("index.html#/workorder","_self")},O.overviewClick=function(){T.open("index.html","_self")},O.equipmentClick=function(){T.open("index.html#/emcsView","_self")},O.malfunctionClick=function(){T.open("index.html#/configAlert","_self")},O.chartClick=function(){T.open("index.html#/designView","_self")},t.getAllMyViews(function(e){var t,i,n,a,o,r,l,s,c,u,d,h,f,v,g,p,m,w=new $Array(e.data).find("viewType","tongji");if(w)try{if(!w.content)throw"content id undefined!!";for(var k=(t=JSON.parse(w.content)).controllPanel,y=t.toggles,b=t.charts,S=[],x=[],D=0;D<2;D++)g=k[v=D],void 0,p=g.node,m=g.kpi,O.rotates[v].title=g.title,O.rotates[v].getValue(p,m);for(D=0;D<2;D++)d=b[u=D],void 0,h=d.node,f=d.kpi,O.bars[u].title=d.title,O.bars[u].getValue(h,f);for(var D in k)!function(n,e){var t=e.kpi,a=e.node;-1==S.indexOf(a)&&S.push(a),-1==x.indexOf(t)&&x.push(t),O.controllPanel[n].title=e.title,O.controllPanel[n].getValue(a,t),_(a).then(function(e){try{if(!e)throw"event.data is undefined!!";B(e.modelId).then(function(e){try{if(!e)throw"event.data is undefined!!";var t=e[0].id,i=a;O.controllPanel[n].sendDeviceDirective=function(e){I.sendDeviceDirective(i,t,{value:e},function(e){})}}catch(e){}},function(e){})}catch(e){}},function(e){}),O.controllPanel[n].getTitle(a)}(D,k[D]);for(var D in y)!function(t,e){var a=e.node,i=e.kpi;-1==S.indexOf(a)&&S.push(a),-1==x.indexOf(i)&&x.push(i),O.toggles[t].title=e.title,O.toggles[t].getBoolean(a,i),_(a).then(function(e){try{if(!e)throw"event.data is undefined!!";B(e.modelId).then(function(e){try{if(!e)throw"event.data is undefined!!";var i=e[0].id,n=a;O.toggles[t].sendDeviceDirectiveBoolean=function(e){var t=1==e?1:0;I.sendDeviceDirective(n,i,{value:t},function(e){})}}catch(e){}},function(e){})}catch(e){}},function(e){})}(D,y[D]);for(var D in b)n=b[i=D],void 0,a=n.node,o=n.kpi,r=n.title,l=O.charts[i].color,s=O.charts[i].max,c=O.charts[i].min,O.charts[i].title=n.title,O.charts[i].getOption(a,o,"time",864e4,r,l,s,c),-1==S.indexOf(a)&&S.push(a),-1==x.indexOf(o)&&x.push(o);L=Math.uuid();var $={ciid:S.toString(),kpi:x.toString()};V.register(L,"register",function(r){try{if(!r)throw"event is undefined!!";var l=r.data.kpiCode,s=r.data.nodeId;for(var e in k)c=k[o=e],void 0,u=c.node,d=c.kpi,u==s&&d==l&&O.toggles[o]&&O.controllPanel[o].webSocketBack(r.data.value);for(var e in b)!function(e,t){var i=t.node,n=t.kpi;if(i==s&&n==l){var a=r.data.arisingTime,o=newDateJson(a);O.bars[e]&&O.bars[e].webSocketBack(r.data.value,$formatDate(o,"时分"))}}(e,b[e]);for(var e in y)i=y[t=e],void 0,n=i.node,a=i.kpi,n==s&&a==l&&O.toggles[t]&&O.toggles[t].webSocketBack(r.data.value);for(var e in b)!function(e,t){var i=t.node,n=t.kpi;if(i==s&&n==l){var a=r.data.arisingTime,o=newDateJson(a);O.charts[e]&&O.charts[e].webSocketBack(r.data.value,$formatDate(o,"时分"))}}(e,b[e])}catch(e){}var t,i,n,a,o,c,u,d}),V.send(L,"register","kpi",$)}catch(e){}else T.open("index_tongji.html#/tongji/edit","_self")}),O}function i(n,e,t,a,i,b,S,o){var x,D,r,$={};function I(e,t,i){this.onChange=c,this.getAttrs=s,this.setAttrs=l,this.setAttrs(e,t,i)}function l(t,i,n){var a=this;u().then(function(e){a.resource=$.resources.find("id",t),a.title=n,d(a.resource).then(function(e){a.kpis=e,a.kpi=e.find("id",i)},function(e){})},function(e){})}function s(){return{title:this.title,kpi:this.kpi.id,node:this.resource.id}}function c(){var t=this;t.title=t.resource.label,d(t.resource).then(function(e){t.kpis=e},function(e){})}function u(){var t=n.defer();return r?t.resolve(r):a.getResources(function(e){try{if(0!=e.code)throw e;if(!e.data)throw"data is empty";r=new $Array(e.data),t.resolve(r)}catch(e){t.reject(e)}}),t.promise}function d(t){var i=n.defer();if(t.kpis)i.resolve(t.kpis);else{var e=t.modelId;a.getKpisByModelId([e],function(e){try{if(0!=e.code)throw e;if(!e.data)throw"data is empty";t.kpis=new $Array(e.data),i.resolve(t.kpis)}catch(e){i.reject(e)}})}return i.promise}return $.step=0,o.current&&o.current.params.deviceGroupId,u().then(function(e){$.resources=e},function(e){}),b.getAllMyViews(function(e){var t,i,n,a,o,r,l,s,c,u,d,h,f,v,g,p=new $Array(e.data).find("viewType","tongji");if(p){try{if(!p.content)throw"content id undefined!!";var m=(D=JSON.parse(p.content)).controllPanel,w=D.toggles,k=D.charts;for(var y in m)h=m[d=y],void 0,f=h.node,v=h.kpi,g=h.title,I.apply($.controllPanel[d],[f,v,g]);for(var y in w)l=w[r=y],void 0,s=l.node,c=l.kpi,u=l.title,I.apply($.toggles[r],[s,c,u]);for(var y in k)i=k[t=y],void 0,n=i.node,a=i.kpi,o=i.title,I.apply($.charts[t],[n,a,o])}catch(e){}x=function(e){var t=[{viewId:p.viewId,originalViewId:0,viewTitle:"tongji",viewName:"tongji",viewType:"tongji",content:JSON.stringify(e)}];b.updateView(t,function(e){S.open("index_tongji.html#/tongji","_self")})}}else x=function(e){var t=[{viewTitle:"tongji",viewName:"tongji",viewType:"tongji",content:JSON.stringify(e)}];b.addView(t,function(e){S.open("index_tongji.html#/tongji","_self")})}}),$.save=function(){var e,t,i,n=[],a=[],o=[];for(var r in $.controllPanel)null!=(e=$.controllPanel[r]).getAttrs&&n.push(e.getAttrs());for(var r in $.toggles)null!=(t=$.toggles[r]).getAttrs&&a.push(t.getAttrs());for(var r in $.charts)null!=(i=$.charts[r]).getAttrs&&o.push(i.getAttrs());x({controllPanel:n,toggles:a,charts:o})},$.controllPanel=[{label:"第一个滑动条"},{label:"第二个滑动条"},{label:"第三个滑动条"},{label:"第四个滑动条"}],$.toggles=[{label:"第一个开关"},{label:"第二个开关"},{label:"第三个开关"}],$.charts=[{label:"第一个视图"},{label:"第二个视图"},{label:"第三个视图"},{label:"第四个视图"},{label:"第五个视图"}],$}e.factory("tgmain",t),t.$inject=["$q","userLoginUIService","$rootScope","resourceUIService","kpiDataService","viewFlexService","$window","$location","SwSocket"],e.factory("edit",i),i.$inject=["$q","userLoginUIService","$rootScope","resourceUIService","kpiDataService","viewFlexService","$window","$route"]});
//# sourceMappingURL=../../map/js/services/tglibrary-service.js.map
