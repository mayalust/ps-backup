define(["controllers/controllers","../../../../node_modules/ps-ultility/ps-ultility"],function(e,j){"use strict";e.initController("subViewCtrl",["$scope","$state","$stateParams","userEnterpriseService","$rootScope","$routeParams","resourceUIService","$timeout","growl","$q","$window","$location","viewFlexService","freeboardservice","userLoginUIService","roleViewService","commonMethodService","serviceProxy",function(c,t,a,e,n,r,i,u,o,s,l,d,f,p,v,g,w,h){c.instance={};var y,m,S,I,b,$=w(),x=c.$root.viewId=a.viewId,C=a.index;j.urlparser(l.location.href);function V(e,t,n){var r=s.defer();return h.get(e,t,n,function(e){0==e.code?r.resolve(e.data||[]):r.reject(e)},function(e){r.reject(e)}),r.promise}function O(e){if(0==e.code&&null!=e.data){var t,n=(o=e.data.content,"string"==typeof(s=JSON.parse(o)).setting&&(s.setting=JSON.parse(s.setting)),c.setting=s.setting,s.setting&&(c.bgColor=s.setting.color),s);if(n.hasOwnProperty("groups")){var r=n.groups.find(function(e){return a.index==e.path});c.tabIndex=r?n.groups.indexOf(r):0,c.tabs=n.groups,t={layout:n.groups[c.tabIndex].layout,setting:n.setting};var i=new p.replaceCiKpi(t,function(){u(function(){c.instance.setMode(!0),c.instance.renderLayout(i,null,c)})},null,n,c)}else if(n.hasOwnProperty("layout")){c.navigation=[{label:"服务中心"}],t={layout:n.layout,setting:n.setting};i=new p.replaceCiKpi(t,function(){u(function(){c.instance.setMode(!0),c.instance.renderLayout(i,null,c)})},null,n,c)}}else c.error="获取此此用户角色的服务视图发生错误"+(e.message?","+e.message:"");var o,s}(y=x,I=s.defer(),b=j.urlparser(l.location.href),/\d+/.test(y+"")?["localhost","127.0.0.1"].some((S=b.address,function(e){return e===S}))&&/808\d/.test(b.port+"")?(m=y,V("inspectionService","getlisteners",m)).then(function(e){-1!==e.indexOf(y)?(n.stopInspection=function(){var e;(e=y,V("inspectionService","end",e)).then(function(e){o.success("结束本地监听视图 : "+y),l.location.reload()}).catch(function(e){o.error("移除监听故障 : "+y)})},n.saveView=function(){var e;(e=y,V("inspectionService","save",e)).then(function(e){o.success("成功保存视图 : "+y)}).catch(function(e){o.error("不能保存视图 : "+y)})},delete n.startInspection):(n.startInspection=function(){var e;(e=y,V("inspectionService","start",e)).then(function(e){o.success("开始本地监听视图 : "+y),l.location.reload()}).catch(function(e){o.error("监听故障 : "+y)})},delete n.stopInspection,delete n.saveView),void 0!==y&&psrequire(["../app-views/build/"+y+"."+C],function(e){var t=new p.replaceCiKpi(e,function(){u(function(){c.instance.setMode(!0),c.instance.renderLayout(t,null,c)})},null,null,c);I.resolve("user local")},function(e){I.reject("user server")})}):I.reject("user server"):I.reject("not a number"),I.promise).then(function(e){}).catch(function(e){isNaN(x)?$.getView({path:"viewCtrl:"+x,item:{}},function(e){var t=new p.replaceCiKpi(e,function(){u(function(){c.instance.setMode(!0),c.instance.renderLayout(t,null,c)})},null,null,c)}):$.getResourceById(t.params.id,function(e){$.setValue("global/resource",e),f.getViewById(x,O)})})}])});
//# sourceMappingURL=../../../map/app-sc/js/controllers/sub-view-ctrl.js.map