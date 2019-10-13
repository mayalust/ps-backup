function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["controllers/controllers","Array"],function(e){"use strict";e.initController("permissionCtrl",["$scope","$timeout","$q","$routeParams","$location","serviceCenterService","ngDialog","userInitService","userLoginUIService","userEnterpriseService","userUIService","growl","userRoleUIService","userFunctionService","userDomainService","marketplaceUIService","viewFlexService","dictionaryService",function(i,e,l,t,n,r,c,s,a,o,u,d,f,p,v,b,m,h){var y,g,w,I,S,A,x=t.roleID;i.panel=t.panel,i.navigateTo=function(e){"prod_componentpermiss"==e?window.location.href="../../../app-oc/index.html#/prod_componentpermiss/"+x:n.path("usermanager/permission/"+e+"/"+x)};var C=[],D=[],R={},T={SUBMIT:"确定",CANCEL:"取消"},$={dashboard:"dashboard",template:"template",configAlert:"configAlert",designView:"designView",configure:"configure"};function V(){var t;(t=l.defer(),r.models.getAll().then(function(e){t.resolve(e)}),t.promise).then(function(e){return w=e,t=l.defer(),h.getDictValues(["functionCode"],function(e){0==e.code?t.resolve(e.data):t.reject(e.message)}),t.promise;var t}).then(function(e){var t,n;return I=e,t={roleId:x},n=l.defer(),f.findRoleViews(t,function(e){0==e.code?n.resolve(e.data):n.reject(e.message)}),n.promise}).then(function(e){var t,n;return S=e,t={roleId:x},n=l.defer(),f.findRoleRes(t,function(e){0==e.code?n.resolve(e.data):n.reject(e.message)}),n.promise}).then(function(e){A=e;var t=[];function n(n){var e,t,r,o=l.defer();return(e=n,t=l.defer(),r=a.user.domainPath,m.getViewsOnlyPublishedByTypeAndDomainPath(e,r,function(e){0==e.code?t.resolve(e.data):t.reject(e)}),t.promise).then(function(e){"dashboard"==n&&Array.prototype.push.apply(C,e),R[n]=R[n]||{};var t=e.filter(function(e){if("1"!=e.releaseStatus)return!1;var t=e.template;return"dashboard"==n?!t||0==t.resourceId:"template"==n?!!t&&0!=t.resourceId&&"default"!=t.keyValue:e.viewType==n});R[n].all=t,R[n].applied=t.filter(function(e){var t=e.viewId;return A.find(function(e){return e.resId==t})}),R[n].avaliable=t.filter(function(e){var t=e.viewId;return!A.find(function(e){return e.resId==t})}),o.resolve("success")}),o.promise}for(var r in $)t.push(n($[r]));return l.all(t)}).then(function(){function e(o){var r;for(var e in o.source)o.source[e].template&&(o.source[e].resourceId=o.source[e].template.resourceId);var a=o.resType;return r="设备视图"==o.title?{label:"设备模板",editable:!1,sortable:!0,filterable:!0,data:"resourceId",format:function(t){var e=w.find(function(e){return e.id==t});return e?e.label:"-"},filterFormat:{label:"label",value:"id"},type:"select",options:w,modes:{default:{type:"text"}}}:{label:"视图描述",editable:!1,sortable:!0,filterable:!0,data:"description",type:"text",modes:{default:{type:"text"}}},{title:o.title,source:{source:o.source,showheader:!0,header:[{icon:"fa fa-plus",class:"btn btn-primary btn-sm",label:"添加",style:{margin:"2px"},mark:"viewTitle",id:"viewId",type:"button",events:{click:function(e){var t=[{label:T.SUBMIT,icon:"btn btn-primary",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){var r=o.sourceAva.filter(function(e){return 1==e.selected});Array.prototype.push.apply(o.source,r);var e=r.map(function(e){return e.selected=!1,e.viewId});s.addRoleRes(x,a,e,function(e){if(0==e.code){var t=function(n){n.disabled=!1,o.sourceAva.$remove(function(e,t){return t==n})};for(var n in r)t(r[n]);c.close(),d.success(o.title+"添加成功")}})}},{label:T.CANCEL,icon:"btn btn-default",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){c.close()}}],n={source:o.sourceAva,miniSize:!0,pageResize:!1,header:[],rowclass:function(t){var e=o.sourceAva.filter(function(e){return 1==e.selected&&e!=t}).concat(o.source).some(function(e){return!(!e.template||!t.template)&&"device"==t.template.resourceType&&t.template.resourceId==e.template.resourceId});return(t.disabled=e)?"disabled":""},columnDefs:[{label:"视图名称",editable:!1,sortable:!0,filterable:!0,data:"viewTitle",type:"text",modes:{default:{type:"text"}}},r]};i.dialog={title:"添加"+o.title,datatablesource:n,button:t},c.open({template:"../partials/dialogue/data_table_dia.html",className:"ngdialog-theme-plain",scope:i})}}},{icon:"fa fa-minus",class:"btn btn-default btn-sm",label:"删除",style:{margin:"2px"},disabled:function(e){return!e.some(function(e){return e.selected})},events:{click:function(r){var e=[{label:T.SUBMIT,icon:"btn btn-success",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){c.close();var e=r.map(function(e){return{roleId:x,resType:a,resId:e.viewId}});f.deleteRoleRes(e,function(e){if("0"==e.code){for(var n in r)"function"==typeof o.sourceAva.pushbefore?o.sourceAva.pushbefore(r[n]):o.sourceAva.unshift(r[n]),r[n].selected=!1,o.source.$remove(function(e,t){return r[n]==t}),o.source.removeAllChecked();d.success(o.title+"使用权限删除成功")}})}},{label:T.CANCEL,icon:"btn btn-default",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){c.close()}}];i.dialog={title:{label:"提示"},description:{label:"确认要删除此用户使用这些"+o.title+"的权限吗？"},fnlist:e},c.open({template:"../partials/dialogue/common_dia_prompt.html",className:"ngdialog-theme-plain",scope:i})}},type:"button"}],columnDefs:[{label:"视图名称",editable:!1,sortable:!0,filterable:!0,data:"viewTitle",type:"text",modes:{default:{type:"text"}}},r]}}}var t=function(o){o.source.forEach(function(n){var e=function(t){var e=S.find(function(e){return e.functionCode==t.valueCode});e&&n.viewId==e.viewId&&(n[t.valueCode]=!0)};for(var t in I)e(I[t]);n.selected=!0});var e=I.map(function(r){return{label:r.label,type:"button",disabled:function(e){return 1!=e.selected},class:function(e){return e[r.valueCode]?"btn btn-success":"btn btn-default"},events:{click:function(e){var t=e[r.valueCode],n=o.sourceAll.find(function(e){return 1==e[r.valueCode]});n&&(n[r.valueCode]=!1),e[r.valueCode]=!t}}}});return{title:"仪表板视图",source:{source:o.sourceAll,showheader:!0,showSelector:!0,miniSize:!0,page:!0,header:[{icon:"glyphicon glyphicon-floppy-save",class:"btn btn-primary btn-sm",label:"保存",style:{margin:"2px"},events:{click:function(l){var c=l.filter(function(t){return!A.find(function(e){return e.resId==t.viewId})}).map(function(e){return e.viewId}),u=A.filter(function(t){return!l.some(function(e){return t.resId==e.viewId})&&21==t.resType}),t=function(){var t=function(){var i=[],e=function(t){var e=S.find(function(e){return e.functionCode==t.valueCode});e&&i.push(e)};for(var t in I)e(I[t]);var n=function(e){if(0==e.code){var t=function(n){S.$remove(function(e,t){return t.viewId==n.viewId})};for(var n in i)t(i[n]);var r=[],o=function(t){var e=l.find(function(e){return 1==e[t.valueCode]});e&&r.push({roleId:x,viewId:e.viewId,functionCode:t.valueCode})};for(var n in I)o(I[n]);var a=function(){d.success("仪表板视图授权成功"),0<c.length||0<u.length||0<i.length||r.length};0<r.length?f.addRoleView(r,function(e){"0"==e.code&&(Array.prototype.push.apply(S,e.data),a())}):a()}};0<i.length?f.deleteRoleView(i,n):n({code:0,data:null})};0<u.length?f.deleteRoleRes(u,function(e){if(0==e.code){for(var n in u)A.$remove(function(e,t){return t.resId==u[n].resId});t()}}):t()};0<c.length?s.addRoleRes(x,21,c,function(e){0==e.code&&(Array.prototype.push.apply(A,e.data),t())}):t()}},type:"button"}],events:{click:function(e){if(1!=e.selected)for(var t in I)n=I[t],e[n.valueCode]=!1;var n}},columnDefs:[{label:"视图名称",editable:!1,sortable:!0,filterable:!0,data:"viewTitle",type:"text",modes:{default:{type:"text"}}},{label:"视图描述",editable:!1,sortable:!0,filterable:!0,data:"description",type:"text",modes:{default:{type:"text"}}},{label:"应用于",type:"buttonGroup",filterable:!1,sortable:!1,width:"141px",modes:{default:{options:e}}}]}}}({title:"仪表板视图",sourceAll:C,source:R.dashboard.applied,resType:21,sourceAva:R.dashboard.avaliable}),n=e({title:"设备视图",source:R.template.applied,resType:21,sourceAva:R.template.avaliable}),r=e({title:"告警视图",resType:23,source:R.configAlert.applied,sourceAva:R.configAlert.avaliable}),o=e({title:"分析视图",resType:24,source:R.designView.applied,sourceAva:R.designView.avaliable}),a=e({title:"组态视图",resType:25,source:R.configure.applied,sourceAva:R.configure.avaliable});i.views=[t,n,r,o,a]})}function k(e){var t=!1;return e.values&&(t=e.values.component),1!=e.selected&&t}function N(t){return D.find(function(e){return e.viewId==t.viewId})}function _(e){return e}function j(t){var e=g.find(function(e){return e.viewId==t.viewId});return e&&(t.name=e.name,t.alias=e.alias,t.selected=!0),t}function E(){var n,r={};i.allSelectedDashboard=[],(n=l.defer(),o.queryEnterpriseRole(function(e){if(0==e.code){var t=e.data.find(function(e){return e.roleID==x});n.resolve(t)}else n.reject(e)}),n.promise).then(function(e){var t,n,r;return t=(y=e).values,n=new RegExp("^\\{.*\\}$","g"),r=new RegExp("^\\[.*\\]$","g"),g=(n.test(t)||r.test(t)?JSON.parse(t):null)||[],function(){var t=l.defer(),a=[["text","viewTitle"],"viewId","values"];function n(e){return"dashboard"==e.viewType}function r(e,t){var n={id:parseInt(t)};for(var r in a){var o=a[r];"string"==typeof o?n[o]=e[o]:"object"==_typeof(o)&&(n[o[0]]=e[o[1]])}return n}return m.getAllMyViews(function(e){"0"==e.code?(e.data=e.data||[],t.resolve(e.data.filter(n).map(r))):t.reject(e)}),t.promise}()}).then(function(e){var t;D=e.map(j),i.alldashboards=D.filter(k),i.allSelectedDashboard=g.map(N).filter(_),i.addView=function(){t.selected=!0,i.alldashboards=D.filter(k),t.name=t.text,t.alias="",i.allSelectedDashboard.push(t)},i.onSelect=function(e){t=e},i.onInit=function(e){t=e},i.save=function(){var e,t,n,r,o=(e=(e=i.allSelectedDashboard).map(function(e){var t={},n=["active","selected","$$hashKey","id"];for(var r in e)-1==n.indexOf(r)&&(t[r]=e[r]);return t}),JSON.stringify(e));(t=o,n=l.defer(),r={roleName:y.roleName,roleID:y.roleID},r.values=t,f.modifyRole(r,function(e){0==e.code?n.resolve(e.data):n.reject(e)}),n.promise).then(function(e){d.success("添加组件成功")})},i.moveup=function(e){var t=i.allSelectedDashboard.indexOf(e);0<t&&(i.allSelectedDashboard.splice(t,1),i.allSelectedDashboard.splice(t-1,0,e)),r.active=!1,e.active=!0,r=e},i.movedown=function(e){var t=i.allSelectedDashboard.indexOf(e);t<i.allSelectedDashboard.length&&(i.allSelectedDashboard.splice(t,1),i.allSelectedDashboard.splice(t+1,0,e)),r.active=!1,e.active=!0,r=e},i.remove=function(e){var t=i.allSelectedDashboard.indexOf(e);i.allSelectedDashboard.splice(t,1),delete e.alias,delete e.name,delete e.selected,r==e&&(r={}),i.alldashboards=D.filter(k)}})}function U(){var t;"menus"==i.panel?(i.saveMenuPremission=function(){var e=i.functionTree.getCheckNode().map(function(e){return e.functionCode}),t=[];for(var n in e)e[n]&&t.push(e[n]);p.addFunction2Role(x,t,function(e){0==e.code?d.success("功能分配成功",{}):d.warning("功能分配失败!",{})})},p.queryAllFunctionByUser(a.user.userID,x,function(e){if(0==e.code){var t=function(e){var r=0,t=function e(t){for(var n in 1==t.belong&&(r=1),t.function)e(t.function[n])};for(var n in e)t(e[n]);return r}(e.data);i.functionTree={name:"全部",belong:t,function:e.data}}})):"view"==i.panel?V():"equipment"==i.panel?(t={roleId:x},h.getDictValues(["commandType"],function(e){if(0==e.code){var r=e.data;f.findRoleRes(t,function(e){if(0==e.code){var a=e.data.filter(function(e){return 30==e.resType}),t=function(t){a.find(function(e){return e.resId==t.valueCode})&&(t.selected=!0)};for(var n in r)t(r[n]);i.equipments={title:"设备控制",source:r,showheader:!0,showSelector:!0,page:!0,header:[{icon:"glyphicon glyphicon-floppy-save",class:"btn btn-primary btn-sm",label:"保存",style:{margin:"2px"},events:{click:function(e){var t=e.filter(function(t){return!a.some(function(e){return e.resId==t.valueCode})}).map(function(e){return e.valueCode}),n=a.filter(function(t){return!e.some(function(e){return e.valueCode==t.resId})}).map(function(e){return{roleId:x,resId:e.resId}}),r=function(){d.success("修改设备控制功能成功。")},o=function(){0<n.length?f.deleteRoleRes(n,function(e){r()}):r()};0<t.length?s.addRoleRes(x,30,t,function(e){o()}):o()}},type:"button"}],columnDefs:[{label:"指令类型",editable:!1,sortable:!0,filterable:!0,data:"label",type:"text",modes:{default:{type:"text"}}}]}}})}})):"component"==i.panel&&E()}a.user.isAuthenticated?U():i.$on("loginStatusChanged",function(e,t){a.user.isAuthenticated&&U()})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/permission_ctrl.js.map