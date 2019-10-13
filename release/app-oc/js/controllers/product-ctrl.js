define(["controllers/controllers","bootstrap-dialog","Array"],function(e,m){"use strict";e.initController("productCommonCtrl",["$scope","$routeParams","$timeout","$q","$location","ngDialog","unitService","userLoginUIService","productUIService","growl","userDomainService",function(n,e,t,i,a,c,l,s,o,u,r){n.selectedCount=0;var d=[];n.unitList=l.units,n.unitDics=l.unitDics;n.dialog={title:"产品结构",input:{enterpriseId:"",name:"",desc:"",unit:"",id:-1,createTime:new Date},button:[{label:"确定",disabled:function(){return!scope.dialog.input.every(function(e){return 0!=e.right})},fn:function(){-1==n.dialog.input.id?(n.ifShowEnter||delete n.dialog.input.enterpriseId,o.addProduct(n.dialog.input,function(e){if(0==e.code){var t=e.data;n.queryAllList.push(t),p(n.queryAllList),u.success("添加产品信息成功",{})}})):0<n.dialog.input.id&&o.updateProduct(n.dialog.input,function(e){0==e.code&&n.queryAllList.forEach(function(e){e.id==n.dialog.input.id&&$.extend(e,n.dialog.input),p(n.queryAllList),u.success("产品信息修改完成",{})})}),c.close()}},{label:"取消",fn:function(){c.close()}}]};var p=function(e){t(function(){n.$broadcast(Event.ENTERPRISEINIT+"_productList",{option:[e]})})};n.tableInit={header:{label:"产品结构管理",delete:"删除产品结构"},select:{name:"",desc:"",enterpriseId:""},event:{addClick:function(){var e;e={},n.dialog.input={name:e.name?e.name:"",desc:e.desc?e.desc:"",unit:e.unit?e.unit:"",id:e.id?e.id:-1,createTime:e.createTime?e.createTime:new Date},c.open({template:"../partials/dialogue/product_info_dia.html",className:"ngdialog-theme-plain",scope:n})},goClear:function(){n.tableInit.select.name=1==n.queryState.state?n.tableInit.select.name:null,n.tableInit.select.desc=2==n.queryState.state?n.tableInit.select.desc:null,n.tableInit.select.enterpriseId=3==n.queryState.state?n.tableInit.select.enterpriseId:null}}},n.doAction=function(e,t,i){"delete"==e&&m.show({title:"提示",closable:!1,message:"确认删除该产品结构？",buttons:[{label:"确定",cssClass:"btn-success",action:function(e){o.deleteProduct([t],function(e){i(e),0==e.code&&(t.forEach(function(e){for(var t in n.queryAllList)e==n.queryAllList[t].id&&n.queryAllList.splice(t,1)}),u.success("产品结构已删除",{}),n.selectedCount=0,n.$apply())}),e.close()}},{label:"取消",action:function(e){i(!1),e.close(),n.selectedCount=0,n.$apply()}}]})},n.searchData=function(){var e={};n.tableInit.select.desc&&(e.desc=n.tableInit.select.desc),n.tableInit.select.name&&(e.name=n.tableInit.select.name),o.findProducts(e,function(e){0==e.code&&(n.queryAllList=e.data,p(e.data))})};var f=function(){var t;t=i.defer(),r.queryDomainTree(s.user.userID,function(e){n.domainListTree=e.domainListTree,n.domainListDic=e.domainListDic,t.resolve("success")}),d.push(t.promise),i.all(d).then(function(){n.searchData()})};s.user.isAuthenticated?f():n.$on("loginStatusChanged",function(e,t){s.user.isAuthenticated&&f()})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/product-ctrl.js.map