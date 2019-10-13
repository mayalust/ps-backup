define(["controllers/controllers","bootstrap-dialog"],function(t,e){"use strict";t.initController("contractCtrl",["$scope","userLoginUIService","userEnterpriseService","userUIService","growl","userRoleUIService","userFunctionService","userDomainService","marketplaceUIService",function(i,t,e,a,r,l,n,c,o){i.contractGridData={columns:[{title:"合同编号",data:"contractNum"},{title:"客户名称",data:"clientNname"},{title:"合同名称",data:"contractNname"},{title:"合同类型",data:"contractType"},{title:"签订日期",data:"qianding"},{title:"生效日期",data:"sheng"},{title:"失效日期",data:"shi"},{title:"操作",orderable:!1,data:"option"}],columnDefs:[]},e.querySupplier(function(t){if(0==t.code){for(var e in t.data){var a=t.data[e];a.isEdit=0,null==a.supplierEmail||""==a.supplierEmail?a.supplierEmail=a.supplierPhone:a.supplierEmail=a.supplierEmail}i.contractGridData.data=[],i.$broadcast(Event.USERINFOSINIT+"_contract",i.contractGridData)}})}]),t.initController("maintainCtrl",["$scope","userLoginUIService","userEnterpriseService","userUIService","growl","userRoleUIService","userFunctionService","userDomainService","marketplaceUIService",function(i,t,e,a,r,l,n,c,o){i.contractGridData={columns:[{title:"计划名称",data:"contractNum"},{title:"客户名称",data:"clientNname"},{title:"计划类型",data:"contractNname"},{title:"维保类型",data:"contractType"},{title:"维保项目",data:"qianding"},{title:"维保人员",data:"sheng"},{title:"操作",orderable:!1,data:"option"}],columnDefs:[]},e.querySupplier(function(t){if(0==t.code){for(var e in t.data){var a=t.data[e];a.isEdit=0,null==a.supplierEmail||""==a.supplierEmail?a.supplierEmail=a.supplierPhone:a.supplierEmail=a.supplierEmail}i.contractGridData.data=[],i.$broadcast(Event.USERINFOSINIT+"_maintain",i.contractGridData)}})}]),t.initController("loreCtrl",["$scope","userLoginUIService","userEnterpriseService","userUIService","growl","userRoleUIService","userFunctionService","userDomainService","marketplaceUIService",function(i,t,e,a,r,l,n,c,o){i.contractGridData={columns:[{title:"标题",data:"contractNum"},{title:"分类",data:"clientNname"},{title:"描述",data:"contractNname"},{title:"创建时间",data:"contractType"},{title:"维护时间",data:"qianding"},{title:"操作",orderable:!1,data:"option"}],columnDefs:[]},e.querySupplier(function(t){if(0==t.code){for(var e in t.data){var a=t.data[e];a.isEdit=0,null==a.supplierEmail||""==a.supplierEmail?a.supplierEmail=a.supplierPhone:a.supplierEmail=a.supplierEmail}i.contractGridData.data=[],i.$broadcast(Event.USERINFOSINIT+"_lore",i.contractGridData)}})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/contract-ctrl.js.map
