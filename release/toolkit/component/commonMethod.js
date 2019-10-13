function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var WIN=window;define([],function(){var n,o,r,d,a,i,f,c,s,p,l,y,u,g,v,m,t,h,I=function(e){e&&(this.$clone(e.element),l=(p=e).route,y=e.window,q=e.q,o=e.projectUIService,r=e.serviceCenterService,n=e.customMethodService,f=e.resourceUIService,d=e.dictionaryService,a=e.energyConsumeUIService,c=e.viewFlexService,s=e.userLoginUIService,g=e.kpiDataService,i=e.ticketTaskService,t=e.userDomainService,v=e.SwSocket,m=e.alertService,serviceProxy=e.serviceProxy,h=e.thridPartyApiService,wholeJSON=e.wholeJSON,u=e.growl,e.timeout)};WIN.$cache={},WIN.$events={},I.prototype.getSignalShipInfo=function(e,t){h.getSignalShipInfo(e,function(e){0==e.code&&t(e.data)})},I.prototype.getManyShipInfo=function(e,t){h.getManyShipInfo(e,function(e){0==e.code&&t(e.data)})},I.prototype.getShipTrack=function(e,t,n,o){h.getShipTrack(e,t,n,function(e){0==e.code&&o(e.data)})},I.prototype.setSelfDom=function(e){this.selfDom=e,Object.defineProperty(this,"selfDom",{enumerable:!1})},I.prototype.getTheme=function(e){if(rootTarget){var t=JSONparse(rootTarget.setting)||{theme:"default"};return e="auto"==(e=e||"default")?themeCompare[t.theme||"default"]:e}return"default"};var b={};return I.prototype.createInfoHtml=function(e){var t="";y.onclickHandler=function(e){var t=e.target.id+"&"+e.target.name;b[t]&&b[t](e.target.name)};var n,o,r,i;for(var a in e.content)e.content[a].type&&"label"!=e.content[a].type?"button"==e.content[a].type&&(t+=(n=e.content[a],void 0,o=n.$attr("on/click"),r=n.label+"&"+n.value,b[r]=o,"<button id='"+n.label+"' name='"+n.value+"' onclick='onclickHandler(event)'>"+n.label+"</button>")):t+="<label><span>"+(i=e.content[a]).label+":</span><span>"+i.value+"</span></label><br>";return t},I.prototype.createShipShape=function(e,t,n,o,r,i){var a=[-e/2*n,-t/2];return[a,[e/2*n,-t/2],[1*e/2,(o/2-1)*t/2],[e/2,(o-1)*t/2],[e/2*1.4,(.5-i)*t],[r/2*e,(.5-i/3)*t],[.1*e,t/2*.99],[0,t/2],[.1*-e,t/2*.99],[-r/2*e,(.5-i/3)*t],[-e/2*1.4,(.5-i)*t],[-e/2,(o-1)*t/2],[-1*e/2,(o/2-1)*t/2],a]},I.prototype.asyncCall=function(e){},I.prototype.asyncRepeat=function(n,o){var r=this;!function e(t){r[t]?n(t,r[t],function(){e(++t)}):o()}(0)},I.prototype.queryDomainTree=function(n,o){t.queryDomainTree(s.user.userID,function(e){var c,u=function(e){this.$clone(e)};if(e.code)if(o){var t=(e.data[0],c=[],function e(t,n,o){var r=new u(t);for(var i in r.parent=n,r.level=o,c.push(r),t.domainInfos){var a=o+1;e(t.domainInfos[i],t,a)}}(e.data[0],null,0),c);n(t)}else n(e.data)})},I.prototype.getAlertColor=function(e){var t="";switch(e){case 4:t="#e7675d";break;case 3:t="#ed9700";break;case 2:t="#e1cd0a";break;case 1:t="#25bce7";break;default:t="#4db6ac"}return t},I.prototype.getCurrentDomainCi=function(t){var e,n=s.user.domains.split("/");1<n.length&&(e=n[n.length-2]),$$.cacheAsyncData.call(f.getResourceById,[e],function(e){0==e.code&&t(e.data)})},I.prototype.getDevicesByCondition=function(e,t){f.getDevicesByCondition(e,function(e){0==e.code&&t(e.data)})},I.prototype.getCurrentDevices=function(n){this.getCurrentProject(function(e){if(e){e.domainPath;var t={projectId:e.id};f.getDevicesByCondition(t,function(e){0==e.code&&n(e.data)})}else n([])})},I.prototype.getCurrentResource=function(t){var e=this.getParameter("resourceId");e?f.getResourceById(e,function(e){0==e.code&&t(e.data)}):p.$attr("routeParam/resourceId")?(e=p.$attr("routeParam/resourceId"),$$.cacheAsyncData.call(f.getResourceById,[e],function(e){0==e.code&&t(e.data)})):t(null)},I.prototype.getCurrentProject=function(t){var e=this.getParameter("projectId");e?$$.cacheAsyncData.call(f.getResourceById,[e],function(e){0==e.code&&t(e.data)}):t(null)},I.prototype.getCurrentCustomer=function(t){var e=this.getParameter("customerId");e?$$.cacheAsyncData.call(f.getResourceById,[e],function(e){0==e.code&&t(e.data)}):t(null)},I.prototype.getCiKpi=function(t){var n=this.$attr("data/model"),e=this.$attr("data/resource"),o=this.$attr("data/modelType"),r=this.$attr("data/resfilltype"),i=this.$attr("data/kpi");i=i||[];var a=this,c=[],u=[],d=[],s=function(){if(i.some(function(e){return"object"!=_typeof(e)})){var e;if(!(e=0==o||null==o?n.id:o))throw new Error("modelId is no avaliable!!!");$$.cacheAsyncData.call(f.getDataItemsByModelId,[e],function(e){0==e.code&&(d=e.data.filter(function(e){return-1!=i.indexOf(e.id)}),t(u,d))})}else t(u,d=i)};if(1==(e=e||[]).length&&"rootCi"==e[0]&&(this.$attr("data/modelType",300),this.$attr("data/resfilltype","parameter"),this.$attr("data/resource",[]),o=300,r="parameter"),"parameter"==r)300==o?I.prototype.getCurrentDomainCi(function(e){u=[e],s()}):0==o?I.prototype.getCurrentResource(function(e){u=e?[e]:[],s()}):301==r?I.prototype.getCurrentCustomer(function(e){u=e?[e]:[],s()}):302==o?I.prototype.getCurrentProject(function(e){u=e?[e]:[],s()}):I.prototype.getCurrentDomainCi(303==o?function(e){u=e?[e]:[],s()}:function(e){u=e?[e]:[],s()});else{var p=function(e){var t=q.defer();return"object"!=_typeof(e)?a.getResourceById(e,function(e){u.push(e),t.resolve("success")}):(u.push(e),t.resolve("success")),t.promise};for(var l in e)c.push(p(e[l]));q.all(c).then(function(e){s()})}},I.prototype.copyJSONFileToClipBoard=function(){JSON.stringify(wholeJSON)},I.prototype.postService=function(e,t,n,o){serviceProxy.get(e,t,n,o)},I.prototype.getLatestDevices=function(t){f.getLatestDevices(function(e){0==e.code&&t(e.data)})},I.prototype.getTicketsByStatus=function(t){i.getTicketsByStatus([100],function(e){0==e.code&&t(e.data)})},I.prototype.energyTypeList=function(e){var t=d.dicts.energyType;e&&e(t)},I.prototype.getDevicesByFilter=function(e,t){var n={modelId:e.modelId,domainPath:e.domainPath,label:e.deviceName,sn:e.sn};f.getDevicesByCondition(n,function(e){0==e.code&&t(e.data)})},I.prototype.getCurrentAlert=function(t){var e=this.getParameter("resourceId");e?m.queryFromDb({nodeIds:e},function(e){0==e.code&&t(e.data)}):t([])},I.prototype.getAllAlerts=function(t){m.queryFromDb({},function(e){0==e.code&&t(e.data)})},I.prototype.getAlerts=function(t){var e=s.user.domainPath;m.queryFromDb({domain:e},function(e){0==e.code&&t(e.data)})},I.prototype.queryFromDb=function(e,t){m.queryFromDb(e,function(e){0==e.code&&t(e.data)})},I.prototype.getCustomerFromCurrentUser=function(t){var e,n=s.user.domains.split("/");2<n.length?(e=n[n.length-2],this.getResourceById(e,function(e){t(e)})):t(resource)},I.prototype.getCurrentAlertByProject=function(t){var e=this.getParameter("projectId");m.queryFromDb({nodeIds:e},function(e){0==e.code&&t(e.data)})},I.prototype.currentDirective=function(n){var e=this.getParameter("resourceId");e?this.getResourceById(e,function(e){if(e){var t=e.modelId;t?f.getDirectivesByModelId(t,function(e){0==e.code&&n(e.data)}):n([])}else n([])}):n([])},I.prototype.getKpiValueCi=function(e,t,n,o){r.getValues(e,t,o).then(function(e){n(e)})},I.prototype.getProjectByTYpeId=function(t,o){n.getProjectsType(function(e){if(0==e.code){var n=e.data.find(function(e){return t==e.id});null==n&&(n=e.data[0]),f.getResourceByModelId(302,function(e){if(0==e.code){var t=e.data.find(function(e){return e.values.projectType==n.valueCode});"function"==typeof o&&o(t)}})}})},I.prototype.getViewById=I.prototype.getViewByViewId=function(e,t){e?c.getViewById(e,function(e){0==e.code&&t(e.data)}):t(null)},I.prototype.getProjectsType=function(t,e){n.getProjectsType(function(e){0==e.code&&"function"==typeof t&&t(e.data)},e)},I.prototype.setValue=function(e,t){WIN.$cache.$attr(e,t)},I.prototype.getValue=function(e){return WIN.$cache.$attr(e)},I.prototype.deleteValue=function(e,t){delete WIN.$cache[e]},I.prototype.findProjectsByCondition=function(e,t){o.findProjectsByCondition(e,function(e){0==e.code&&t&&t(e.data)})},I.prototype.getCurrentProjects=function(t){var e={domainPath:s.user.domainPath};o.findProjectsByCondition(e,function(e){0==even.code&&t&&t(e.data)})},I.prototype.getViewsByOnlyRole=function(e,r,i,a){c.getViewsByOnlyRole(e,function(e){var t,n=e.data;for(var o in n)(t=n[o]).template&&t.template.resourceType==r&&t.template.resourceId==i&&c.getViewById(t.viewId,function(e){0==e.code?a(e.data):a(null)})})},I.prototype.getManagedViewsByTypeAndRole=function(e,r,i,a){c.getManagedViewsByTypeAndRole(e,function(e){var t,n=e.data;for(var o in n)(t=n[o]).template&&t.template.resourceType==r&&t.template.resourceId==i&&c.getViewById(t.viewId,function(e){0==e.code?a(e.data):a(null)})})},I.prototype.growl=function(e){u.success(e)},I.prototype.sendDirective=function(e,t,n,o){f.sendDeviceDirective(e,t,n,function(e){0==e.code&&"function"==typeof o&&o(e)})},I.prototype.sendItemDir=function(e,t){var n={};if(e.value){for(var o in e.params){n[e.params[o].name]=e.value}f.sendDeviceDirective(t||Number(this.getParameter("resourceId")),e.id,n,function(e){0==e.code&&u.success("指令发送成功",{})})}else u.warning("请输入指令参数")},I.prototype.sendItemDirAll=function(e){var t={};for(var n in e.params){var o=e.params[n];e.params[n].$value&&(t[o.name]=e.params[n].$value)}f.sendDeviceDirective(Number(this.getParameter("resourceId")),e.id,t,function(e){0==e.code&&u.success("指令发送成功",{})})},I.prototype.sendItemDirByValue=function(e,t){f.sendDeviceDirective(Number(this.getParameter("resourceId")),e,t,function(e){0==e.code&&u.success("指令发送成功",{})})},I.prototype.getAllDevices=function(){},I.prototype.getViewByViewTitle=function(n,o){c.getAllMyViews(function(e){var t=e.data.find(function(e){return e.viewTitle==n});t?c.getViewById(t.viewId,function(e){0==e.code&&o(e.data)}):o(null)})},I.prototype.getResources=function(t){f.getResources(function(e){0==e.code&&"function"==typeof t&&t(e.data)})},I.prototype.getProjectsAndKpiValue=function(t){var u=this;u.findProjectsByCondition({},function(e){var r=[],i=[999999],a=function(e){for(var t in e)-1==this.indexOf(e[t])&&this.push(e[t])},c=function(o,r,i){!function e(t){var n=o[t];n?r(n,function(){e(++t)}):i(o)}(0)};c(e,function(n,o){u.getDevicesByCondition({projectId:n.id},function(e){var t=(n.devices=e).map(function(e){return e.id});a.call(r,t),c(e,function(n,o){var e=n.modelId;u.getKpisByModelId(e,function(e){var t=e.map(function(e){return e.id});a.call(i,t),n.kpis=e,o()})},function(){o()})})},function(){u.getKpiValueCi(r,i,function(i){(function(e){for(var t in this)for(var n in this[t].devices)e(this[t],n,this[t].devices[n])}).call(e,function(o,e,r){null==o.detail&&(o.detail=[]);var t=function(t){var e=i.find(function(e){return e.nodeId==r.id&&e.kpiCode==t.id}),n=i.find(function(e){return e.nodeId==r.id&&999999==e.kpiCode});o.detail.push({ci:{label:r.label},kpi:{label:t.label,icon:t.icon?t.icon:"proudsmart ps-system"},status:n?n.value:0,value:e?e.value:"-"})};for(var n in r.kpis)t(r.kpis[n])}),t(e)})})})},I.prototype.getResourceByModelId=function(e,t){f.getResourceByModelId(e,function(e){0==e.code&&"function"==typeof t&&t(e.data)})},I.prototype.getProTypeByTypeId=function(e,t){n.getProTypeByTypeId(e,function(e){0==e.code&&"function"==typeof t&&t(e.data)})},I.prototype.getParameter=function(e){if(p.routeParam.parameter){var t=JSON.parse(p.routeParam.parameter);return t[t.length-1].$attr(e)}return null},I.prototype.getResourceById=function(e,t){e?f.getResourceById(e,function(e){0==e.code&&t(e.data)}):t(null)},I.prototype.getOnlineByKpiCodes=function(e,t){if(e){var n=["kpi",{includeInstance:!0,isRealTimeData:!0,nodeIds:[e],kpiCodes:[999998],timePeriod:0}];g.getValueList(n,function(e){0==e.code&&t(e.data)})}else t(null)},I.prototype.navigateBack=function(){var e,t=p.routeParam.page?p.routeParam.page:"index",n=p.routeParam.parameter;n=null==n?["0"]:JSON.parse(n);var o=t.split("|");o.pop(),(t=o.toString()).replace(",","|");n[n.length-1].tabLabel;if(n.pop(),e=encodeURIComponent(JSON.stringify(n)),"viewFreeboardCtrl"==l.current.$$route.controller)""!=t&&(y.location.href="../app-sc/index_freeboard.html#/freeboard/"+t+"/"+e);else if("freeStyleCtrl"==l.current.$$route.controller){var r=p.routeParam.viewId;""!=t&&(y.location.href="../app-free-style/index.html#/"+r+"/"+t+"/"+e)}else""!=t&&(y.location.href="../app-oc/index.html#/dashboard/"+t+"/"+e)},I.prototype.navigateTo=function(e,t,n){var o,r=p.routeParam.page?p.routeParam.page:"index";null==t&&(t="0");var i=p.routeParam.parameter;if(i=null==i?["0"]:JSON.parse(i),"self"==n){var a=r.split("|");a.pop(),(r=a.toString()).replace(",","|");var c=i[i.length-1].tabLabel;i.pop(),c&&(t.tabLabel=c),t.$target,i.push(t)}else t.$target,i.push(t);if(o=encodeURIComponent(JSON.stringify(i)),"viewFreeboardCtrl"==l.current.$$route.controller)y.location.href=""!=r?"../app-sc/index_freeboard.html#/freeboard/"+r+"|"+e+"/"+o:"../app-sc/index_freeboard.html#/freeboard/"+e+"/"+o;else if("freeStyleCtrl"==l.current.$$route.controller){var u=p.routeParam.viewId;y.location.href=""!=r?"../app-free-style/index.html#/"+u+"/"+r+"|"+e+"/"+o:"../app-free-style/index.html#/"+u+"/"+e+"/"+o}else y.location.href=""!=r?"../app-oc/index.html#/dashboard/"+r+"|"+e+"/"+o:"../app-oc/index.html#/dashboard/"+e+"/"+o},I.prototype.http=function(e,t){n.http(e,function(e){t(e)})},I.prototype.linkTo=function(e,t){y.open(e,t||"_blank")},I.prototype.findViewHasProjectNameById=function(e,i){this.getResourceById(e,function(e){var t,n,o=e.label,r=(t=s.user.domainPath,"/"+(n=t.split("/"))[1]+"/"+n[2]+"/");c.getViewsOnlyPublishedByTypeAndDomainPath("dashboard",r,function(e){var t=e.data.find(function(e){return-1!=o.indexOf(e.viewTitle)});t?c.getViewById(t.viewId,function(e){0==e.code&&i(e.data)}):i(null)})})},I.prototype.getProjectsByCustomerId=function(e,t){var n={};e&&(n.customerId=e),o.findProjectsByCondition(n,function(e){0==e.code&&t(e.data)})},I.prototype.simulate=function(e,u,p,t,l){var f=[],y=(new Date).getTime(),g=function(e){var t=new Date(e-288e5),n=t.getFullYear(),o=t.getMonth()+1,r=t.getDate(),i=t.getHours(),a=t.getMinutes(),c=t.getSeconds();return o<10&&(o="0"+o),r<10&&(r="0"+r),i<10&&(i="0"+i),a<10&&(a="0"+a),c<10&&(c="0"+c),n+"-"+o+"-"+r+"T"+i+":"+a+":"+c+".000+0000"},n=function(e){var o=t.startTime.getTime(),r=t.period,a=t.frequency,c=t.range;!function e(i){if(i-o<r){var t=function(e){var t,n,o;for(var r in p)t=p[r],n=function(e){if(e){var t=e[1],n=e[0],o=t-n;return Math.round(10*(n+Math.random()*o))/10}return Math.round(100*Math.random())}(c),o={agentId:"0",aggregatePeriod:null,aggregateStatus:null,aggregateType:null,arisingTime:g(i),compressCount:0,computeTaskId:0,dataSerialNumber:0,dataTime:null,insertTime:g(i),kpiCode:t.id,nodeId:e.id,notes:null,numberValue:n,quality:0,resourceId:0,stringValue:null,value:n,valueStr:n+""},f.push(o)};for(var n in u)t(u[n]);e(i+a)}}(o),"function"==typeof l&&l(f)};return"time"==e?n():"ci"==e?n():"ci_2d"==e?function(){var e=services.dictionaryService,d=["energyType","industryShortType"],t=function(r,i){e.getDictValues(i,function(e){if(0==e.code){var n=[],t=function(t){n.some(function(e){return e.label==t.label})||n.push(t)};for(var o in e.data)t(e.data[o]);d[r]={path:i,status:"finished",data:n},d.every(function(e){return"object"==_typeof(e)})&&function(){var e=function(u){var e=function(a,c){var e=function(i){var e=function(e){var t;ranges&&(t=ranges[a]);var n=function(e){if(e){var t=e[1],n=e[0],o=t-n;return Math.round(10*(n+Math.random()*o))/10}return Math.round(100*Math.random())}(t),o=y,r={agentId:"0",aggregatePeriod:null,aggregateStatus:null,aggregateType:null,arisingTime:g(o),compressCount:0,computeTaskId:0,dataSerialNumber:0,dataTime:null,insertTime:g(o),kpiCode:c.id,nodeId:u.id,notes:null,numberValue:n,instance:i.label+","+e.label,quality:0,resourceId:0,stringValue:null,value:n,valueStr:n+""};f.push(r)};for(var t in d[1].data)e(d[1].data[t])};for(var t in d[0].data)e(d[0].data[t])};for(var t in p)e(t,p[t])};for(var t in u)e(u[t]);"function"==typeof l&&l(f)}()}})};for(var n in d)t(n,d[n])}():"ci_3d"==e&&function(){var a,e=services.dictionaryService,s=["energyType","industryShortType"],t=function(r,i){e.getDictValues(i,function(e){if(0==e.code){var n=[],t=function(t){n.some(function(e){return e.label==t.label})||n.push(t)};for(var o in e.data)t(e.data[o]);s[r]={path:i,status:"finished",data:n},s.every(function(e){return"object"==_typeof(e)})&&function(){var e=function(d){var e=function(c,u){var e=function(a){var e=function(i){var e=function(e){var t;ranges&&(t=ranges[c]);var n=function(e){if(e){var t=e[1],n=e[0],o=t-n;return Math.round(10*(n+Math.random()*o))/10}return Math.round(100*Math.random())}(t),o=y,r={agentId:"0",aggregatePeriod:null,aggregateStatus:null,aggregateType:a.valueCode,arisingTime:g(o),compressCount:0,computeTaskId:0,dataSerialNumber:0,dataTime:null,insertTime:g(o),kpiCode:u.id,nodeId:d.id,notes:null,numberValue:n,instance:e.label+","+i.label,quality:0,resourceId:0,stringValue:null,value:n,valueStr:n+""};f.push(r)};for(var t in s[1].data)e(s[1].data[t])};for(var t in s[0].data)e(s[0].data[t])};for(var t in a)e(a[t])};for(var t in p)e(t,p[t])};for(var t in u)e(u[t]);"function"==typeof l&&l(f)}()}})};for(var n in s)t(n,s[n]);e.getDictValues("aggregateType",function(e){0==e.code&&(a=e.data.slice(0,2))})}(),f},I.prototype.getModels=function(t){f.getModels(function(e){0==e.code&&t(e.data)})},I.prototype.getKpisByModelId=function(e,t){e?f.getKpisByModelId(e,function(e){0==e.code&&t(e.data)}):t([])},I.prototype.getResourceByModelId=function(e,t){e?f.getResourceByModelId(e,function(e){0==e.code&&t(e.data)}):t([])},I.prototype.getDomainsByFilter=function(e,t){f.getDomainsByFilter(e,function(e){0==e.code&&t(e.data)})},I.prototype.queryDomainsByEnterpriseId=function(e,t){a.queryDomainsByEnterpriseId(e,function(e){0==e.code&&t(e.data)})},I.prototype.getProjectsByDomains=function(e,t){var n={};e&&(n.domainPath=e),o.findProjectsByCondition(n,function(e){0==e.code&&t(e.data)})},I.prototype.getProjectsByDomains=function(e,t){var n={};e&&(n.domainPath=e),o.findProjectsByCondition(n,function(e){0==e.code&&t(e.data)})},I.prototype.getCurrentProjectsFromDomain=function(t){s.user.domains;f.getDomainsByFilter({domains:s.user.domains,modelId:302},function(e){0==e.code&&t(e.data)})},I.prototype.findProjectById=function(e,t){o.findProjectById(e,function(e){0==e.code&&t&&t(e.data)})},I.prototype.getCurrentProjectsByCustom=function(t){if(s.user.subDomain){var e=s.user.subDomain.split("/"),n={customerId:e[e.length-2]};o.findProjectsByCondition(n,function(e){0==e.code&&t&&t(e.data)})}else t([])},I.prototype.getViewByProjectId=function(n,o){var e,t,r=(e=s.user.domainPath,"/"+(t=e.split("/"))[1]+"/"+t[2]+"/");c.getViewsOnlyPublishedByTypeAndDomainPath("configure",r,function(e){var t=e.data.find(function(e){return!(!e.template||"project"!=e.template.resourceType||e.template.resourceId!=n)});t?c.getViewById(t.viewId,function(e){0==e.code&&o(e.data)}):o(null)})},I.prototype.getViewByModelId=function(n,o){var e,t,r=(e=s.user.domainPath,"/"+(t=e.split("/"))[1]+"/"+t[2]+"/");c.getViewsOnlyPublishedByTypeAndDomainPath("configure",r,function(e){var t=e.data.find(function(e){return!(!e.template||"device"!=e.template.resourceType||e.template.resourceId!=n)});t?c.getViewById(t.viewId,function(e){0==e.code&&o(e.data)}):o(null)})},I.prototype.getSimulateList=function(e,t){n.getSimulateList(e,t)},I.prototype.webSocket=function(e,t,n){var o=Math.uuid(),r={ciid:e.toString(),kpi:t.toString()};v.unregister(o);var i="register";v.register(o,i,function(e){"function"==typeof n&&n(e.data)}),v.send(o,i,"kpi",r),$("#free-board").on("naviClick",function(){v.unregister(o)})},I.prototype.getKpiFromViewByTypeAndRole=function(e,t,n,i,a){var c,u=[];this.getParameter("resourceId")?c=[Number(this.getParameter("resourceId"))]:this.parameters.resourceId&&(c=[this.parameters.resourceId]);var d={},s=Math.uuid();this.getViewsByOnlyRole(e,t,n,function(e){var t=JSON.parse(e.content);t.cells.sort(function(e,t){return parseInt(e.z)-parseInt(t.z)}),t.cells.forEach(function(e){if("basic.Rect"==e.type&&e.kpiId&&8<e.kpiId.length&&e.nodeId&&8<e.nodeId.length){var t,n;t="string"==typeof e.kpiId&&-1<e.kpiId.search("number:")?Number(e.kpiId.split(":")[1]):Number(e.kpiId),n="string"==typeof e.modelId&&-1<e.modelId.search("number:")?Number(e.modelId.split(":")[1]):Number(e.modelId);var o={};f.rootModelsDic&&f.rootModelsDic[n]&&f.rootModelsDic[n].kpiDic&&f.rootModelsDic[n].kpiDic[t]&&(o=f.rootModelsDic[n].kpiDic[t]),u.push(t),d[t]={kpiName:e.attrs.text.text?e.attrs.text.text:o.label,kpiUnit:"number:1"==e.unitType&&o.unitLabel?o.unitLabel:"",value:"无",kpiCode:o.id,rangeObj:o.rangeObj}}});var n=["kpi",{category:"ci",isRealTimeData:!0,nodeIds:c,kpiCodes:u,startTime:null,endTime:null,timeRange:"",statisticType:"psiot",condList:[]}];g.getValueList(n,function(e){if(0==e.code){e.data.forEach(function(e){d[e.kpiCode].value=e.value,d[e.kpiCode].rangeObj&&(d[e.kpiCode].value=d[e.kpiCode].rangeObj[d[e.kpiCode].value])});var t=[];for(var n in d)t.push(d[n]);i(t)}});var o={ciid:c.toString(),kpi:u.toString()};v.unregister(s);var r="register";v.register(s,r,function(e){"function"==typeof a&&(d[e.data.kpiCode].rangeObj&&(e.data.value=d[e.data.kpiCode].rangeObj[e.data.value]),a(e.data))}),v.send(s,r,"kpi",o),$("#free-board").on("naviClick",function(){v.unregister(s)})})},I.prototype.filterEnterprises=function(t){var e=s.user.domains;a.findEnterpriseInfoByDomainPath(e,function(e){0==e.code&&(e.data.valueCode=e.data.industryType,I.prototype.queryEnterpriseListByHis(e.data,function(e){t(e)}))})},I.prototype.queryEnterpriseListByHis=function(e,t){if(e){var n=e.valueCode,o=[];a.findEnterpriseInfos(function(e){0==e.code&&(e.data.forEach(function(e){e.industryType==n&&(e.label=e.name,o.push(e))}),t(o))})}else u.warning("请选择行业")},I.prototype.queryDomains=function(n,o){var r=[],i=0;n.enterpriseList.forEach(function(e){var t;t=e,a.queryDomainsByEnterpriseId(t,function(e){0==e.code&&(i++,e.data.filter(function(e){return e.modelDefinitionId==n.modelId}).forEach(function(e){r.push(e.id)}),i==n.enterpriseList.length&&(o(r),i=0))})})},I.prototype.getDirectivesByTypeAndRole=function(e,t,n,o){var r={},i=this;i.getManagedViewsByTypeAndRole(e,t,n,function(e){JSON.parse(e.content).cells.forEach(function(e){e.directiveIds&&e.directiveIds.forEach(function(e){"string"==typeof e?r[e.split(":")[1]]=!0:r[e]=!0})}),i.getDirectivesByModelId(n,function(e){var t=[];e.forEach(function(e){r[e.id]&&t.push(e)}),t.sort(doubleCompare(["values","index"],"desc")),o(t)})})},I.prototype.getDirectivesByTypeAndRoleAndValue=function(e,t,n,r){var i={},a=this.getParameter("resourceId"),c=this;c.getViewsByOnlyRole(e,t,n,function(e){JSON.parse(e.content).cells.forEach(function(e){e.directiveIds&&e.directiveIds.forEach(function(e){"string"==typeof e?i[e.split(":")[1]]=!0:i[e]=!0})}),c.getDirectivesByModelId(n,function(e){var o=[];e.forEach(function(e){i[e.id]&&o.push(e)}),o.sort(doubleCompare(["values","index"],"desc"));var t=o.map(function(e){return e.params&&e.params[0]?e.params[0].id:0}),n=[parseInt(a)];c.getKpiValueCi(n,t,function(e){var t=function(t){var e=o.find(function(e){return!!e.params[0]&&e.params[0].id==t.kpiCode});e&&(e.value=t.value)};for(var n in e)t(e[n]);r(o)})})})},I.prototype.getDirectivesByModelId=function(e,t){e?f.getDirectivesByModelId(e,function(e){0==e.code&&t(e.data)}):t([])},I.prototype.queryBenchmarkByShortName=function(o,r){var i={},a={},c=[],u=[];d.getAllDicts(function(e){var n,t;0==e.code&&(e.data.forEach(function(e){"industryShortType"==e.dictCode?c.push(e):"energyType"==e.dictCode&&u.push(e)}),c.forEach(function(e){i[e.label]=e}),u.forEach(function(e){a[e.label]=e}),n=[],t=["kpi",{isRealTimeData:!0,nodeIds:[s.user.domainID],kpiCodes:[3327],granularityUnit:"MONTH",aggregateType:["VALENTWEIGHT"],timeRange:"",statisticType:"psiot",includeInstance:!0,condList:[],timePeriod:1,dataType:1}],g.getValueList(t,function(e){0==e.code&&(e.data.forEach(function(e){var t=e.instance.split(",");e.instanceName=i[t[0]].param,e.instanceCode=i[t[0]].valueCode,e.energyName=t[1],e.energyCode=a[t[1]].valueCode,o.label==t[0]&&n.push(e)}),r(n))}))})},I});
//# sourceMappingURL=../../map/toolkit/component/commonMethod.js.map
