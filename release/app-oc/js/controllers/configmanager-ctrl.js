define(["controllers/controllers","bootstrap-dialog"],function(e,u){"use strict";e.initController("ConfigManagerCtrl",["$scope","$http","$controller","configUIService","userLoginUIService","growl","FileUploader",function(t,e,i,s,o,c,n){t.serviceOrigin=s.origin+"/api/rest/uploadConfig/configUIService/uploadConfigFile",i("AppUploadCtrl",{$scope:t,growl:c,FileUploader:n}),t.uploadImage=function(e){0!=t.uploader.queue.length?(t.uploader.formData=[],t.uploader.formData.push({value:t.configGroupsDic[e.groupName].value,id:e.id}),t.uploader.uploadAll()):t.$broadcast("uploadTemplate",{state:!0,response:null})},t.clearUpload=function(){t.uploader.clearQueue()},t.activeListTab="instance",t.menuitems.A05_S23?t.activeListTab="instance":t.menuitems.A04_S23&&(t.activeListTab="group"),t.configTypes=[{label:"默认",value:"string",option:""},{label:"文件",value:"file",option:""}],t.configIns=[],t.configGroupsDic={},t.configGroups=[],t.addConfigGroup=function(){var e={type:"string",name:"",value:"",domainPath:"",id:Number.MAX_VALUE,label:"",isEdit:2};for(var i in t.configGroups)if(0<t.configGroups[i].isEdit)return void c.warning("当前有未保存的配置组，请先完成该操作",{});t.configGroups.push(e),t.$broadcast(Event.CONFIGGROUPINIT,t.configGroups)},t.addConfig=function(){var i=!1;if(t.configIns.forEach(function(e){if(0<e.isEdit)return!(i=!0)}),i)c.warning("当前有未保存的配置项，请先完成该操作",{});else{var e={key:"",value:"",groupName:"",keyDesc:"",invalid:!1,canDelete:!0,domainPath:"",id:Number.MAX_VALUE,label:"",isEdit:3};t.configIns.push(e),t.$broadcast(Event.CONFIGINSINIT,t.configIns)}},t.doAction=function(e,o,n){if("configGroupSave"==e)o.id==Number.MAX_VALUE&&(o.id=0),s.saveConfigGroup(o,function(e){0==e.code&&(t.configGroupsDic[e.data.name]=e.data,t.configGroupsDic[e.data.id]=e.data,n(e.data),c.success("配置组保存成功",{}))});else if("configGroupDelete"==e){if(o.id==Number.MAX_VALUE){for(var i in n(!0),t.configGroups)t.configGroups[i].id==Number.MAX_VALUE&&t.configGroups.splice(i,1);return}u.show({title:"提示",closable:!1,message:"是否要删除配置组:"+escape(o.label),buttons:[{label:"确定",cssClass:"btn-success",action:function(e){s.deleteConfigGroup(o.id,function(e){if(0==e.code){for(var i in t.configGroups)t.configGroups[i].id==o.id&&t.configGroups.splice(i,1);n(!0),c.success("配置组删除成功",{})}}),e.close()}},{label:"取消",action:function(e){n(!1),e.close()}}]})}else if("configSave"==e)if(o.id==Number.MAX_VALUE&&(o.id=0),"file"==t.configGroupsDic[o.groupName].type){var a=t.$on("uploadTemplate",function(e,i){a(),a=null,i.state&&(i.response&&(o.value=i.response.data),r(o,n,!0))});0==o.id?r(o,function(e){t.uploadImage(e)}):t.uploadImage(o)}else r(o,n,!0);else if("configDelete"==e){if(o.id==Number.MAX_VALUE){for(var i in n(!0),t.configIns)t.configIns[i].id==Number.MAX_VALUE&&t.configIns.splice(i,1);return void t.uploader.removeFromQueue(0)}u.show({title:"提示",closable:!1,message:"是否要删除配置项:"+escape(o.label),buttons:[{label:"确定",cssClass:"btn-success",action:function(e){s.deleteConfig(o.id,function(e){if(0==e.code){for(var i in n(!0),t.configIns)t.configIns[i].id==o.id&&t.configIns.splice(i,1);c.success("配置项删除成功",{})}}),e.close()}},{label:"取消",action:function(e){n(!1),e.close()}}]})}};var r=function(i,o,n){s.saveConfig(i,function(e){0==e.code&&(i.id=e.data.id,o&&o(e.data),n&&c.success("配置项保存成功",{}))})},a=function(){$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){if(0<$(e.target).closest("li.disabled").length)return $(e.target).closest("li.disabled").removeClass("active"),void $(e.target).closest("ul").children("[name="+t.activeListTab+"]").addClass("active");var i=$(e.target).closest("li").attr("name");i&&(t.activeListTab=i,t.$apply(),"group"==t.activeListTab?t.$broadcast(Event.CONFIGGROUPINIT,t.configGroups):t.$broadcast(Event.CONFIGINSINIT,t.configIns))})},l=function(){s.getAllConfigGroups(function(e){0==e.code&&(e.data.forEach(function(e){t.configGroupsDic[e.name]=e,t.configGroupsDic[e.id]=e}),t.configGroups=e.data,"group"==t.activeListTab&&t.$broadcast(Event.CONFIGGROUPINIT,t.configGroups),s.getAllConfigs(function(e){0==e.code&&(t.configIns=e.data,t.$broadcast(Event.CONFIGINSINIT,t.configIns))}))})};o.user.isAuthenticated?(a(),l()):t.$on("loginStatusChanged",function(e,i){o.user.isAuthenticated&&(a(),l())})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/configmanager-ctrl.js.map