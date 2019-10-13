define(["controllers/controllers","bootstrap-dialog"],function(e,L){"use strict";e.initController("contractTermsCtrl",["$scope","userEnterpriseService","customerUIService","userDomainService","customerProjectUIService","ngDialog","$location","$routeParams","$timeout","resourceUIService","userLoginUIService","Info","growl",function(r,e,t,o,a,i,s,n,c,d,l,u,f){function m(){r.conItem={customerId:"",projectId:"",label:""},r.selectedDitem.projectLists=[]}r.selecteditem=!0,r.contectLists=[],r.ifTables=!0,r.shy=!0,r.shy1=!1,r.ifAdd=0,r.routePaths=[],r.routePathNodes={},r.queryDitem=null,r.selectedDitem={types:[],label:[],customerList:[],projectLists:[]},r.selected={modelId:"",id:"",deviceId:[]},r.relatedDeviceList=[],r.ifshowTable=!0,r.customor={id:""},r.selTableProject=[],r.selTableProjectId="",r.clearSearchDevices=function(){r.queryDitem={custermerId:r.selected.customerId,domainPath:null,sn:null,modelId:null},r.ifshow=0};var I=function(e){r.$broadcast(Event.CONTECTITEMSINIT,{option:[e]})};r.addcontectitem=function(){for(var e in r.selCustomor="",r.selTableProjectId="",0<jQuery("#contectcollapse").find(".fa.fa-plus").length&&jQuery.AdminLTE.boxWidget.collapse(jQuery("#contectcollapse")),r.contectLists){if(0==r.contectLists[e].id&&2==r.contectLists[e].isEdit)return r.selCustomor={id:""},r.selTableProjectId="",void I(r.contectLists);if(0!=r.contectLists[e].id&&2==r.contectLists[e].isEdit)return void f.warning("已存在正在编辑的合同条款",{})}var t={customerId:"",projectId:"",projectName:"",customerName:"",label:"",takeEffectTime:"",loseEfficacyTime:"",createTime:new Date,id:0,isEdit:2};r.customor.id="",r.selTableProjectId="",r.selTableProject="",r.contectLists.unshift(t),I(r.contectLists)},r.doAction=function(e,t,o){if("cancel"==e){for(var i=r.contectLists.length-1;-1<i;i--)0==r.contectLists[i].id?r.contectLists.splice(i,1):r.contectLists[i].isEdit=0;r.$broadcast(Event.CONTECTITEMSINIT,{option:[r.contectLists]})}else"saveContracts"==e?""!=t&&null!=t&&a.saveContractTerms(t,function(e){if(0==e.code)return o(e.data),void f.success("已成功保存合同条款",{})}):"deleteContract"==e?L.show({title:"提示",closable:!1,message:"确定删除此合同条款吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){a.deleteContractTerms(t.id,function(e){if(0==e.code)return o(e.code),f.success("成功删除此合同条款",{}),void function(e,t){for(var o in e)t?e[o].id==t&&e.splice(o,1):0==e[o].id&&e.splice(o,1)}(r.contectLists,t.id)}),e.close()}},{label:"取消",action:function(e){e.close()}}]}):"showDeviceList"==e&&(r.selProName=t.label,r.ifShowSelectDevice="1010",s=t.id,a.getByContractTermsId(s,function(e){if(0==e.code){var t=e.data;for(var o in r.contactList=e.data,r.selectedContactDevices=[],r.selectedContactObj={},t)r.selectedContactDevices.push(r.facilitySelObj[t[o].deviceId]),r.selectedContactObj[t[o].deviceId]=t[o];var i=[];for(var s in r.facilityList)r.selectedContactObj[r.facilityList[s].id]||i.push(r.facilityList[s]);r.facilitySelList=i,c(function(){r.$broadcast(Event.SELDEVICEINIT,{option:[r.selectedContactDevices]})})}}),r.selected=t,r.selected.id=t.id,r.selected.devicesId="");var s},r.linkProject=function(e){location.href="index.html#/projectManagement///"+e},r.doActionss=function(e,t,o){if("removeDevice"==e){for(var i in r.selectedContactDevices)if(r.selectedContactDevices[i].id==t.id){r.facilitySelList.push(r.selectedContactDevices[i]),r.selectedContactDevices.splice(i,1);break}return f.warning("记得点击保存按钮，要不然不会生效哦！",{}),!0}},r.addDevicesToItem=function(){r.$broadcast(Event.SELDEVICEINIT,{option:[[{modelId:0,label:"",sn:"",isEdit:3}]]}),console.dir(r.selectedContactDevices)},r.selectedContactDevices=[],r.selectedContactObj={},r.contactList=[];r.modelListSelect="";var v=function(){d.getModels(function(e){0==e.code&&(r.modelListSelect=e.data,function(e){if(0==e.code){for(var t in d.rootModelDic={},e.data){var o=e.data[t];r.routePathNodes[o.parentModelId]||(r.routePathNodes[o.parentModelId]=[]),r.routePathNodes[o.parentModelId].push(o),r.routePathNodes[o.id]||(r.routePathNodes[o.id]=[]),d.rootModelDic[o.id]=o}var i=function e(t){for(var o in r.routePathNodes)if(o==t.id){for(var i in t.nodes=r.routePathNodes[o],t.nodes)e(t.nodes[i]);0==t.nodes.length&&(t.nodes=null)}};for(var s in i(d.rootModel),r.routePathNodes)if(s!=d.rootModel.id&&!d.rootModelDic[s])for(var t in r.routePathNodes[s])i(r.routePathNodes[s][t]),d.rootModel.nodes||(d.rootModel.nodes=[]),r.routePathNodes[s][t].parentModelId=d.rootModel.id,d.rootModel.nodes.push(r.routePathNodes[s][t]);if(d.rootModelDic[d.rootModel.id]=d.rootModel,r.rootModelDic=d.rootModelDic,r.rootModel=d.rootModel,n.modelId)if(r.routePathNodes[n.modelId]){!function e(t,o){for(var i in t.nodes){if(n.modelId==t.nodes[i].id){t.id!=o[0].id&&o.push(t);break}e(t.nodes[i],o)}}(d.rootModel,r.routePaths);var c=r.routePaths[r.routePaths.length-1];for(var t in c.nodes)if(n.modelId==c.nodes[t].id){r.treeAry=c.nodes;break}}else r.treeAry=d.rootModel.nodes;else r.treeAry=d.rootModel.nodes}}(e))})};r.devicesContractList=[],r.changeDevices=function(){var e=r.selected.devicesId;for(var t in r.facilitySelList)if(r.facilitySelList[t].id==e){r.selectedContactDevices.push(r.facilitySelList[t]),r.facilitySelList.splice(t,1);break}r.$broadcast(Event.SELDEVICEINIT,{option:[r.selectedContactDevices]}),f.warning("记得点击保存按钮，要不然不会生效哦！",{})};var p=function(){var e=r.contactList,t=r.selectedContactDevices,o=[];for(var i in e){var s=-1;for(var c in t)if(e[i].deviceId!=t[c].id&&r.selectedContactObj[t[c].id]){s=c;break}-1!=s&&o.push(e[i])}if(console.dir(o),r.selectedContactDevices.length<=0&&0<e.length&&(o=e),0<o.length)for(var n in o)a.deleteContractTermsToDevice(o[n].id,function(e){e.code})};r.saveselDevices=function(){r.selDevices=[];var e=r.selectedContactDevices;for(var t in e)null==r.selectedContactObj[e[t].id]&&r.selDevices.push(e[t].id);var o;o=[r.selected.id,r.selDevices],0<r.selDevices.length?a.saveContractTermsToDevice(o,function(e){0==e.code&&(f.success("添加设备到合同条款成功",{}),p())}):p()},r.facilityList=[],r.facilitySelList=[],r.facilitySelObj={},r.searchDevices=function(){r.facilitySelObj={},d.getDevicesByCondition({},function(e){if(0==e.code)for(var t in r.facilityList=e.data,e.data)r.facilitySelObj[e.data[t].id]=e.data[t]})},t.findCustomersByCondition({},function(e){if(0==e.code){var t=[];r.customersObj={},e.data.forEach(function(e){(r.customersObj[e.id]=e).text=e.customerName,e.id=e.id,t.push(e)}),r.CustomerList=t,r.selectedDitem.customerList=e.data}}),r.projectObj={},r.getselectedProject=function(e){r.selectedDitem.projectLists=[];var t=[];if(e){for(var o in r.projectLists){var i=r.projectLists[o];i.customerId==e&&t.push(i)}if(!r.conItem.customerId)return t;r.selectedDitem.projectLists=t}},r.alertFunCustom=function(){var e="",t=r.customor.id;for(var o in r.selTableProject=r.getselectedProject(t),r.CustomerList)r.CustomerList[o].customerID==t&&(e=r.CustomerList[o].customerName);for(var i in r.contectLists)if(2==r.contectLists[i].isEdit){r.contectLists[i].customerName=e,r.contectLists[i].customerId=parseInt(t);break}},r.alertFunProId=function(e){var t="";for(var o in r.selTableProject)r.selTableProject[o].id==e&&(t=r.selTableProject[o].label);for(var i in r.contectLists)if(2==r.contectLists[i].isEdit){r.contectLists[i].projectName=t,r.contectLists[i].projectId=e;break}},r.cancelData=function(){n.customerId||n.deviceId||n.contractId||m()},r.getChange=function(){1==r.queryState?(r.conItem.projectId="",r.conItem.label=""):2==r.queryState?(r.conItem.customerId="",r.conItem.label=""):3==r.queryState&&(r.conItem.projectId="",r.conItem.customerId="")},r.searchData=function(){r.ifshowTable=!0;var e={customerId:n.customerId?n.customerId:r.conItem.customerId,label:r.conItem.label?r.conItem.label:"",deviceId:n.deviceId?n.deviceId:r.conItem.deviceId,projectId:n.contractId?n.contractId:r.conItem.projectId,size:5e3};a.findContractTerms(e,function(e){if(0==e.code){for(var t in 0<jQuery("#contectcollapse").find(".fa.fa-plus").length&&jQuery.AdminLTE.boxWidget.collapse(jQuery("#contectcollapse")),e.data)e.data[t].isEdit=0;r.contectLists=e.data,c(function(){r.$broadcast(Event.CONTECTITEMSINIT,{option:[e.data]})})}})};var g=function(){m(),a.getAllProjects(function(e){0==e.code&&(r.projectLists=e.data,e.data.forEach(function(e){r.projectObj[e.id]=e}))}),o.queryDomainTree(l.user.userID,function(e){r.domainListTree=e.domainListTree,r.domainListDic=e.domainListDic}),r.clearSearchDevices(),d.getRootModel(function(e){0==e.code&&(d.rootModel=e.data,r.routePaths.push(e.data),v())}),r.searchDevices(),n.customerId||n.deviceId||n.contractId?(r.ifAdd=2010,r.searchData()):(r.ifAdd=0,r.searchData(),c(function(){r.$broadcast(Event.CONTECTITEMSINIT,{option:[]})}))};l.user.isAuthenticated?g():r.$on("loginStatusChanged",function(e,t){l.user.isAuthenticated&&g()})}]),e.initController("projectManagementCtrl",["$scope","resourceUIService","customerProjectUIService","distributorUIService","userDomainService","projectUIService","ngDialog","$location","$routeParams","$timeout","customerUIService","userLoginUIService","Info","growl",function(s,i,e,t,o,c,n,r,a,d,l,u,f,m){function I(){s.projectInfo={id:0,province:"",city:"",county:"",values:{},projectAddress:"",customerId:"",installDate:"",domainPath:null,debugFinishDate:"",distributorId:"",projectName:"",qualityCloseDate:"",risingTime:new Date},s.selEditInfo={domainPath:"",customerId:"",distributorId:""}}s.provinces=s.$parent.provinces,s.cityDics=s.$parent.cityDics,s.districtDics=s.$parent.districtDics,s.projectItem={orCondition:"",id:"",customerId:0,domainPath:"",distributorId:0,projectName:""},s.show={customer:!0,distributor:!0},a.customerId||a.distributorId||a.projectId?s.ifShowSelect=!1:s.ifShowSelect=!0,a.customerId?(s.show.customer=!1,s.show.distributor=!0,s.projectItem.customerId=parseInt(a.customerId),s.queryLabel="客户名称",s.queryState=2):a.distributorId&&(s.show.distributor=!1,s.show.customer=!0,s.projectItem.distributorId=parseInt(a.distributorId),s.queryLabel="经销商名称",s.queryState=3),s.selectedProject=!0,s.projectLists=[],s.ifshowTable=!1,s.selCustomer="",s.customerDic={},s.distributorDic={};var v=0;s.closeDialog=function(){n.close()},s.cancelData=function(){a.customerId||a.deviceId||a.projectId||I()},s.closeTable=function(){s.ifShowSelectDevice=0},s.provinceClick=function(e){s.projectInfo.county="",s.cityDics[e]&&(s.cityList=s.cityDics[e])},s.cityClick=function(e){s.districtDics[e]&&(s.districtList=s.districtDics[e])};var p=function(e){s.$broadcast(Event.PROJECTMANAGEINIT,{option:[e,s.extendTableColumns]})};s.addproject=function(){s.provinces=s.$parent.provinces,s.cityDics=s.$parent.cityDics,s.districtDics=s.$parent.districtDics,I(),n.open({template:"../partials/dialogue/project_management_dia.html",className:"ngdialog-theme-plain",scope:s})},s.saveData=function(){var e=s.projectInfo;e.qualityCloseDate=new Date(e.qualityCloseDate),e.debugFinishDate=new Date(e.debugFinishDate),e.installDate=new Date(e.installDate),e.values.standardAddress=e.county?e.county:e.city?e.city:e.province,e.debugFinishDate<e.installDate?m.warning("调试完成时间需大于项目安装时间",{}):e.qualityCloseDate<e.installDate?m.warning("质保截止时间需大于项目安装时间",{}):e.qualityCloseDate<e.debugFinishDate?m.warning("质保截止时间需大于调试完成时间",{}):null!=e.projectAddress?0<e.id?j(e,function(i){c.updateProject(i,function(e){if(0==e.code){m.success("项目信息修改完成",{});var t=s.projectLists;for(var o in t)if(t[o].id==i.id){$.extend(t[o],i);break}d(function(){p(s.projectLists)}),n.close()}})}):0==e.id&&j(e,function(e){c.addProject(e,function(e){0==e.code&&(m.success("项目信息创建成功",{}),s.projectLists.push(e.data),d(function(){p(s.projectLists)}),n.close())})}):m.warning("详细地址输入格式不正确，请重新输入",{})},s.doAction=function(e,t,o){if("cancel"==e){for(var i=s.projectLists.length-1;-1<i;i--)0==s.projectLists[i].id&&s.projectLists.splice(i,1);p(s.projectLists)}else"saveProject"==e?""!=t&&null!=t&&c.updateProject(t,function(e){o(e),0==e.code&&m.success("项目信息修改完成",{})}):"deleteProject"==e?L.show({title:"提示",closable:!1,message:"确认删除该项目记录？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){c.deleteProjectById(t.id,function(e){if(0==e.code)return o(e.code),m.success("项目信息已删除",{}),void function(e,t){for(var o in e)t?e[o].id==t&&e.splice(o,1):0==e[o].id&&e.splice(o,1)}(s.projectLists,t.id)}),e.close()}},{label:"取消",action:function(e){e.close()}}]}):"deviceProject"==e&&(s.ifShowSelectDevice=1001,s.selProName=t.label)},s.modelListSelect=[];s.alertFun=function(e){if(s.projectInfo.debugFinishDate){var t=new Date(s.projectInfo.debugFinishDate),o=t.setFullYear(t.getFullYear()+1),i=new Date(o).Format("yyyy-MM-dd");s.projectInfo.qualityCloseDate=i}},s.getChange=function(){s.projectItem.orCondition=s.queryState?null:s.projectItem.orCondition,s.projectItem.projectName=1==s.queryState?s.projectItem.projectName:null,s.projectItem.customerId=2==s.queryState?s.projectItem.customerId:null,s.projectItem.distributorId=3==s.queryState?s.projectItem.distributorId:null,s.projectItem.domainPath=4==s.queryState?s.projectItem.domainPath:null},s.searchData=function(){var e={orCondition:s.projectItem.orCondition,customerId:s.projectItem.customerId?s.projectItem.customerId:a.customerId,domainPath:s.projectItem.domainPath,distributorId:s.projectItem.distributorId?s.projectItem.distributorId:a.distributorId,id:parseInt(a.projectId)?parseInt(a.projectId):s.projectItem.id,projectName:s.projectItem.projectName};c.findProjectsByCondition(e,function(e){0==e.code&&(s.projectLists=e.data,d(function(){p(s.projectLists)}))})};s.extendTableColumns=[];var g=function(){I(),t.findDistributorsByCondition({},function(e){if(0==e.code){var t=[];e.data.forEach(function(e){(s.distributorDic[e.id]=e).text=e.distributorName,e.id=e.id,t.push(e)}),s.distributorList=t.concat({text:"无",id:-1})}}),i.getModels(function(e){0==e.code&&(s.modelListSelect=e.data)}),l.findCustomersByCondition({},function(e){if(0==e.code){v++;var t=[];e.data.forEach(function(e){e.text=e.customerName,e.id=e.id,t.push(e)}),s.CustomerList=t,s.customerDic=e.customerDic,3==v&&s.searchData()}}),o.queryDomainTree(u.user.userID,function(e){v++,s.domainListTree=e.domainListTree,s.domainListDic=e.domainListDic,3==v&&s.searchData()}),function(){if(s.menuitems.isloaded)s.baseConfig&&s.baseConfig.projectConfig&&s.baseConfig.projectConfig.extendModelGroupId?i.getAttrsByModelId(s.baseConfig.projectConfig.extendModelGroupId,function(e){0==e.code&&(s.extendTableColumns=e.data),3==++v&&s.searchData()}):3==++v&&s.searchData();else var o=s.$watch("menuitems",function(e,t){s.menuitems.isloaded&&(s.baseConfig&&s.baseConfig.projectConfig&&s.baseConfig.projectConfig.extendModelGroupId?i.getAttrsByModelId(s.baseConfig.projectConfig.extendModelGroupId,function(e){0==e.code&&(s.extendTableColumns=e.data),3==++v&&s.searchData()}):3==++v&&s.searchData(),o())},!0)}()},j=function(t,o){t.values.latitude="",t.values.longitude="",u.getAddressPoint(t.values.standardAddress.split(",").join("")+t.projectAddress,function(e){t.values.latitude=e.location.lat.toFixed(6),t.values.longitude=e.location.lng.toFixed(6),o&&o(t)})};u.user.isAuthenticated?g():s.$on("loginStatusChanged",function(e,t){u.user.isAuthenticated&&g()})}]),e.initController("faultKnowledgeCtrl",["$scope","faultKnowledgeUIService","ngDialog","$location","$routeParams","$timeout","userEnterpriseService","userLoginUIService","Info","growl",function(s,c,e,t,o,i,n,r,a,d){s.selecteditem=!0,s.faultKnowledgeLists=[],s.ifRouteParams=0,s.severiesList=[{severNo:1,severName:"警告"},{severNo:2,severName:"次要"},{severNo:3,severName:"重要"},{severNo:4,severName:"严重"}],s.selSeverity="",s.alertFun=function(e){for(var t in s.faultKnowledgeLists)2==s.faultKnowledgeLists[t].isEdit&&(s.faultKnowledgeLists[t].severity=e)};var l=function(e){s.$broadcast(Event.FAULTKNOWLEDGEINIT,{option:[e]})};function u(e){e?c.getByFaultNo(e,function(e){0==e.code&&(s.faultKnowledgeLists=[],isArray(e.data)?s.faultKnowledgeLists=e.data:s.faultKnowledgeLists.push(e.data),s.$broadcast(Event.FAULTKNOWLEDGEINIT,{option:[s.faultKnowledgeLists]}))}):c.getAllFaultKnowledges(function(e){if(0==e.code){for(var t in s.faultKnowledgeLists=[],e.data){var o=e.data[t];o.isEdit=0,s.faultKnowledgeLists.push(o)}s.$broadcast(Event.FAULTKNOWLEDGEINIT,{option:[s.faultKnowledgeLists]})}})}s.addFaultKnowledge=function(){for(var e in s.selSeverity="",s.faultKnowledgeLists){if(0==s.faultKnowledgeLists[e].id&&2==s.faultKnowledgeLists[e].isEdit)return void l(s.faultKnowledgeLists);if(0!=s.faultKnowledgeLists[e].id&&2==s.faultKnowledgeLists[e].isEdit)return void d.warning("目前已存在正在编辑的故障知识",{})}s.faultKnowledgeLists.push({faultNo:"",category:"",label:"",desc:"",phenomenon:"",cause:"",processingMethod:"",severity:0,id:0,isEdit:2}),l(s.faultKnowledgeLists)},s.doAction=function(e,t,o){if("savefaultKnowledge"==e)""!=t&&null!=t&&c.saveFaultKnowledge(t,function(e){0==e.code&&(o(e.data),d.success("已成功保存故障知识",{}))});else if("deletefaultKnowledge"==e)L.show({title:"提示",closable:!1,message:"确定删除此故障知识吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){c.deleteFaultKnowledge(t.id,function(e){0==e.code&&(o(e.code),d.success("成功删除此故障知识",{}),function(e,t){for(var o in e)t?e[o].id==t&&e.splice(o,1):0==e[o].id&&e.splice(o,1)}(s.faultKnowledgeLists,t.id))}),e.close()}},{label:"取消",action:function(e){e.close()}}]});else if("cancel"==e){for(var i=s.faultKnowledgeLists.length-1;-1<i;i--)0==s.faultKnowledgeLists[i].id?s.faultKnowledgeLists.splice(i,1):s.faultKnowledgeLists[i].isEdit=0;s.$broadcast(Event.FAULTKNOWLEDGEINIT,{option:[s.faultKnowledgeLists]})}},o.faultNo?(s.ifRouteParams=2011,u(o.faultNo)):u()}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/project-ctrl.js.map
