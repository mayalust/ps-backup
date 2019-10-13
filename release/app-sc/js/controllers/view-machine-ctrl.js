function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["controllers/controllers","bootstrap-dialog","Array"],function(controllers,BootstrapDialog){"use strict";var calculateRule=function(e){var i={};try{i=JSON.parse(e)}catch(e){}finally{return i}};controllers.initController("ViewMachineCtrl",["$scope","$rootScope","$routeParams","$timeout","kpiDataService","userLoginUIService","resourceUIService","alertService","SwSocket","Info","viewFlexService","unitService","growl","userDomainService","userEnterpriseService","$q","$window","$location","solutionUIService","serviceCenterService",function(scope,rootScope,routeParams,timeout,kpiDataService,userLoginUIService,resourceUIService,alertService,SwSocket,Info,viewFlexService,unitService,growl,userDomainService,userEnterpriseService,q,window,location,solutionUIService,serviceCenterService){var kpisArray=[],solutionId,modelIdabsolute;scope.$on("$locationChangeSuccess",function(e){"/servers"==location.path()&&userLoginUIService.changePos()}),rootScope.showBtn=!1,scope.alertsClass=function(e){switch(e){case 0:return"level0";case 1:return"level1";case 2:return"level2";case 3:return"level3";case 4:return"level4";default:return"level0"}},scope.editAbsoluteClick=function(){window.location.href="../app-sc/index_machine.html#/machine/absolute/"+modelIdabsolute},scope.alertButtonClick=function(e){0==e&&location.path("configAlert/"+routeParams.nodeId)},scope.renderAlertStatus=function(e){if(e<2)return""},scope.gotoNewResource=function(){window.location.href="../app-oc/index.html#/gateways2"},scope.closeBtn=function(){location.path("machine")};var defer=q.defer();function getKpiValueList(e,i,r){var t=["kpi",{category:"ci",isRealTimeData:!0,timePeriod:0,nodeIds:e,kpiCodes:i,startTime:null,endTime:null,timeRange:"",statisticType:"psiot",condList:[]}];kpiDataService.getValueList(t,function(e){r(e)})}function getServiceViewMap_callback(e){var o=scope.resources.map(function(e){return e.id}),s=[999999];for(var i in e.data)!function(e,i){if("string"==typeof i){var t=JSON.parse(i),r=getAllkpisFromView.call(t);for(var a in r)-1==s.indexOf(r[a])&&s.push(r[a]);getKpiValueList(o,s,function(e){for(var i in scope.resources)r=scope.resources[i],scope.backgroundImage=t.backgroundImage,r.leftBar=JSON.parse(JSON.stringify(t.leftBar)),r.rightBar=JSON.parse(JSON.stringify(t.rightBar)),r.midBar=JSON.parse(JSON.stringify(t.midBar)),r.preview=JSON.parse(JSON.stringify(t.preview)),r.kpitoUsername=t.kpitoUsername,initResource.call(r,e.data);var r})}else if(i instanceof Array)for(var a in i){var l=JSON.parse(i[a].content);r=getAllkpisFromView.call(l);for(var n in r)-1==s.indexOf(r[n])&&s.push(r[n]);!function(t){getKpiValueList(o,s,function(e){for(var i in scope.resources)(r=scope.resources[i]).modelId==t.modelId&&(scope.backgroundImage=t.backgroundImage,r.leftBar=JSON.parse(JSON.stringify(t.leftBar)),r.rightBar=JSON.parse(JSON.stringify(t.rightBar)),r.midBar=JSON.parse(JSON.stringify(t.midBar)),r.preview=JSON.parse(JSON.stringify(t.preview)),r.kpitoUsername=t.kpitoUsername,initResource.call(r,e.data));var r})}(l)}}(0,e.data[i])}function getAllkpisFromView(){var e=[],i=this;for(var r in i.rightBar=i.rightBar?i.rightBar:{},i.rightBar.list=i.rightBar.list?i.rightBar.list:[],i.rightBar.list)i.rightBar.list[r].kpi&&i.rightBar.list[r].kpi.id&&-1==e.indexOf(i.rightBar.list[r].kpi.id)&&e.push(i.rightBar.list[r].kpi.id);for(var r in i.midBar=i.midBar?i.midBar:{},i.midBar.list=i.midBar.list?i.midBar.list:[],i.midBar.list)i.midBar.list[r].kpi&&i.midBar.list[r].kpi.id&&-1==e.indexOf(i.midBar.list[r].kpi.id)&&e.push(i.midBar.list[r].kpi.id);for(var r in i.leftBar=i.leftBar?i.leftBar:{},i.leftBar.columnA=i.leftBar.columnA?i.leftBar.columnA:{},i.leftBar.columnA.list=i.leftBar.columnA.list?i.leftBar.columnA.list:[],i.leftBar.columnA.list)i.leftBar.columnA.list[r].kpi&&i.leftBar.columnA.list[r].kpi.id&&-1==e.indexOf(i.leftBar.columnA.list[r].kpi.id)&&e.push(i.leftBar.columnA.list[r].kpi.id);for(var r in i.leftBar.columnB=i.leftBar.columnB?i.leftBar.columnB:{},i.leftBar.columnB.list=i.leftBar.columnB.list?i.leftBar.columnB.list:[],i.leftBar.columnB.list)i.leftBar.columnB.list[r].kpi&&i.leftBar.columnB.list[r].kpi.id&&-1==e.indexOf(i.leftBar.columnB.list[r].kpi.id)&&e.push(i.leftBar.columnB.list[r].kpi.id);for(var r in i.leftBar.columnC=i.leftBar.columnC?i.leftBar.columnC:{},i.leftBar.columnC.list=i.leftBar.columnC.list?i.leftBar.columnC.list:[],i.leftBar.columnC.list)i.leftBar.columnC.list[r].kpi&&i.leftBar.columnC.list[r].kpi.id&&-1==e.indexOf(i.leftBar.columnC.list[r].kpi.id)&&e.push(i.leftBar.columnC.list[r].kpi.id);for(var r in i.preview=i.preview?i.preview:{},i.preview.list=i.preview.list?i.preview.list:[],i.preview.list)i.preview.list[r].kpi&&i.preview.list[r].kpi.id&&-1==e.indexOf(i.preview.list[r].kpi.id)&&e.push(i.preview.list[r].kpi.id);return e}function initResource(kpiValueLists){var cur=this,deferreds=[];function checkVisible(){cur.id;if(cur.kpitoUsername){cur.kpitoUsername;if(""==scope.key)cur.show=!0;else{var e=cur.kpisArray.find(function(e){return e.kpiCode==cur.kpitoUsername&&e.nodeId==cur.id});cur.show=!!e&&scope.key==e.value}}else cur.show=!0}function runFormula(e,t){var a=e,l=this,n=(q.defer(),[]),i=[l.id];if("string"==typeof e){var r=e.match(/\{kpi\:\d*\}/g);for(var o in r)n.push(parseInt(r[o].slice(5,-1)));getKpiValueList(i,n,function(e){for(var i in n){var r=e.data.find(function(e){return e.kpiCode==n[i]&&e.nodeId==l.id});a=r?a.replace("{kpi:"+r.kpiCode+"}",r.value):a.replace("{kpi:"+n[i]+"}",0),t(a)}})}else t("")}function getFormulas(){var content=arguments[1]?cur[arguments[0]][arguments[1]]:cur[arguments[0]];for(var i in content.list)!function(attr,val){"formula"==val.type&&runFormula.call(cur,val[val.type],function(data){val.value=eval(data)})}(i,content.list[i])}function getKpisValue(){var cur=this,defer=q.defer(),kpis=[],content=arguments[1]?cur[arguments[0]][arguments[1]]:cur[arguments[0]],_a;for(var i in content.$attr("list"))_a=content.list[i],"kpi"==_a.type&&-1==kpis.indexOf(_a.id)&&kpis.push(_a.kpi.id);var nodes=[cur.id];cur.alertStatus=parseInt(4*Math.random()),kpisArray=cur.kpisArray;var kpisArr=kpiValueLists,alert=kpisArr.filter(function(e){return 999999==e.kpiCode&&cur.id==e.nodeId}),cb;for(var i in 0<alert.length?cur.alertStatus=alert[0].value:cur.alertStatus=0,content.list)cb=content.list[i],"kpi"==cb.type&&setValue.call(cb,kpisArr,cb.valueType);function setValue(kpis,valueType){var _cur_=this,value=kpis.filter(function(e){return e.kpiCode==_cur_.kpi.id&&e.nodeId==cur.id});if(value[0]){var kpiDes=kpisArray.find(function(e){return e.id==_cur_.kpi.id});if(null!=kpiDes){var rangeObj=calculateRule(kpiDes.range);"object"==_typeof(rangeObj)&&!rangeObj instanceof Array?rangeObj[value[0].value]?_cur_.value=rangeObj[value[0].value]:_cur_.value="-":"int"==valueType?value[0].value?_cur_.value=parseInt(value[0].value):_cur_.value="-":value[0].value?_cur_.value=value[0].value:_cur_.value="-"}}else _cur_.value="";if(_cur_.link){var calculateLinkage=function calculateLinkage(link){var regExps=[{replace:/\{kpi\:.*}/g,value:/(?!\{kpi\:)\w+\b(?=\})/}];function getValue(e){var i=e.value.exec(link);if(null!=i)if("current"==i[0])link=link.replace(e.replace,"'"+_cur_.value+"'");else{var r=i[0],t=kpiValueLists.find(function(e){return e.kpiId==r});t&&link.replace(e.replace,t.value)}}for(var i in regExps)getValue(regExps[i]);location.path(eval(link))};_cur_.onClick=function(){""!=_cur_.value&&null!=_cur_.value&&null!=_cur_.value&&calculateLinkage(_cur_.linkage)}}}return defer.resolve("success!"),defer.promise}function getAttributes(){var r=this,a=q.defer(),l=arguments[1]?r[arguments[0]][arguments[1]]:r[arguments[0]];return serviceCenterService.attrs.getBymodelId(r.modelId).then(function(e){var t=e.map(function(e){return e.value=r.values[e.name],e});for(var i in l.list)!function(e,i){if("attr"==i.type){var r=t.filter(function(e){return e.id==i.attr.id});0<r.length?i.value=r[0].value:i.value=""}}(0,l.list[i]);a.resolve("success!")}),a.promise}function getCharts(){var a,e,i=this,r=[i.id],t=[],l=0,n=0;for(var o in i.leftBar.columnC.list)e=i.leftBar.columnC.list[o],-1==t.indexOf(e.kpi.id)&&t.push(e.kpi.id);var s=["kpi",{category:"time",isRealTimeData:!0,timePeriod:6912e5,nodeIds:r,kpiCodes:t,startTime:null,endTime:null,timeRange:"",statisticType:"psiot",condList:[]}],u=kpisArray.reduce(function(e,i){var r=i.id;return null==e[r]&&(e[r]=i),e},{});for(var o in Object.defineProperty(u,"minTimespan",{enumerable:!1}),u)u[o].valuelist=[];function p(e){return e.xAxis[0].data=this.valuelist.map(function(e){return $formatDate(new Date(e.timeStamp),"月日")}),e.legend.data=[],e.series[0].name=this.label,e.series[0].data=this.valuelist.map(function(e){return e.value}),e}function d(e,i){var r=e;if(l+=parseInt(i.value),n++,0<r.length){var t=r[r.length-1];i.timeStamp-t.timeStamp>a&&(i.value=parseInt(l/n),n=l=0,r.push(i))}else n=l=0,r.push(i);return r}function f(e,i){var r=i.kpiCode,t=e;return i.timeStamp||(i.timeStamp=newDateJson(i.arisingTime).getTime()),t[r].valuelist?t[r].valuelist.push(i):t[r].valuelist=[i],t}a=828e5,kpiDataService.getValueList(s,function(s){var c=[];for(var e in u)!function(a,e){for(var i=0;i<7;i++){var r=new Date((new Date).getTime()-24*(7-i)*3600*1e3),l=r.getYear(),n=r.getMonth(),o=r.getDate(),t=s.data.find(function(t){return function(e,i,r){return this.getYear()==e&&this.getMonth()==i&&this.getDate()==r&&a==t.kpiCode}.call(new Date(t.arisingTime.split("T")[0].replace(/-/g,"/")),l,n,o)});c.push({kpiCode:a,value:t?t.value:void 0,timeStamp:r.getTime()})}}(e,u[e]);var a=c.reduce(f,u),l=0;for(var e in i.leftBar.columnC.list)!function(e,i){var r=a[i.kpi.id];r.valuelist=r.valuelist.reduce(d,[]);var t={animation:!0,grid:{top:"10%",left:"5%",width:"90%",height:"80%",containLabel:!1},title:{show:!1,padding:30,text:"草莓大棚温度变化",textStyle:{fontWeight:"bold",fontSize:16}},tooltip:{trigger:"axis"},legend:{data:[]},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["","","","","","",""],axisLine:{lineStyle:{color:"#b0b0b0",width:1}},axisLabel:{show:!1,textStyle:{}},splitLine:{lineStyle:{color:"rgb(239, 239, 239)",width:1}},axisTick:{show:!1,lineStyle:{}}}],yAxis:[{show:!0,type:"value",splitNumber:4,boundaryGap:!0,min:0,axisLine:{lineStyle:{color:"#b0b0b0",width:1}},splitLine:{lineStyle:{color:"rgb(239, 239, 239)",width:1}},axisLabel:{show:!1,textStyle:{}},axisTick:{show:!1,lineStyle:{}}}],series:[{name:"数据",type:"line",data:[],itemStyle:{normal:{color:l%2==0?"#d99a37":"#c25262"}},lineStyle:{normal:{color:l%2==0?"#d99a37":"#c25262"}},areaStyle:{normal:{color:l%2==0?"#d99a37":"#c25262"}}}]};i.option=p.call(r,t),l++}(0,i.leftBar.columnC.list[e])})}routeParams.nodeId?(getKpisValue.call(cur,"leftBar","columnA"),getAttributes.call(cur,"leftBar","columnA"),getFormulas.call(cur,"leftBar","columnA"),getKpisValue.call(cur,"leftBar","columnB"),getAttributes.call(cur,"leftBar","columnB"),getFormulas.call(cur,"leftBar","columnB"),getKpisValue.call(cur,"rightBar"),getAttributes.call(cur,"rightBar"),getFormulas.call(cur,"rightBar"),getKpisValue.call(cur,"midBar"),getAttributes.call(cur,"midBar"),getFormulas.call(cur,"midBar"),getCharts.call(cur,"leftBar","columnC"),scope.currentRes=cur):(cur.show=!1,cur.onClick=function(){location.path("machine/detail/"+cur.id)},checkVisible.call(cur),deferreds.push(getKpisValue.call(cur,"preview")),deferreds.push(getAttributes.call(cur,"preview")),getFormulas.call(cur,"preview"),runFormula.call(cur,cur.preview.title,function(data){try{cur.preview.showTitle=eval(data)}catch(e){}}),q.all(deferreds).then(function(){cur.loaded=!0}))}userLoginUIService.user.userName&&userLoginUIService.user.appData?(scope.roleID=userLoginUIService.user.roleID?userLoginUIService.user.roleID:100,1e3==scope.roleID?scope.key=userLoginUIService.user.userName?userLoginUIService.user.userName:"":scope.key="",defer.resolve("success")):scope.$on("loginStatusChanged",function(){scope.roleID=userLoginUIService.user.roleID?userLoginUIService.user.roleID:100,1e3==scope.roleID?scope.key=userLoginUIService.user.userName?userLoginUIService.user.userName:"":scope.key="",defer.resolve("success")}),defer.promise.then(function(){routeParams.nodeId?resourceUIService.getResourceByIds([routeParams.nodeId],function(e){var a=e[routeParams.nodeId];scope.resources=[a];var r=a.modelId;serviceCenterService.kpis.getBymodelId(r).then(function(e){a.kpisArray=e,solutionId?solutionUIService.getServiceViewContent(solutionId,0,function(e){try{if(0!=e.code)throw e.msg;if(null==e.data)throw"缺少配置文件！";var i=JSON.parse(e.data),r=[a.id],t=[999999];Array.prototype.push.apply(t,getAllkpisFromView.call(i)),getKpiValueList(r,t,function(e){scope.backgroundImage=i.backgroundImage,a.leftBar=JSON.parse(JSON.stringify(i.leftBar)),a.rightBar=JSON.parse(JSON.stringify(i.rightBar)),a.midBar=JSON.parse(JSON.stringify(i.midBar)),a.preview=JSON.parse(JSON.stringify(i.preview)),a.kpitoUsername=i.kpitoUsername,initResource.call(a,e.data)})}catch(e){growl.error(e)}}):viewFlexService.getAllMyViews(function(e){var i=e.data.find(function(e){if("modelservice"!=e.viewType)return!1;var i=JSON.parse(e.content);return i.modelId==r});i?getServiceViewMap_callback({data:{modelId:i.content}}):viewFlexService.getServiceViewMap(getServiceViewMap_callback)})})}):resourceUIService.getResources(function(e){var i=[];scope.resources=e.data.filter(function(e){return"RootDomain"!=e.category});var r=function(i){var r=q.defer(),t=i.modelId;if(null==scope.allKpis&&(scope.allKpis={}),scope.allKpis[t])i.kpisArray=allKpis[t],r.resolve("success");else{serviceCenterService.kpis.getBymodelId(t).then(function(e){scope.allKpis[t]=e,i.kpisArray=scope.allKpis[t],r.resolve("success")})}return r.promise};for(var t in scope.resources)i.push(r(scope.resources[t]));q.all(i).then(function(e){solutionId?solutionUIService.getServiceViewContent(solutionId,0,function(e){try{if(0!=e.code)throw e.msg;if(null==e.data)throw"缺少配置文件！";var t=JSON.parse(e.data),i=scope.resources.map(function(e){return e.id}),r=[999999];Array.prototype.push.apply(r,getAllkpisFromView.call(t)),getKpiValueList(i,r,function(e){for(var i in scope.resources)r=scope.resources[i],scope.backgroundImage=t.backgroundImage,r.leftBar=JSON.parse(JSON.stringify(t.leftBar)),r.rightBar=JSON.parse(JSON.stringify(t.rightBar)),r.midBar=JSON.parse(JSON.stringify(t.midBar)),r.preview=JSON.parse(JSON.stringify(t.preview)),r.kpitoUsername=t.kpitoUsername,initResource.call(r,e.data);var r})}catch(e){growl.error(e)}}):viewFlexService.getAllMyViews(function(e){var i=e.data.filter(function(e){return"modelservice"==e.viewType});0<i.length?getServiceViewMap_callback({data:{modelIds:i}}):viewFlexService.getServiceViewMap(getServiceViewMap_callback)})})})})}]),controllers.initController("ViewMachineEdit",["$scope","$routeParams","$timeout","kpiDataService","userLoginUIService","resourceUIService","alertService","SwSocket","Info","viewFlexService","unitService","growl","userDomainService","userEnterpriseService","$q","solutionUIService","$rootScope","serviceCenterService",function(c,e,i,r,t,l,a,n,o,u,s,p,d,f,v,m,g,h){var B,k,w,y,S,b;function I(){var e={list:this.list.map(function(e){var i={};if(i.type=e.type,i.label=e.label,e.link&&(i.linkage=e.linkage),null!=e.showWhenCustomerA&&(i.showWhenCustomerA=e.showWhenCustomerA),null!=e.link&&(i.link=e.link),e.icon&&(i.icon=e.icon),"formula"!=i.type){if(null==e[i.type])throw"有未选项目存在，保存失败。";i[i.type]={id:e[i.type].id,label:e[i.type].label}}else i[i.type]=e[i.type];return i})};return this.title&&(e.title=this.title),e}function C(e){var r=this;e.remove=function(i){r.list=r.list.filter(function(e){return i!=e})},r.list.push(e)}function O(e){var r=this;e.link=!1,e.showWhenCustomerA=!0,e.remove=function(i){r.list=r.list.filter(function(e){return i!=e})},e.open=function(){this.show=!0},e.select=function(e){this.show=!1,this.icon=e},e.linkClick=function(){cur.link=!cur.link},r.list.push(e)}for(var _ in w="string"==typeof e.solutionId?parseInt(e.solutionId):void 0,y="string"==typeof e.modelId?parseInt(e.modelId):void 0,g.showBtn=!0,c.iconSelect=function(){c.fronticons=[{label:"提花机标签",value:"images/machine/iconfont.png"},{label:"压缩机标签",value:"images/machine/iconfront2.svg"}]},c.iconClose=function(){delete c.fronticons},c.prevPanel={visible:!1,show:function(){this.visible=!0},hide:function(){this.visible=!1}},c.leftPartA={visible:!1,show:function(){this.visible=!0},hide:function(){this.visible=!1}},c.leftPartB={visible:!1,show:function(){this.visible=!0},hide:function(){this.visible=!1}},c.leftPartC={visible:!1,show:function(){this.visible=!0},hide:function(){this.visible=!1}},c.midPart={visible:!1,show:function(){this.visible=!0},hide:function(){this.visible=!1}},c.rightPart={visible:!1,show:function(){this.visible=!0},hide:function(){this.visible=!1}},c.bgImages=[{value:"images/machine/machine.png",label:"提花机图片"},{value:"images/machine/aineng1.png",label:"艾能机械1"},{value:"images/machine/aineng.png",label:"艾能机械2"}],g.saveServiceView=function(){c.saveAndExit()},g.previewMode=!1,g.previewServiceView=function(){g.previewMode=!g.previewMode},c.saveAndExit=function(){try{var e={};for(var i in c.kpitoUsername&&(e.kpitoUsername=c.kpitoUsername.id),e.modelId=c.model.id,e.backgroundImage=c.backgroundImage,e.preview=I.call(c.preview),e.preview.icon=c.preview.icon,e.leftBar={},Object.defineProperty(c.leftBar,"title",{enumerable:!1}),e.leftBar.title=c.leftBar.title,c.leftBar)r=i,"function"!=typeof(t=c.leftBar[i])&&(e.leftBar[r]=I.call(t));e.rightBar=I.call(c.rightBar),e.midBar=I.call(c.midBar),B(e)}catch(e){alert(e)}var r,t},c.leftBar={columnA:{list:[]},columnB:{list:[]},columnC:{list:[]}},c.leftBar)b=c.leftBar[_],Object.defineProperty(b,"pushData",{writable:!0,enumerable:!1,value:C});c.icons=["ps-edit"," ps-back","ps-mushroom","ps-planting","ps-current_production","ps-estimated_output","ps-daily_output","ps-duration","ps-sandglass","ps-task","ps-current_production_p","ps-pattern","ps-number","ps-air-humidity","ps-air-temperature","ps-camera","ps-sunshine","ps-video-camera","ps-water","ps-fan","ps-electric_motor02","ps-electric_motor","ps-Co2","ps-soil_temperature","ps-soil_humidity","ps-irrigation","ps-spraying","ps-chart_brokenline","ps-userinfo","ps-user","ps-group","ps-center","ps-server","ps-app"],c.midBar={title:"提花机生产信息",list:[],pushData:C},c.rightBar={title:"提花机生产信息",list:[],pushData:O},Object.defineProperty(c.rightBar,"pushData",{writable:!0,enumerable:!1}),Object.defineProperty(c.midBar,"pushData",{writable:!0,enumerable:!1}),c.wholeClick=function(){for(var e in c.rightBar.list)c.rightBar.list[e].show=!1},c.preview={title:"",list:[]},Object.defineProperty(c.preview,"pushData",{writable:!0,enumerable:!1,value:C});var A=Object.create({models:[],valueCached:[],getBymodelId:function(r){var t=this,a=v.defer();if(-1!=t.models.indexOf(r)){var e=t.valueCached.filter(function(e){return e.modelId==r});a.resolve(e)}else l.getKpisByModelId([r],function(e){try{if(!e.data)throw"data is undefined !!";for(var i in e.data)e.data[i].modelId=r;t.models.push(r),t.valueCached=t.valueCached.filter(function(e){return e.modeId!=r}),t.valueCached=t.valueCached.concat(e.data),a.resolve(e.data)}catch(e){a.reject(e)}},function(e){});return a.promise}}),N=Object.create({models:[],valueCached:[],getBymodelId:function(r){var t=this,a=v.defer();if(-1!=t.models.indexOf(r)){var e=t.valueCached.filter(function(e){return e.modelId==r});a.resolve(e)}else h.attrs.getBymodelId(r).then(function(e){for(var i in e)e[i].modelId=r;t.models.push(r),t.valueCached=t.valueCached.filter(function(e){return e.modeId!=r}),t.valueCached=t.valueCached.concat(e),a.resolve(e)});return a.promise}});function V(){c.model={id:y};var s,e=[];s="string"==typeof k?JSON.parse(k):{},e.push(x.call(c.model)),e.push(J.call(c.model)),v.all(e).then(function(e){for(var i in"object"==_typeof(c.model)&&null!=c.model&&(c.kpitoUsername=c.model.kpi.find(function(e){return e.id==s.kpitoUsername})),c.preview=s.preview?s.preview:{title:"",list:[]},c.leftBar=s.leftBar?s.leftBar:{columnA:{title:"机台配置信息",list:[]},columnB:{title:"机台配置信息",list:[]},columnC:{list:[]}},c.rightBar=s.rightBar?s.rightBar:{title:"",list:[]},c.midBar=s.midBar?s.midBar:{title:"",list:[]},c.backgroundImage=s.backgroundImage?s.backgroundImage:"images/machine/machine.png",c.preview.list)r=c.preview.list[i],o.call(r,c.preview);var r,t,a;for(var l in c.leftBar)!function(e,i){for(var r in i.list)t=i.list[r],o.call(t,i);var t;"object"==_typeof(i)&&Object.defineProperty(i,"pushData",{writable:!0,enumerable:!1,value:C})}(0,c.leftBar[l]);for(var n in c.rightBar.list)t=c.rightBar.list[n],o.call(t,c.rightBar),t.remove=function(i){c.rightBar.list=c.rightBar.list.filter(function(e){return i!=e})},t.open=function(){this.show=!0},t.select=function(e){this.show=!1,this.icon=e},t.linkClick=function(){cur.link=!cur.link};for(var n in c.midBar.list)a=c.midBar.list[n],o.call(a,c.midBar),a.remove=function(i){c.midBar.list=c.midBar.list.filter(function(e){return i!=e})};function o(e){var i=this,r=i.type;"formula"!=r&&(i[r]=c.model[r].find(function(e){return!!i[r]&&e.id==i[r].id})),i.remove=function(i){e.list=e.list.filter(function(e){return i!=e})}}Object.defineProperty(c.preview,"pushData",{writable:!0,enumerable:!1,value:C}),Object.defineProperty(c.rightBar,"pushData",{writable:!0,enumerable:!1,value:O}),Object.defineProperty(c.midBar,"pushData",{writable:!0,enumerable:!1,value:O}),B=w?function(e){var i=JSON.stringify(e);m.saveServiceViewContent(w,0,y,i,function(e){try{if("0"!=e.code)throw new Error(e.message);window.open("../app-ac/index.html#/myView","_self")}catch(e){}})}:function(e){e.modelId=y;var i={originalViewId:0,viewTitle:"modelservice",viewName:"modelservice",viewType:"modelservice",content:JSON.stringify(e)};S?(i.viewId=S,u.updateView(i,function(e){window.open("../app-oc/index.html#/resource_type","_self")})):u.addView(i,function(e){window.open("../app-oc/index.html#/resource_type","_self")})}})}function x(){var i=v.defer(),r=this;return"object"==_typeof(r)&&null!=r?A.getBymodelId(r.id).then(function(e){r.kpi=e.map(function(e){return{id:e.id,label:e.label}}),i.resolve("success")}):i.resolve("empty"),i.promise}function J(){var i=v.defer(),r=this;return"object"==_typeof(r)&&null!=r?N.getBymodelId(r.id).then(function(e){r.attr=e.map(function(e){return{id:e.id,label:e.label}}),i.resolve("success")}):i.resolve("empty"),i.promise}w?m.getServiceViewContent(w,0,y,function(e){try{if("0"!=e.code)throw new Error(e.message);k=e.data,V()}catch(e){}}):u.getAllMyViews(function(e){var i=e.data.find(function(e){return"modelservice"==e.viewType&&JSON.parse(e.content).modelId==y});S=i?i.viewId:void 0,k=i?i.content:void 0,V()})}])});
//# sourceMappingURL=../../../map/app-sc/js/controllers/view-machine-ctrl.js.map