define(["../services/services.js"],function(e){"use strict";e.factory("userLoginUIService",["$http","$state","$rootScope","serviceProxy","$q","$route","$location","$window","$timeout","growl","userEnterpriseService","psTreeData","psUiRouterHandler","commonMethodService2","psConfig",function(e,u,r,i,s,n,t,d,c,f,a,l,p,o,m){var g,h=["prod_","rview"],C=-1!=t.$$absUrl.indexOf("app-free-style"),v="userLoginUIService",b=localStorage.getItem("roleId");function M(e){if(e){if(g.user.userId=g.user.userID,null!=g.user.enterprise)if(null!=g.user.enterprise.enterpriseLogo&&""!=g.user.enterprise.enterpriseLogo){var n=i.origin+"/"+g.user.enterprise.enterpriseLogo;g.user.enterprise.enterpriseLogo=n,g.user.enterprise.logoStatus="0"}else g.user.enterprise.enterpriseLogo="../images/enterprise/logo.svg";else{g.user.enterprise={enterpriseLogo:"../images/enterprise/logo.svg"}}g.user.isAuthenticated=e,r.$broadcast("loginStatusChanged",e)}else g.user.isAuthenticated=e,r.$broadcast("loginStatusChanged",e)}return g={loginPath:"",user:{wait:function(e){e},isAuthenticated:!1,roles:null,viewType:null,firstCode:null},result:{}},d.document.title="",g.getCurrentUser=function(r){var t=s.defer();function o(e,n){return-1!=n.indexOf(e)?e:"string"==typeof(r=n)?(t=parseInt(r.split(",")[0]),console.assert(t==t,"角色ROLEID为空"),t==t?t:null):(console.warn("角色ROLEID不为字符串"),null);var r,t}return i.get(v,"getCurrentUser",null,function(e){if(console.log("getCurrentUser",((new Date-d.__loadedTime__)/1e3).toFixed(3)+"s"),null!=e&&""!=e&&0==e.code&&e.data){g.user=e.data,g.user.usercurrentRoleID=g.user.currentRoleID=o(b,g.user.roleID),g.user.usercurrentRoleID+="",g.user.currentRoleID+="",g.user.isAuthenticated=!0,t.resolve(e.data),M(!0);var n=document.location.href;"function"==typeof r&&r(g.user),l.getCurrentUser(g.user),0==e.data.loginTimes&&n.indexOf("password.html")<0&&(d.location.href="../app-uc/password.html")}else t.reject("error"),M(!1)}),t.promise},g.login=function(e,n,r){i.get(v,"login",[e,n],function(e){null!=e&&""!=e&&0==e.code&&e.data?(g.user=e.data,M(g.user.isAuthenticated=!0)):(g.result=e,M(!1))})},g.loginCallback=function(e,n,r){i.get(v,"login",[e,n],r)},g.logout=function(){i.get(v,"logout",null,function(e){if(null!=e&&""!=e&&0==e.code){var n=e.data;n="/"==n[0]&&n.slice(1)||n,d.location.href="../"+n,g.user={},M(g.user.isAuthenticated=!1)}})},g.modifyPassword=function(e,n,r,t){i.get(v,"modifyPassword",[e,n,r],t)},g.loginin=function(e,n){i.get(v,"loginin",e,n)},g.redirectToLogin=function(){r.$broadcast("redirectToLogin",null)},g.changePos=function(){var n=s.defer(),e=s.defer();return g.user&&null!=g.user.appData?n.resolve({appData:g.user.appData,industry:g.user.industry}):r.$on("loginStatusChanged",function(e){n.resolve({appData:g.user.appData,industry:g.user.industry})}),n.promise.then(function(e){var o=g&&g.user&&g.user.domainPath;if(!o)throw new Error("invalid user data");var n=/\/(\d+)\/$/.exec(o),i=n?n[1]:null;if(!i)throw new Error("invalid user domainPath");u.params.id=i;var t=g.user.currentRoleID;console.log(t),a.queryEnterpriseRole(function(e){if(0==e.code){var n=e.data.find(function(e){return 0x73be428da6d2!=e.roleID&&(t?t==e.roleID:-1!==g.user.roleID.indexOf(e.roleID))});m.setRoleValues(n.values);var r=m.getRoleValues().then(function(e){var n=e.children[0],r=["index","navigate","factory","production","devicegroup"][o.split("/").length-4]||"devicegroup",t=n.viewId;if("177280852260000"==t&&r)d.location.href="./index_freeboard.html#/prod_dashboard/0/"+i+"/0/0/0/"+t+"/"+r;else{if("177280852260000"==t||!/\d+/.test(t+""))return p(n);d.location.href="./index_freeboard.html#/prod_dashboard/0/"+i+"/0/0/0/"+t+"/index"}});r&&r.then(function(e){e[0];e[1].id=i,u.go.apply(u,e),d.addEventListener("hashchange",function e(n){var r=d.location.href.replace("index.html","index_freeboard.html");d.location.href=r,d.removeEventListener("hashchange",e)})})}})}),e.promise},g.rootHandler=function(e,r){var n=r.absUrl().split("#")[0];if(-1<n.search("/app-oc/")?e.localMenuCode="F01":-1<n.search("/app-sc/")?e.localMenuCode="F02":-1<n.search("/app-ac/")?e.localMenuCode="F03":-1<n.search("/app-uc/")?e.localMenuCode="F04":-1<n.search("/app-help/")&&(e.localMenuCode="F05"),e.menuitems.isloaded&&!C){e.currentMenuCode=null,e.treeviewIndex=r.path();var t,o,i=r.path().split("/");if(1!=i.length&&i[1]){if(2<i.length&&(t="#/"+i[1]+"/"+i[2],(o=e.menuitems[t])||(o=e.menuitems["#/"+i[1]+"/0"])),!o)if(s=r.path(),h.some(function(e){return-1!=s.indexOf(e)}))o={parentCode:"M01"};else{t="#/"+i[1];var u="#/"+i[1]+"/";o=e.menuitems[t]||e.menuitems[u]}var s;if(void 0===o)return f.warning("您并没有访问该功能的权限，请联系系统管理人员",{}),void r.path(e.oldTreeviewIndex);e.oldTreeviewIndex=e.treeviewIndex,o&&(e.currentMenuCode=o.functionCode||null,e.firstMenuCode=o.functionCode||null,"M"==o.parentCode.charAt(0)?e.firstMenuCode=e.menuitems[o.parentCode]?e.menuitems[o.parentCode].functionCode:null:"M"==e.menuitems[o.parentCode].parentCode.charAt(0)&&(e.firstMenuCode=e.menuitems[e.menuitems[o.parentCode].parentCode].functionCode)),e.oldFirstMenuCode!=e.firstMenuCode&&null!=e.firstMenuCode&&null!=e.oldFirstMenuCode&&($("[name='"+e.oldFirstMenuCode+"']").css("display","none"),$("[name='"+e.oldFirstMenuCode+"']").removeClass("menu-open"),$("[name='"+e.firstMenuCode+"']").css("display","block")),e.oldFirstMenuCode=e.firstMenuCode,c(function(){$.AdminLTE.layout.fix()})}else{for(var a in e.menuitems)if(0==a.indexOf("M")&&e.menuitems[a].parentCode==e.localMenuCode&&!o){if(e.menuitems[a].url){if(e.defaultRoute)d.location.href=e.defaultRoute;else{var l=e.menuitems[a].url.substr(1);r.path(l),o=e.menuitems[a]}return!1}e.menuitems[a].function.forEach(function(e){if(0==e.functionCode.indexOf("S")&&e.url&&!o){var n=e.url.substr(1);return r.path(n),o=e,!1}})}o||f.warning("您并没有访问该功能的权限，请联系系统管理人员",{})}}},g.initMenus=function(o,e){o.userInfo.functionList.forEach(function(e){if(o.baseConfig&&o.baseConfig[e.functionCode]&&(e.name=o.baseConfig[e.functionCode].label,e.label=o.baseConfig[e.functionCode].sublabel),(o.menuitems[e.functionCode]=e).url){var n=decodeURIComponent(e.url);o.menuitems[n]=e}!function r(t){t.searchUrl=t.url?t.url.substring(1)+"/":"",t.function&&t.function.forEach(function(e){if(o.baseConfig&&o.baseConfig[e.functionCode]&&(e.name=o.baseConfig[e.functionCode].label,e.label=o.baseConfig[e.functionCode].sublabel),t.searchUrl=t.searchUrl+(e.url?e.url.substring(1)+"/":""),(o.menuitems[e.functionCode]=e).url){var n=decodeURIComponent(e.url);o.menuitems[n]=e}r(e)})}(e)}),o.menuitems.isloaded=!0,g.rootHandler(o,e)},g.getAddressPoint=function(e,n){e?jQuery.ajax({type:"GET",url:d.location.protocol+"//api.map.baidu.com/geocoder/v2/?address="+e+"&output=json&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx",dataType:"jsonp",jsoncallback:"callBack",success:function(e){0==e.status?n&&n(e.result):n&&n({location:{lat:"",lng:""}})},error:function(e){}}):n&&n(null)},-1!==d.location.hash.indexOf("dailyReport")?g.user.isAuthenticated=!0:g.getCurrentUser(),g}])});
//# sourceMappingURL=../../map/js/services/user-login-ui-service.js.map