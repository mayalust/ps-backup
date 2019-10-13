function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["../services/services.js"],function(e){"use strict";e.factory("resourceUIService",["serviceProxy","$q",function(d,t){var i=e(),n=e(),o=e(),c=e(),a=e(),l=(e(),{code:0,nodesDic:{},kpisDic:{},activeListTab:""}),s="resourceUIService";function e(){var e=t.defer();return{resolve:e.resolve,promise:e.promise}}return l.domainsLoader=function(e){if("object"!==_typeof(e))return c.promise;c.resolve(e)},l.deviceObjLoader=function(e){if("object"!==_typeof(e))return a.promise;a.resolve(e)},l.unitLoader=function(e){if("object"!==_typeof(e))return o.promise;o.resolve(e)},l.deviceLoader=function(e){if("object"!==_typeof(e))return i.promise;i.resolve(e)},l.modelLoader=function(e){if("object"!==_typeof(e))return n.promise;n.resolve(e)},l.incloseDeviceLoader=function(e){if("object"!==_typeof(e))return n.promise;n.resolve(e)},l.getRootModel=function(e){d.get(s,"getRootModel",[],e)},l.importPhysicalConfig=function(e,t,i,n){d.get(s,"importPhysicalConfig",{config:e,file:t,resourceId:i},n)},l.getEnterpriseAccessAccounts=function(e){d.get(s,"getEnterpriseAccessAccounts",[],e)},l.getDeviceInfo=function(e,t){d.get(s,"getDeviceInfo",e,t)},l.deleteEnterpriseAccessAccount=function(e,t){d.get(s,"deleteEnterpriseAccessAccount",e,t)},l.deleteDeviceFile=function(e,t){d.get(s,"deleteDeviceFile",e,t)},l.getKpiTypeByFilter=function(e,t){d.get(s,"getKpiTypeByFilter",e,t)},l.getUploadDeviceFileList=function(e,t){d.get(s,"getUploadDeviceFileList",[e],t)},l.findUnRecognizedDevice=function(e,t){d.get(s,"findUnRecognizedDevice",e,t)},l.deleteUnRecognizedDevice=function(e,t){d.get(s,"deleteUnRecognizedDevice",e,t)},l.countDevicesByGatewayIds=function(e,t){d.get(s,"countDevicesByGatewayIds",e,t)},l.addUnComfirmedDevice=function(e,t){d.get(s,"addUnComfirmedDevice",e,t)},l.editUnComfirmedDevice=function(e,t){d.get(s,"editUnComfirmedDevice",e,t)},l.addEnterpriseAccessAccount=function(e,t){d.get(s,"addEnterpriseAccessAccount",e,t)},l.updateEnterpriseAccessAccount=function(e,t){d.get(s,"updateEnterpriseAccessAccount",e,t)},l.getRootDomain=function(e){d.get(s,"getRootDomain",[],e)},l.getModels=function(e){d.get(s,"getModels",[],e)},l.getModelByIds=function(e,t){d.get(s,"getModelByIds",[e],t)},l.getResourceByModelId=function(e,t){d.get(s,"getResourceByModelId",[e],t)},l.getModelConfigById=function(e,t){d.get(s,"getModelConfigById",[e],t)},l.getModelConfigByModelId=function(e,t){d.get(s,"getModelConfigByModelId",[e],t)},l.getDataItemsByModelId=function(e,t){d.get(s,"getDataItemsByModelId",[e],t)},l.getAllResolutionProtocol=function(e,t){d.get(s,"getAllResolutionProtocol",[e],t)},l.copyModelDefinition=function(e,t){d.get(s,"copyModelDefinition",[e],t)},l.deleteModelConfig=function(e,t){d.get(s,"deleteModelConfig",[e],t)},l.saveModelConfig=function(e,t){d.get(s,"saveModelConfig",e,t)},l.getModelsByCondition=function(e,t){d.get(s,"getModelsByCondition",[e],t)},l.getDeviceModel=function(e,t){d.get(s,"getDeviceModel",[e],t)},l.getDeviceGroups=function(e){d.get(s,"getDeviceGroups",[],e)},l.getManagedDevicesByModelId=function(e,t){d.get(s,"getManagedDevicesByModelId",e,t)},l.getKpiDefinitionsByDirectiveId=function(e,t){d.get(s,"getKpiDefinitionsByDirectiveId",e,t)},l.getKpiDefinitionsByCollectionTaskId=function(e,t){d.get(s,"getKpiDefinitionsByCollectionTaskId",e,t)},l.getSparePartByPrincipalComponentId=function(e,t){d.get(s,"getSparePartByPrincipalComponentId",e,t)},l.saveTechnicalParameterByModelId=function(e,t,i){d.get(s,"saveTechnicalParameterByModelId",[e,t],i)},l.addTechnicalParameterByModelId=function(e,t,i){d.get(s,"addTechnicalParameterByModelId",[e,t],i)},l.deleteTechnicalParameterByModelId=function(e,t,i){d.get(s,"deleteTechnicalParameterByModelId",[e,t],i)},l.addCollectionTaskDefinitionByModelId=function(e,t,i){d.get(s,"addCollectionTaskDefinitionByModelId",[e,t],i)},l.addPrincipalComponentByModelId=function(e,t,i){d.get(s,"addPrincipalComponentByModelId",[e,t],i)},l.deleteCollectionTaskDefinitionByModelId=function(e,t,i){d.get(s,"deleteCollectionTaskDefinitionByModelId",[e,t],i)},l.deletePrincipalComponentByModelId=function(e,t,i){d.get(s,"deletePrincipalComponentByModelId",[e,t],i)},l.deleteFaultKnowledgeByModelId=function(e,t,i){d.get(s,"deleteFaultKnowledgeByModelId",[e,t],i)},l.saveCollectionTaskDefinitionByModelId=function(e,t,i){d.get(s,"saveCollectionTaskDefinitionByModelId",[e,t],i)},l.savePrincipalComponentByModelId=function(e,t,i){d.get(s,"savePrincipalComponentByModelId",[e,t],i)},l.findTechnicalParameterByModelId=function(e,t){d.get(s,"findTechnicalParameterByModelId",e,t)},l.deleteModelFile=function(e,t){d.get(s,"deleteModelFile",e,t)},l.deleteDeviceFile=function(e,t){d.get(s,"deleteDeviceFile  ",e,t)},l.getUploadModelFileList=function(e,t){d.get(s,"getUploadModelFileList",e,t)},l.findPrincipalComponentByModelId=function(e,t){d.get(s,"findPrincipalComponentByModelId",e,t)},l.findCollectionTaskDefinitionByModelId=function(e,t){d.get(s,"findCollectionTaskDefinitionByModelId",e,t)},l.getdefaultAttrs=function(e){d.get(s,"getdefaultAttrs",[],e)},l.getAllAttrs=function(e){d.get(s,"getAllAttrs",[],e)},l.getAllDataTypes=function(e){d.get(s,"getAllDataTypes",[],e)},l.getAllModelType=function(e){d.get(s,"getAllModelType",[],e)},l.findFaultKnowledgeByModelId=function(e,t){d.get(s,"findFaultKnowledgeByModelId",e,t)},l.saveFaultKnowledgeByModelId=function(e,t,i){d.get(s,"saveFaultKnowledgeByModelId",[e,t],i)},l.getAlertDefinitionByAlertCode=function(e,t,i){d.get(s,"getAlertDefinitionByAlertCode",[e,t],i)},l.getAllDataItems=function(e){d.get(s,"getAllDataItems",[],e)},l.getDevicesByCondition=function(e,t,i){d.get(s,"getDevicesByCondition",[e],t,null,i)},l.getDevicesByConditionWithPage=function(e,t,i){d.get(s,"getDevicesByConditionWithPage",[e,t],i)},l.getResourcesByCondition=function(e,t){d.get(s,"getResourcesByCondition",e,t)},l.getResourceByIds=function(e,i){var t=[],n={};for(var o in e)l.nodesDic[e[o]]?n[e[o]]=l.nodesDic[e[o]]:t.push(e[o]);0<t.length?d.get(s,"getResourceByIds",[t],function(e){if(0==e.code){for(var t in e.data)l.nodesDic[e.data[t].id]=e.data[t],n[e.data[t].id]=e.data[t];i(n)}}):i(n)},l.addModel=function(e,t){d.get(s,"addModel",e,t)},l.updateModel=function(e,t){d.get(s,"updateModel",e,t)},l.deleteModel=function(e,t){d.get(s,"deleteModel",e,t)},l.getAlertsByModelId=function(e,t){d.get(s,"getAlertsByModelId",e,t)},l.saveAlerts=function(e,t,i){d.get(s,"saveAlerts",[e,t],i)},l.getThresholds=function(e,t,i){d.get(s,"getThresholds",[e,t],i)},l.saveThresholds=function(e,t){d.get(s,"saveThresholds",e,t)},l.getThresholdsByModelId=function(e,t){d.get(s,"getThresholdsByModelId",e,t)},l.saveThresholdsByAlert=function(e,t,i){d.get(s,"saveThresholdsByAlert",[e,t],i)},l.deleteThresholdByAlert=function(e,t,i){d.get(s,"deleteThresholdByAlert",[e,t],i)},l.getKpisByModelId=function(e,t){d.get(s,"getKpisByModelId",e,t)},l.saveKpis=function(e,t,i){d.get(s,"saveKpis",[e,t],i)},l.getMSvalue=function(e,t){switch(t.granularityUnit){case"MS":e<t.granularity&&(e=t.granularity);break;case"SECOND":e<1e3*t.granularity&&(e=1e3*t.granularity);break;case"MINUTE":e<1e3*t.granularity*60&&(e=1e3*t.granularity*60);break;case"HOUR":e<1e3*t.granularity*3600&&(e=1e3*t.granularity*3600);break;case"DAY":e<1e3*t.granularity*3600*24&&(e=1e3*t.granularity*3600*24);break;case"WEEK":e<1e3*t.granularity*3600*24*7&&(e=1e3*t.granularity*3600*24*7);break;case"MONTH":e<1e3*t.granularity*3600*24*31&&(e=1e3*t.granularity*3600*24*31);break;default:e=e}return t.minTimespan=e},l.getKpisByKpiIds=function(e,i){var t=[],n={minTimespan:1e3};for(var o in e)l.kpisDic[e[o]]?(n[e[o]]=l.kpisDic[e[o]],0<l.kpisDic[e[o]].granularity?n.minTimespan=l.getMSvalue(n.minTimespan,l.kpisDic[e[o]]):n.minTimespan=n.minTimespan):t.push(e[o]);0<t.length?d.get(s,"getKpisByKpiIds",[t],function(e){if(0==e.code){for(var t in e.data)l.kpisDic[e.data[t].id]=e.data[t],n[e.data[t].id]=e.data[t],0<e.data[t].granularity?n.minTimespan=l.getMSvalue(n.minTimespan,e.data[t]):n.minTimespan=n.minTimespan;i(n)}}):i(n)},l.getAttrsByModelId=function(e,t){d.get(s,"getAttrsByModelId",e,t)},l.addResource=function(e,t){d.get(s,"addResource",e,t)},l.saveAttrs=function(e,t){d.get(s,"saveAttrs",[e],t)},l.deleteAttrs=function(e,t){d.get(s,"deleteAttrs",[e],t)},l.updateResource=function(e,t){d.get(s,"updateResource",e,t)},l.updateDevice=function(e,t){d.get(s,"updateDevice",e,t)},l.savePhysicalDevice=function(e,t){d.get(s,"savePhysicalDevice",e,t)},l.addResourceAccesses=function(e,t){d.get(s,"addResourceAccesses",e,t)},l.deleteResource=function(e,t){d.get(s,"deleteResource",e,t)},l.findResourceAccesses=function(e,t){d.get(s,"findResourceAccesses",e,t)},l.getPhysicalDeviceById=function(e,t){d.get(s,"getPhysicalDeviceById",e,t)},l.getResources=function(e,t){d.get(s,"getResources",null,e,null,t)},l.getResourceByModelId=function(e,t,i){d.get(s,"getResourceByModelId",e,t,null,i)},l.getDevices=function(e){d.get(s,"getDevices",[],e)},l.getSimpleDistricts=function(e){d.get(s,"getSimpleDistricts",null,e)},l.updateGateway=function(e,t){d.get(s,"updateGateway",e,t)},l.getResourcesByGatewayId=function(e,t){d.get(s,"getResourcesByGatewayId",e,t)},l.getPhysicalDevicesByGatewayId=function(e,t){d.get(s,"getPhysicalDevicesByGatewayId",e,t)},l.getResourceById=function(e,t){d.get(s,"getResourceById",e,t)},l.addGateway=function(e,t){d.get(s,"addGateway",e,t)},l.getAllGateways=function(e){d.get(s,"getAllGateways",null,e)},l.getGatewayById=function(e,t){d.get(s,"getGatewayById",e,t)},l.getAllGatewaysByCondition=function(e,t){d.get(s,"getAllGatewaysByCondition",e,t)},l.deleteGateway=function(e,t){d.get(s,"deleteGateway",e,t)},l.deleteGateways=function(e,t){d.get(s,"deleteGateways",[e],t)},l.activateGateway=function(e,t){d.get(s,"activateGateway",e,t)},l.activateGateways=function(e,t){d.get(s,"activateGateways",[e],t)},l.deactivateGateway=function(e,t){d.get(s,"deactivateGateway",e,t)},l.deactivateGateways=function(e,t){d.get(s,"deactivateGateways",[e],t)},l.registerDevice=function(e,t,i){d.get(s,"registerDevice",[e,t],i)},l.unregisterDevices=function(e,t,i){d.get(s,"unregisterDevices",[e,t],i)},l.unregisterDevice=function(e,t,i){d.get(s,"unregisterDevice",[e,t],i)},l.activateDevice=function(e,t){d.get(s,"activateDevice",e,t)},l.activateDevices=function(e,t){d.get(s,"activateDevices",[e],t)},l.deactivateDevice=function(e,t){d.get(s,"deactivateDevice",e,t)},l.deactivateDevices=function(e,t){d.get(s,"deactivateDevices",[e],t)},l.getResourcesByDomainPath=function(e,t){d.get(s,"getResourcesByDomainPath",e,t)},l.getLatestDevices=function(e){d.get(s,"getLatestDevices",[],e)},l.getDirectivesByModelId=function(e,t){d.get(s,"getDirectivesByModelId",e,t)},l.getDirectivesByModelIdNotByRole=function(e,t){d.get(s,"getDirectivesByModelIdNotByRole",e,t)},l.saveDirectives=function(e,t,i){d.get(s,"saveDirectives",[e,t],i)},l.sendDeviceDirective=function(e,t,i,n){d.get(s,"sendDeviceDirective",[e,t,i],n)},l.checkDirectiveParam=function(e,t){d.get(s,"checkDirectiveParam",e,t)},l.statDeviceByStandardAddress=function(e){d.get(s,"statDeviceByStandardAddress",[],e)},l.changeDeviceDomain=function(e,t,i){d.get(s,"changeDeviceDomain",[e,t],i)},l.deleteKpi=function(e,t,i){d.get(s,"deleteKpi",[e,t],i)},l.saveKpi=function(e,t,i){d.get(s,"saveKpi",[e,t],i)},l.deleteAttr=function(e,t,i){d.get(s,"deleteAttr",[e,t],i)},l.saveAttr=function(e,t,i){d.get(s,"saveAttr",[e,t],i)},l.deleteAlert=function(e,t,i){d.get(s,"deleteAlert",[e,t],i)},l.saveAlert=function(e,t,i){d.get(s,"saveAlert",[e,t],i)},l.deleteDirective=function(e,t,i){d.get(s,"deleteDirective",[e,t],i)},l.saveDirective=function(e,t,i){d.get(s,"saveDirective",[e,t],i)},l.getDeviceProviderModels=function(e){d.get(s,"getDeviceProviderModels",[],e)},l.getManagedModels=function(e){d.get(s,"getManagedModels",[],e)},l.getDeviceGroups=function(e){d.get(s,"getDeviceGroups",[],e)},l.deleteDeviceGroup=function(e,t){d.get(s,"deleteDeviceGroup",[e],t)},l.deleteDevice=function(e,t){d.get(s,"deleteDevice",[e],t)},l.getDeviceShadowsByFilter=function(e,t){d.get(s,"getDeviceShadowsByFilter",e,t)},l.getModelsByGroupId=function(e,t){d.get(s,"getModelsByGroupId",[e],t)},l.getCustomerDeviceByFilter=function(e,t){d.get(s,"getCustomerDeviceByFilter",e,t)},l.getDeviceGroupModels=function(e,t){d.get(s,"getDeviceGroupModels",[],e,t)},l.saveDeviceGroup=function(e,t){d.get(s,"saveDeviceGroup",e,t)},l.getCanRelatedToGroupDevicesByModelId=function(e,t){d.get(s,"getCanRelatedToGroupDevicesByModelId",[e],t)},l.saveDeviceToGroups=function(e,t,i){d.get(s,"saveDeviceToGroups",[e,t],i)},l.getAllCollectionPlugins=function(e){d.get(s,"getAllCollectionPlugins",[],e)},l.getKpiTypeByFilter=function(e,t){d.get(s,"getKpiTypeByFilter",e,t)},l.getCouponByPromoCode=function(e,t){d.get(s,"getCouponByPromoCode",e,t)},l.getCurrentUserOrder=function(e){d.get(s,"getCurrentUserOrder",[],e)},l.saveOrder=function(e,t){d.get(s,"saveOrder",e,t)},l.getCurrentUserProduct=function(e){d.get(s,"getCurrentUserProduct",[],e)},l.getAllPrice=function(e){d.get(s,"getAllPrice",[],e)},l.findByExternalDevIdAndLabel=function(e,t){d.get(s,"findByExternalDevIdAndLabel",e,t)},l.getResourceByGatewayId=function(e,t){d.get(s,"getResourceByGatewayId",e,t)},l.getResourcesByDomainPathAndCategory=function(e,t){d.get(s,"getResourcesByDomainPathAndCategory",[e,"DeviceGroup"],t)},l.getDevicesByDomainPath=function(e,t){d.get(s,"getDevicesByDomainPath",e,t)},l.saveThresholdsByModelId=function(e,t,i,n){d.get(s,"saveThresholdsByModelId",[e,t,i],n)},l.deleteThresholdById=function(e,t){d.get(s,"deleteThresholdById",[e],t)},l.addAlertDefinition=function(e,t){d.get(s,"addAlertDefinition",e,t)},l.updateAlertDefinition=function(e,t){d.get(s,"updateAlertDefinition",e,t)},l.deleteAlertDefinition=function(e,t){d.get(s,"deleteAlertDefinition",e,t)},l.findAlertDefinitions=function(e,t){d.get(s,"findAlertDefinitions",e,t)},l.addKpiThreshold=function(e,t){d.get(s,"addKpiThreshold",e,t)},l.updateKpiThreshold=function(e,t){d.get(s,"updateKpiThreshold",e,t)},l.copyKpiThresholdById=function(e,t){d.get(s,"copyKpiThresholdById",e,t)},l.deleteKpiThresholds=function(e,t){d.get(s,"deleteKpiThresholds",e,t)},l.findKpiThresholds=function(e,t){d.get(s,"findKpiThresholds",e,t)},l.enabledKpiThresholds=function(e,t){d.get(s,"enabledKpiThresholds",e,t)},l.addNoticeRule=function(e,t){d.get(s,"addNoticeRule",e,t)},l.updateNoticeRule=function(e,t){d.get(s,"updateNoticeRule",e,t)},l.deleteNoticeRule=function(e,t){d.get(s,"deleteNoticeRule",e,t)},l.findNoticeRuleById=function(e,t){d.get(s,"findNoticeRuleById",e,t)},l.findNoticeRules=function(e,t){d.get(s,"findNoticeRules",e,t)},l.findTemplateByCondition=function(e,t){d.get(s,"findTemplateByCondition",e,t)},l.getFaultsByModelId=function(e,t){d.get(s,"getFaultsByModelId",e,t)},l.findResourcesByCondition=function(e,t){d.get(s,"findResourcesByCondition",e,t)},l.loadConnectionPoint=function(e,t){d.get(s,"loadConnectionPoint",e,t)},l.getConnectionPoint=function(e,t){d.get(s,"getConnectionPoint",e,t)},l.getDomainsByFilter=function(e,t){d.get(s,"getDomainsByFilter",e,t)},l.getDomainsByFilters=function(e,t){d.get(s,"getDomainsByFilters",e,t)},l.getEnterpriseDomainsByFilter=function(e,t){d.get(s,"getEnterpriseDomainsByFilter",e,t)},l.getExtendDomainsByFilter=function(e,c){d.get(s,"getDomainsByFilter",e,function(e){if(0==e.code){var t={};e.data.forEach(function(e){e.text=e.name,e.label=e.name+(301==e.modelId?"[客户域]":302==e.modelId?"[项目域]":""),e.icon="ion ion-ios-color-filter",t[e.domainPath]=e});var i={};for(var n in t){var o=n.replace(t[n].id+"/","");t[o]?(t[o].nodes||(t[o].nodes=[]),t[o].nodes.push(t[n])):(i=t[n]).domainInfos=e.data}e.domainListDic=t,e.domainListTree=[i],e.data=[i],c(e)}})},l.getEnterpriseDomainsByFilter=function(e,t){d.get(s,"getEnterpriseDomainsByFilter",e,t)},l.getKqiCalcRules=function(e){d.get(s,"getKqiCalcRules",[],e)},l.addKqiCalcRule=function(e,t){d.get(s,"addKqiCalcRule",[e],t)},l.updateKqiCalcRule=function(e,t){d.get(s,"updateKqiCalcRule",[e],t)},l.deleteKqiCalcRule=function(e,t){d.get(s,"deleteKqiCalcRule",[e],t)},l.getDevicesByUserId=function(e,t,i){d.get(s,"getDevicesByUserId?includeFields=label,id,domains",[e,t],i)},l.activateSimulatedGateway=function(e,t){d.get(s,"activateSimulatedGateway",[e],t)},l.activateSimulatedGateways=function(e,t){d.get(s,"activateSimulatedGateways",[e],t)},l.getDevicesByCondition({},function(e){0==e.code&&l.deviceLoader(e.data)},"includeFields=label,externalDevId,id,values.images,domains,modelId"),l}])});
//# sourceMappingURL=../../map/js/services/resource-ui-service.js.map
