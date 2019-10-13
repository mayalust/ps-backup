define(["controllers/controllers","bootstrap-dialog"],function(e,l){"use strict";e.controller("userMangerCtrl",["$scope","$location","Info","userLoginUIService","$route","growl","configUIService",function(t,e,i,o,n,a,r){var s;t.treeviewIndex="",t.oldTreeviewIndex="",t.currentMenuCode=null,t.firstMenuCode=null,t.localMenuCode="F01",t.showMenu=!1,t.menuitems={},t.publicTableSearch=function(e,i){t.$broadcast("table-search-handle",{name:e,value:i})},t.$on("$routeChangeSuccess",function(){o.rootHandler(t,e),"detail"==n.current.params.mode?t.detailshow=!0:t.detailshow=!1});t.gotoHomePage=function(){"0"!=o.user.enterprise.logoStatus&&(location.href="http://www.proudsmart.com")},t.gotoAppPage=function(){location.href="index.html"},t.showMenuFun=function(){t.showMenu=!t.showMenu},t.logout=function(){o.logout()},t.onViewLoad=function(){},t.menusFilter=function(e){return"S"===e.functionCode.charAt(0)};function d(){var i;i=function(){o.initMenus(t,e)},r.getConfigsByGroupName("EnterpriseConfig",function(e){0==e.code&&(e.data&&0<e.data.length?e.data.forEach(function(e){try{t.baseConfig?t.baseConfig=jQuery.extend(!0,t.baseConfig,JSON.parse(e.value)):t.baseConfig=JSON.parse(e.value),t.baseConfig&&(t.baseConfig.title?$("title").html(t.baseConfig.title):$("title").html(""),t.baseConfig.shortcut?$("link[rel='shortcut icon']").attr("href","../"+t.baseConfig.shortcut+"?"+(new Date).getTime()):$("link[rel='shortcut icon']").attr("href","../../login/images/shortcut_null.png?"+(new Date).getTime()))}catch(e){}}):($("title").html(""),$("link[rel='shortcut icon']").attr("href","../../login/images/shortcut_null.png?"+(new Date).getTime())),i())})}t.$on("loginStatusChanged",function(e,i){o.user.isAuthenticated?(s&&s.close(),t.userInfo=o.user,t.lastLoginTime=newDateJson(o.user.lastLoginTime).Format(GetDateCategoryStrByLabel()),o.user.enterprise&&(t.enterpriseType=o.user.enterprise.enterpriseType),d()):(t.userInfo={},t.lastLoginTime="",localmodel&&(s=l.show({title:"欢迎来到普奥的世界",closable:!1,message:function(e){var i=$("<div></div>"),t=e.getData("pageToLoad");return i.load(t),i},data:{pageToLoad:"partials/login.html"},buttons:[{label:"登录",cssClass:"btn-success",action:function(e){var i=document.getElementById("username"),t=document.getElementById("password");o.login(i.value,t.value)}},{label:"退出",action:function(e){e.close(),location.href="../index.html"}}]})))})}]),e.controller("forgetCtrl",["$scope","userIdentifyService","Info","userUIService","$interval","growl",function(t,o,e,i,n,a){t.forgetClick="1",t.emailOnly="",t.passwordConfig;var r;e.get("localdb/password.json",function(e){t.passwordConfig=e.passwordConfig});t.forgetList={emailAddress:"",verify:"",verifyEmail:"",newPwd:"",confimPwd:""},t.hideValidate="",t.phoneEmail="",t.verify="",t.statusCheck="",t.verifySuccess="0",t.$watch("forgetList.confimPwd",function(e,i){e!=t.forgetList.newPwd?t.emailOnly=4:t.emailOnly=0}),t.$watch("forgetList.newPwd",function(e,i){t.emailOnly=null==e?333:0}),t.$watch("forgetList.verify",function(e,i){t.emailOnly=0}),t.$watch("forgetList.verifyEmail",function(e,i){t.emailOnly=0}),o.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)}),t.codeCheck=function(){var e=t.forgetList.verify;5==e.length?o.identifyNum(e,function(e){0==e.code&&1==e.data?(t.verify="success",t.emailOnly="0",t.verifySuccess="1"):(t.emailOnly=2,t.verify="error",t.verifySuccess="0",o.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)}))}):(t.emailOnly=2,t.verifySuccess="0",t.verify="error")},t.modeCheck=function(){var e=t.forgetList.emailAddress;e.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)?o.repeatEmail(t.forgetList.emailAddress,function(e){t.statusCheck="email",0==e.code&&0==e.data?t.phoneEmail="":(t.phoneEmail=1001,t.emailOnly=1)}):e.match(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8]))\d{8}$/)?i.checkMobilePhone(t.forgetList.emailAddress,function(e){t.statusCheck="phone",0==e.code&&1==e.data?(t.emailOnly=1,t.phoneEmail=1002):t.phoneEmail=""}):t.phoneEmail=(t.statusCheck=(t.emailOnly=""==e?11:"111",""),"")},t.blindClick=function(){t.imgCode=null,o.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)})},t.t=60,t.$watch("forgetList.emailAddress",function(e,i){t.emailOnly="0"}),t.emailSend=function(){""!=t.forgetList.emailAddress?""!=t.statusCheck?1002!=t.phoneEmail&&1001!=t.phoneEmail?""!=t.forgetList.verify?"error"!=t.verify?"获取验证码"==$("#charge").text()&&($("#charge").attr({disabled:"disabled"}),"phone"==t.statusCheck?o.sendPasswordSMS(t.forgetList.emailAddress,function(e){0==e.code&&1==e.data?(t.time=60,n.cancel(),r=n(function(){t.time--,0==t.time?($("#charge").removeAttr("disabled"),$("#charge").text("获取验证码"),t.time=60,n.cancel(r)):$("#charge").text(t.time+"秒后，重新获取验证码")},1e3)):10008==e.code&&(t.emailOnly="1")}):"email"==t.statusCheck&&o.sendEmailPassword(t.forgetList.emailAddress,function(e){0==e.code&&1==e.data&&(t.time=60,n.cancel(),r=n(function(){t.time--,0==t.time?($("#charge").text("获取验证码"),$("#charge").removeAttr("disabled"),t.time=60,n.cancel(r)):$("#charge").text(t.time+"秒后，重新获取验证码")},1e3))})):t.emailOnly="2":t.emailOnly="200":t.emailOnly="1":t.emailOnly="111":t.emailOnly=11},t.forgetAjax=function(){""!=t.forgetList.newPwd?null!=t.forgetList.newPwd&&(""!=t.forgetList.confimPwd?null!=t.forgetList.confimPwd&&4!=t.emailOnly&&(t.forgetList.newPwd==t.forgetList.confimPwd?o.forgetPassword(t.forgetList.emailAddress,t.hideValidate,t.forgetList.newPwd,function(e){0==e.code&&1==e.data&&(t.forgetClick="4",$("#barvader").css("width","100%"),$(".steps >ol >li:eq(2)").addClass("active"),l())}):t.emailOnly=4):t.emailOnly=312):t.emailOnly=311};var s=5,d=function(){0<--s?($("#sec").text(s),l()):window.location.href="../#/index"},l=function(){setTimeout(d,1e3)};t.forgetStep=function(i){if(2==i){if(""==t.forgetList.emailAddress)return void(t.emailOnly=11);if(""==t.statusCheck)return void(t.emailOnly="111");if(1002==t.phoneEmail||1001==t.phoneEmail)return void(t.emailOnly="1");if(""==t.forgetList.verify)return void(t.emailOnly="200");if("error"==t.verify)return void(t.emailOnly="2");null!=t.forgetList.verifyEmail&&""!=t.forgetList.verifyEmail?"phone"==t.statusCheck?o.identifyPasswordSMS(t.forgetList.verifyEmail,function(e){0==e.code?(t.hideValidate=e.data,$(".steps >ol >li:eq(1)").addClass("active"),$("#barvader").css("width","50%"),t.forgetClick="2"):t.emailOnly=3}):"email"==t.statusCheck&&o.emailCheckPassword(t.forgetList.verifyEmail,function(e){0==e.code?(t.hideValidate=e.data,t.forgetClick=i,$(".steps >ol >li:eq(1)").addClass("active"),$("#barvader").css("width","50%"),t.forgetClick="2"):t.emailOnly=3}):t.emailOnly=30001}else 3==i&&userLoginUIService.emailCheckPassword(t.forgetList.verifyEmail,function(e){0==e.code?(t.hideValidate=e.data,t.forgetClick=i,$(".mod-sub-nav > li").removeClass("list2-active"),$(".mod-sub-nav > li:eq(2)").addClass("list3-active")):t.emailOnly=3})}}]),e.controller("passwordController",["$scope","$rootScope","userLoginUIService","userIdentifyService","growl",function(t,e,o,i,n){t.passwordEdit=o.user,t.pwdList={emailAddress:"",newPwd:"",configPwd:"",regPwd:""},t.imgCode="",t.confirmShow="0",t.codeMessage="",t.emailAddress="",t.identifyName="",t.configError="",t.userId="",t.enterprise={},t.logoImg="",t.websiteUrl="",t.$on("loginStatusChanged",function(e,i){o.user.isAuthenticated&&(t.userId=o.user.userID,t.enterprise=o.user.enterprise,t.enterprise.enterpriseLogo.indexOf("http")<0?t.logoImg="images/logo.svg":t.logoImg=t.enterprise.enterpriseLogo,""==t.enterprise.websiteUrl||null==t.enterprise.websiteUrl?t.websiteUrl="http://www.proudsmart.com/":t.websiteUrl=t.enterprise.websiteUrl,o.user.emailAddress?t.emailAddress=o.user.emailAddress:o.user.mobilePhone&&(t.emailAddress=o.user.mobilePhone))}),i.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)}),t.blindClick=function(){t.imgCode=null,i.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)})},t.$watch("pwdList.regPwd",function(e,i){e!=t.pwdList.newPwd?t.confirmShow=1:t.confirmShow=0}),t.$watch("identifyName",function(e,i){t.confirmShow=0}),t.$watch("pwdList.newPwd",function(e,i){}),t.$watch("pwdList.configPwd",function(e,i){t.confirmShow=0});document.location.href.split("/")[5];t.initPwd=function(){""!=t.emailAddress?""!=t.pwdList.configPwd?""!=t.pwdList.newPwd?""!=t.pwdList.regPwd?""!=t.identifyName?2022!=t.configError&&i.identifyNum(t.identifyName,function(e){0==e.code&&1==e.data?t.pwdList.regPwd==t.pwdList.newPwd?(""!=t.userId&&null!=t.userId||(t.userId=o.user.userID),o.modifyPassword(t.userId,t.pwdList.configPwd,t.pwdList.newPwd,function(e){if(0==e.code&&1==e.data)l.show({title:"提示",message:"修改密码成功,请重新登录",closable:!1,buttons:[{label:"确定",action:function(e){o.logout(),e.close()}}]});else{if(0==e.data)return t.confirmShow="2011",void t.blindClick();t.confirmShow="10010",t.blindClick(),t.codeMessage=e.message}})):t.confirmShow=1:t.confirmShow=3}):t.confirmShow=1017:t.confirmShow=1016:t.confirmShow=1011:t.confirmShow=1010:n.warning("您的账号没有邮箱或者手机号码，不能修改密码",{})},t.tuichu=function(){o.logout(function(e){0==e.code&&(window.location.href="../#/index")})}}]),e.controller("forgetPwdController",["$scope","$rootScope","userLoginUIService","userIdentifyService","growl",function(t,e,i,o,n){t.passwordEdit=i.user,t.pwdList={emailAddress:"",newPwd:"",configPwd:"",regPwd:""},t.imgCode="",t.confirmShow="0",t.codeMessage="",t.emailAddress="",t.identifyName="",t.configError="",t.userId="",i.user.emailAddress?t.emailAddress=i.user.emailAddress:i.user.mobilePhone&&(t.emailAddress=i.user.mobilePhone),o.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)}),t.blindClick=function(){t.imgCode=null,o.getIdentify(function(e){0==e.code&&(t.imgCode=e.data)})},t.$watch("pwdList.regPwd",function(e,i){e!=t.pwdList.newPwd?t.confirmShow=1:t.confirmShow=0}),t.$watch("identifyName",function(e,i){t.confirmShow=0}),t.$watch("pwdList.newPwd",function(e,i){}),t.$watch("pwdList.configPwd",function(e,i){t.confirmShow=0});document.location.href.split("/")[5];t.updatePassWord=function(){""!=t.emailAddress?""!=t.pwdList.configPwd?""!=t.pwdList.newPwd?""!=t.pwdList.regPwd?""!=t.identifyName?2022!=t.configError&&o.identifyNum(t.identifyName,function(e){0==e.code&&1==e.data?t.pwdList.regPwd==t.pwdList.newPwd?(""!=t.userId&&null!=t.userId||(t.userId=i.user.userID),i.modifyPassword(t.userId,t.pwdList.configPwd,t.pwdList.newPwd,function(e){if(0==e.code&&1==e.data)l.show({title:"提示",message:"修改密码成功,请重新登录",closable:!1,buttons:[{label:"确定",action:function(e){i.logout(),e.close()}}]});else{if(0==e.data)return t.confirmShow="2011",void t.blindClick();t.confirmShow="10010",t.blindClick(),t.codeMessage=e.message}})):t.confirmShow=1:t.confirmShow=3}):n.warning("验证码不能为空",{}):n.warning("确认密码不能为空",{}):n.warning("新密码不能为空",{}):n.warning("旧密码不能为空",{}):n.warning("您的账号没有邮箱或者手机号码，不能修改密码",{})},t.tuichu=function(){i.logout(function(e){0==e.code&&(window.location.href="../#/index")})}}]),e.controller("loginController",["$scope","$http","$rootScope","Info","userIdentifyService","$interval",function(t,e,i,o,n,a){t.mobile="",t.codeError="",t.verify="",t.industry="",t.industryList="";o.get("localdb/info.json",function(e){t.provinceList=e.industry});var r,s=window.location.origin;(-1<s.search("localhost")||-1<s.search("127.0.0.1"))&&(s="http://192.168.1.121"),n.querySolution(function(e){0==e.code&&(t.industryList=e.data)}),t.$watch("mobile",function(e,i){t.codeError="0"}),t.$watch("verify",function(e,i){t.codeError="0"}),t.$watch("industry",function(e,i){t.codeError="0"}),t.loginSave=function(){""!=t.mobile||null!=t.mobile||void 0!==t.mobile?""!=t.verify||null!=t.verify||void 0!==t.verify?""!=t.industry||null!=t.industry||void 0!==t.industry?n.identifySMS(t.verify,function(e){0==e.code&&1==e.data?n.weChatLogin(t.mobile,t.industry,function(e){0==e.code&&(window.location.href="../app-oc/index.html#/dashboard")}):t.codeError="2001"}):t.codeError="1005":t.codeError="1004":t.codeError="1003"},t.codeClick=function(){""!=t.mobile||null!=t.mobile||void 0!==t.mobile?"发送验证码"==$("#charge").text()&&($("#charge").attr({disabled:"disabled"}),n.sendSMS(t.mobile,function(e){0==e.code&&1==e.data&&(t.time=60,a.cancel(),r=a(function(){t.time--,0==t.time?($("#charge").removeAttr("disabled"),$("#charge").text("发送验证码"),t.time=60,a.cancel(r)):$("#charge").text(t.time+"秒后，重新获取验证码")},1e3))})):t.codeError="1003"}}]),e.controller("registerCtrl",["$scope","$rootScope","Info","userUIService","modelDefinitionService","userIdentifyService","$interval",function(r,t,e,o,i,n,a){r.regShow="1",r.confirmPassword="",r.confirmShow="false",r.statusShow="1",r.emailOnly="0",r.imgCode="",r.identifyName="",r.safeMsg=!1,r.phoneEmail="1001",r.editData={},r.formData={emailAddress:"",password:"",roleID:"1",mobilePhone:"",userName:"",countryRegion:"中国大陆",address:"",industry:"",city:"北京",province:"北京",business:"",mail_num:""},r.enterpriseManager={name:""},r.show=!1;var s,d=location.href.split("?");e.get("localdb/info.json",function(e){r.areaList=e.areaList,r.provinceList=e.cityList});n.getIdentify(function(e){0==e.code&&(r.imgCode=e.data)}),i.findAllIndustry(function(e){for(var i=e.data,t=e.data,o=[],n=0;n<i.length;n++)for(var a=0;a<t.length;a++)i[n].id==t[a].parentModelId&&o.push(t[a]);r.belongList=o}),r.blindClick=function(){n.getIdentify(function(e){0==e.code&&(r.imgCode=e.data)})},r.$watch("formData.emailAddress",function(e,i){r.emailOnly="0"}),r.$watch("identifyName",function(e,i){r.emailOnly="0"}),r.$watch("formData.industry",function(e,i){r.emailOnly="0"}),r.$watch("formData.password",function(e,i){r.emailOnly="0"}),r.$watch("formData.mobilePhone",function(e,i){r.emailOnly="0"}),r.$watch("formData.userName",function(e,i){r.emailOnly="0"}),r.$watch("confirmPassword",function(e,i){r.emailOnly="0",e!=r.formData.password?r.confirmShow=1:r.confirmShow=0}),r.onMouseOver=function(e,i){r.show=!0},r.renewal=function(){window.location.reload()},r.statusClick=function(e){1==e?r.statusShow=1:2==e&&(r.statusShow=2)},r.noEmail=function(){"重新发送邮件"==$("#emailBtn").text()&&n.sendEmail(r.formData.emailAddress,r.formData.password,function(e){0==e.code&&1==e.data&&(r.time=60,a.cancel(),s=a(function(){r.time--,0==r.time?($("#emailBtn").text("重新发送邮件"),r.time=60,a.cancel(s)):$("#emailBtn").text(r.time+"秒后，重新获取")},1e3)),r.regShow=2})},r.phoneCode=function(){""!=r.formData.emailAddress?""!=r.statusCheck?""!=r.formData.password?null!=r.formData.password&&"发送验证码"==$("#phoneCode").text()&&($("#phoneCode").attr({disabled:"disabled"}),n.sendSMS(r.formData.emailAddress,function(e){0==e.code&&1==e.data?(r.timeCode=60,a.cancel(),s=a(function(){r.timeCode--,0==r.timeCode?($("#phoneCode").text("发送验证码"),$("#phoneCode").removeAttr("disabled"),r.timeCode=60,a.cancel(s)):$("#phoneCode").text(r.timeCode+"秒后，重新获取")},1e3)):10017==e.code&&(r.emailOnly=1,$("#phoneCode").removeAttr("disabled"))})):r.emailOnly="pass10":r.emailOnly="1003":r.emailOnly=11};var l=5,c=function(){0<--l?($("#sec").text(l),f()):window.location.href="index.html"},f=function(){setTimeout(c,1e3)};if(r.phoneSumbit=function(){""!=r.formData.userName?null!=r.formData.userName&&("phone"==r.statusCheck?(r.formData1={password:r.formData.password,mobilePhone:r.formData.emailAddress,userName:r.formData.userName,countryRegion:"中国大陆",address:r.formData.address,city:"北京",business:r.formData.business,province:"北京"},r.editData.name=r.formData.business,r.editData.address=r.formData.address,r.editData.contactPhone=r.formData.emailAddress):(r.formData1={password:r.formData.password,emailAddress:r.formData.emailAddress,userName:r.formData.userName,countryRegion:"中国大陆",address:r.formData.address,city:"北京",business:r.formData.business,province:"北京"},r.editData.name=r.formData.business,r.editData.address=r.formData.address,r.editData.contactEmail=r.formData.emailAddress),o.individualUserRegister(r.editData,r.formData1,function(e){0==e.code?(r.regShow="4","phone"==r.statusCheck&&r.$on("loginStatusChanged",function(e,i){userLoginUIService.user.isAuthenticated?(t.staffName=userLoginUIService.user.userName,r.userInfo=userLoginUIService.user):window.location.href="login.html"}),f(),$("#barvader").css("width","100%"),$(".steps >ol >li:eq(2)").addClass("active")):-3==e.code&&(r.emailOnly="2")})):r.emailOnly="01012"},r.emailHref=function(e){var i=e.split("@")[1].split(".")[0];window.open("http://mail."+i+".com/")},r.passCheck=function(e){var i=""+e.currentTarget.value;""==i?r.emailOnly="pass10":i.match(/^(?![^a-zA-Z]+$)(?!\D+$).{6,20}$/)||(r.emailOnly="pass11")},r.identCheck=function(e){""==""+e.currentTarget.value&&(r.emailOnly="30001")},r.userCheck=function(e){""==""+e.currentTarget.value&&(r.emailOnly="01012")},r.modeCheck=function(){var e=r.formData.emailAddress;e.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)?(r.phoneEmail=1002,r.statusCheck="email"):e.match(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8]))\d{8}$/)?(r.phoneEmail=1001,r.statusCheck="phone"):r.statusCheck=(r.emailOnly=""==e?11:"1003","")},r.checkClick=function(){r.emailOnly="0","checked"==$("#regCheck").attr("checked")?$("#regCheck").attr("checked",!1):$("#regCheck").attr("checked",!0)},r.nextStep=function(i){""!=r.formData.emailAddress?""!=r.formData.password?""!=r.identifyName?2==i&&("checked"==$("#regCheck").attr("checked")?"phone"==r.statusCheck?o.checkMobilePhone(r.formData.emailAddress,function(e){0==e.code&&1==e.data?n.identifySMS(r.identifyName,function(e){0==e.code&&1==e.data?(r.regShow="20000",$("#barvader").css("width","50%"),$(".steps >ol >li:eq(1)").addClass("active")):r.emailOnly=2}):r.emailOnly=1}):"email"==r.statusCheck&&n.repeatEmail(r.formData.emailAddress,function(e){0==e.code&&1==e.data?n.identifyNum(r.identifyName,function(e){0==e.code&&1==e.data?n.sendEmail(r.formData.emailAddress,r.formData.password,function(e){r.regShow=i}):(r.emailOnly=2,n.getIdentify(function(e){0==e.code&&(r.imgCode=e.data)}))}):r.emailOnly=1}):r.emailOnly=2099):r.emailOnly="30001":r.emailOnly="pass10":r.emailOnly=11},null!=d[1]){var m=d[1];n.identifyEmail(m.split("=")[1],function(i){0==i.code?n.repeatEmail(i.data.emailAddress,function(e){0==e.code&&0==e.data?(r.regShow=6,$(".steps").hide()):(r.formData.emailAddress=i.data.emailAddress,r.formData.password=i.data.countryRegion,$(".steps >ol >li:eq(1)").addClass("active"),$("#barvader").css("width","50%"),r.regShow="20000")}):r.regShow=5})}}])});
//# sourceMappingURL=../../../map/app-uc/js/controllers/user-manger-ctrl.js.map
