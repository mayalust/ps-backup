define(["controllers/controllers","bootstrap-dialog","bootstrap-multiselect"],function(e,D,t){"use strict";e.initController("maintenanceCtrl",["$scope","$q","ngDialog","$location","$routeParams","$timeout","maintenanceTaskUIService","customerUIService","projectUIService","kpiDataService","resourceUIService","growl","userLoginUIService","ticketCategoryService","userEnterpriseService","Info","$route",function(u,t,s,e,i,a,d,o,c,n,r,l,f,p,v,L,m){u.queryDitem={},u.objMain={},u.isLoading=!1;for(var k=i.id,h=[],g=[],y=0;y<5;y++)g.push(t.defer());u.cycleChang=function(){"disposable"==u.objMain.executionCycle?u.objMain.cycleNum=1:u.objMain.cycleNum=""};u.processTypeDic={};u.selectTaskList=[],u.selectStatusList={startList:[],disableList:[]},u.selectedHandler=function(){var t=[];u.selectStatusList.startList=[],u.selectStatusList.disableList=[],u.taskList.forEach(function(e){e.selected&&(t.push(e),0==e.taskStatus?u.selectStatusList.startList.push(e):1==e.taskStatus&&u.selectStatusList.disableList.push(e))}),u.selectTaskList=t,u.$apply()},u.customersList,u.customersDic={};u.projectsList,u.projectsDic={};u.devicesList,u.devicesListDic={};u.enterpriseList,u.enterpriseListDic={};u.addMain=function(e){if(0<e.id){var t="";0==e.operationStatus?t+="未到期":1==e.operationStatus?t+="待分配":2==e.operationStatus?t+="已分配":3==e.operationStatus?t+="待执行":4==e.operationStatus&&(t+="已完成"),e.operationName=t,u.objMain=jQuery.extend(!0,{},e)}else u.objMain={id:0,name:"",customerId:null,projectId:null,deviceId:null,executionCycle:"",remindDays:"",firstExecutionTime:"",executioner:"",ticketCategoryId:""};s.open({template:"../partials/dialogue/add_maintenance.html",scope:u,className:"ngdialog-theme-plain"})};var S=function(e){d.getTaskByCondition(e,function(e){0==e.code&&(u.taskList=e.data,u.$broadcast("MAINTENANCE",{data:u.taskList}))})};u.doAction=function(e,s,i){if("save"==e){if(!u.objMain.customerId&&u.baseConfig.customerConfig.display&&u.baseConfig.customerConfig.check)return void l.warning("请选择客户",{});if(!u.objMain.projectId&&u.baseConfig.projectConfig.display&&u.baseConfig.projectConfig.check){var t=u.menuitems.S13.label?u.menuitems.S13.label:"项目";return void l.warning("请选择"+t,{})}if(0<u.objMain.id){var a=new Date(u.objMain.nextExecutionTime).Format("yyyy-MM-dd hh:mm:ss"),o=(new Date).Format("yyyy-MM-dd hh:mm:ss");if(0==(n=a,r=o,new Date(Date.parse(r.replace("-","/")))<new Date(Date.parse(n.replace("-","/")))))return void l.warning("您选择的时间小于当前时间",{});for(var c in u.taskList)if(0!=u.taskList[c].id&&u.objMain.id!=u.taskList[c].id&&u.objMain.name==u.taskList[c].name)return void l.warning("计划名称不能重复",{});u.isLoading=!0,d.updateMaintenanceTask(u.objMain,function(e){if(u.isLoading=!1,0==e.code){for(var t in l.success("保存成功",{}),u.taskList)if(u.taskList[t].id==u.objMain.id){u.taskList[t]=e.data;break}u.$broadcast("MAINTENANCE",{data:u.taskList}),u.closeDialog()}})}else{a=new Date(u.objMain.firstExecutionTime).Format("yyyy-MM-dd");if(0==checkDate(a))return void l.warning("您选择的时间小于当前时间",{});for(var c in u.taskList)if(0!=u.taskList[c].id&&u.objMain.name==u.taskList[c].name)return void l.warning("计划名称不能重复",{});u.isLoading=!0,d.addMaintenanceTask(u.objMain,function(e){u.isLoading=!1,0==e.code&&(l.success("保存成功",{}),u.taskList.push(e.data),u.$broadcast("MAINTENANCE",{data:u.taskList}),u.closeDialog())})}}else"delete"==e?D.show({title:"提示",closable:!1,message:"确认要删除维保计划吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){d.deleteTask(s.id,function(e){if(0==e.code)for(var t in l.success("删除成功",{}),i(!0),u.taskList)u.taskList[t].id==s.id&&u.taskList.splice(t,1)}),e.close()}},{label:"取消",action:function(e){e.close()}}]}):"delete2"==e&&d.deleteMaintenanceTask([s],function(e){if(0==e.code){for(var t=e.data.successObj,s=0;s<u.taskList.length;s++)for(var i=0;i<t.length;i++)if(u.taskList[s].id==t[i]){u.taskList.splice(s,1),s--;break}u.$broadcast("MAINTENANCE",{data:u.taskList}),l.success("成功确认"+e.data.successObj.length+"个,失败"+e.data.failObj.length+"个",{})}else l.success("成功确认"+e.data.successObj.length+"个,失败"+e.data.failObj.length+"个",{})});var n,r},u.modifyStatus=function(s){var t=[];for(var e in u.selectTaskList)u.selectTaskList[e].taskStatus!=s&&t.push(u.selectTaskList[e].id);var i="";0==s?i+="启用":1==s&&(i+="停用"),0<t.length?D.show({title:"提示",closable:!1,message:"确认"+i+"这"+t.length+"个计划吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){d.modifyStatus([t,s],function(e){if(0==e.code){for(var t in u.taskList)e.data.successObj.forEach(function(e){if(u.taskList[t].id==e)return u.taskList[t].taskStatus=s,!0}),u.taskList[t].selected=!1;u.selectTaskList=[],u.selectStatusList.disableList=[],u.selectStatusList.startList=[],u.$broadcast("MAINTENANCE",{data:u.taskList}),l.success(i+"成功"+e.data.successObj.length+"个计划,失败"+e.data.failObj.length+"个计划",{})}}),e.close()}},{label:"取消",action:function(e){e.close()}}]}):l.warning("没有要"+i+"的维保计划",{})},u.goSearch=function(e){var t={};0<u.queryDitem.state?t[u.queryDitem.attributeName]=u.loaderValue:("s"==e&&(t.name=u.loaderValue),k&&null==u.queryDitem.state&&(t.id=k)),S(t)},u.statusSave=function(t,s,i){var e="";0==s?e+="启用":1==s&&(e+="停用"),D.show({title:"提示",closable:!1,message:"确认"+e+"这个计划吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){d.modifyStatus([t,s],function(e){if(0==e.code){for(var t in u.taskList)e.data.successObj.forEach(function(e){if(u.taskList[t].id==e)return u.taskList[t].taskStatus=s,!0});i(!0),l.success("操作成功",{})}}),e.close()}},{label:"取消",action:function(e){e.close()}}]})};var b=function(){for(var e in o.findCustomersByCondition({},function(e){u.customersDic=e.customerDic,e.data.forEach(function(e){e.text=e.customerName}),u.customersList=e.data,g[1].resolve("success")}),p.getTicketCategorys(function(e){if(0==e.code){var t=[];for(var s in e.data)40==e.data[s].category&&t.push(e.data[s]);t.forEach(function(e){(u.processTypeDic[e.id]=e).text=e.name}),u.processType=t,g[0].resolve("success")}}),c.findProjectsByCondition({},function(e){0==e.code&&(e.data.forEach(function(e){(u.projectsDic[e.id]=e).text=e.projectName}),u.projectsList=e.data,g[2].resolve("success"))}),v.queryEnterpriseUser(function(e){if(0==e.code){var t=[];e.data.forEach(function(e){(u.enterpriseListDic[e.userID]=e).text=e.userName,0==e.status&&t.push(e)}),u.enterpriseList=t,g[4].resolve("success")}}),r.getDevicesByCondition({},function(e){0==e.code&&(e.data.forEach(function(e){(u.devicesListDic[e.id]=e).text=e.label}),u.devicesList=e.data,g[3].resolve("success"))}),g)h.push(g[e].promise);t.all(h).then(function(e){u.goSearch()})};f.user.isAuthenticated?b():u.$on("loginStatusChanged",function(e,t){f.user.isAuthenticated&&b()})}]),e.initController("maintenanceCalendarCtrl",["$scope","$q","ngDialog","$location","$routeParams","$timeout","maintenanceTaskUIService","customerUIService","projectUIService","kpiDataService","resourceUIService","growl","userLoginUIService","ticketCategoryService","userEnterpriseService","Info","$route",function(s,e,t,i,a,o,c,n,r,u,d,l,f,p,v,L,m){s.executioner="";var k=a.id,h=a.person;s.taskList=[],s.selectList=[],s.enterpriseList,s.enterpriseListDic={};var g=function(){v.queryEnterpriseUser(function(e){if(0==e.code){var t=[];e.data.forEach(function(e){(s.enterpriseListDic[e.userID]=e).text=e.userName,0==e.status&&t.push(e)}),s.enterpriseList=t,0<h?(s.executioner=parseInt(h),y({nextExecutioner:s.executioner},"execut")):y({id:k},"init")}})};s.serarchObj={nextExecutioner:"",nextExecutionTime:""},s.update=function(e,t){c.updateMaintenanceTask(e,function(e){0==e.code&&(s.taskList=e.data,t(!0))})},s.changeUser=function(){var e={nextExecutioner:s.executioner};s.executioner?c.getTaskByCondition(e,function(e){0==e.code&&(s.taskList=e.data)}):s.taskList=[]};var y=function(e,t){c.getTaskByCondition(e,function(e){0==e.code&&("init"==t?(s.selectList=e.data,s.taskList=e.data):"execut"==t?(s.taskList=e.data,e.data.forEach(function(e){e.nextExecutioner==s.executioner&&(s.selectList=[e])})):s.taskList=e.data)})};f.user.isAuthenticated?g():s.$on("loginStatusChanged",function(e,t){f.user.isAuthenticated&&g()})}]),e.initController("recordConditionCtrl",["$scope","$q","ngDialog","$location","$routeParams","$timeout","maintenanceTaskUIService","customerUIService","projectUIService","kpiDataService","resourceUIService","growl","userUIService","userLoginUIService","ticketCategoryService","userEnterpriseService","ticketTaskService","$route",function(o,t,e,s,i,a,c,n,r,u,d,l,f,p,v,L,m,k){var h=[],g=[],y=i.id;o.templateAddress="",o.urlService=f.uploadFileUrl,o.detail={taskStatus:0},o.querySearch={modelId:"",type:"",deviceName:"",serverType:""},o.routePathNodes={};for(var S=0;S<4;S++)g.push(t.defer());o.modelListSelect,o.modelList=function(){d.getModels(function(e){if(0==e.code){o.modelListSelect=e.data,d.rootModelDic={};var t=e.data;for(var s in t){var i=t[s];i.text=i.label,o.routePathNodes[i.parentModelId]||(o.routePathNodes[i.parentModelId]=[]),o.routePathNodes[i.parentModelId].push(i),o.routePathNodes[i.id]||(o.routePathNodes[i.id]=[]);var a=jQuery.extend(!0,{},i);d.rootModelDic[a.id]=a}o.rootModel=d.rootModel,o.rootModelDic=d.rootModelDic,g[0].resolve("success")}})},o.devicesList,o.devicesListDic={};o.saveCondition=function(){c.saveMaintenanceRecord(o.recordList,function(e){0==e.code&&l.success("保存成功",{})})};var b=function(e){c.getRecordByCondition(e,function(e){if(0==e.code)if(y){if(o.recordList=e.data[0],o.recordList.templateURL){var t=o.recordList.templateURL.split("/");o.templateAddress=t[t.length-1]}"spare"==o.templateAddress&&(s=e.data[0].ticketTaskId)&&null!=s&&m.getTicketTaskById(s,function(e){0==e.code&&(o.detail.taskStatus=e.data.taskStatus,o.sparePartsInitList=e.data.values.stockOrderItemList,o.$broadcast(Event.WORKORDERRECORDINIT+"_deviceTask",{data:o.sparePartsInitList}))})}else o.recordList=e.data,o.$broadcast("RECORD",{data:o.recordList});var s})};o.enterpriseList,o.enterpriseListDic={};o.processTypeDic={};o.goSearch=function(){var e={};o.querySearch.modelId&&(e.modelId=o.querySearch.modelId),o.querySearch.type&&(e.type=o.querySearch.type),o.querySearch.deviceName&&(e.deviceName=o.querySearch.deviceName),o.querySearch.serviceType&&(e.serverType=o.querySearch.serviceType),b(e)},o.goClear=function(){o.querySearch={modelId:"",type:"",deviceName:"",serviceType:""}};var D=function(){for(var e in o.modelList(),v.getTicketCategorys(function(e){if(0==e.code){var t=[];for(var s in e.data)40==e.data[s].category&&t.push(e.data[s]);t.forEach(function(e){(o.processTypeDic[e.id]=e).text=e.name}),o.processType=t,g[1].resolve("success")}}),d.getDevicesByCondition({},function(e){0==e.code&&(e.data.forEach(function(e){(o.devicesListDic[e.id]=e).text=e.label}),o.devicesList=e.data,g[2].resolve("success"))}),L.queryEnterpriseUser(function(e){if(0==e.code){var t=[];e.data.forEach(function(e){(o.enterpriseListDic[e.userID]=e).text=e.userName,0==t.status&&t.push(e)}),o.enterpriseList=t,g[3].resolve("success")}}),g)h.push(g[e].promise);t.all(h).then(function(e){b(y?{id:y}:{})})};p.user.isAuthenticated?D():o.$on("loginStatusChanged",function(e,t){p.user.isAuthenticated&&D()})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/maintenance-ctrl.js.map
