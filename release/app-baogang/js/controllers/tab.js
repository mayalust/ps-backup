angular.module("myApp.controllers").controller("tabCtrl",["$scope","$state","$stateParams",function(i,t,a){i.toolbars=[{id:"1",name:"工具1"},{id:"2",name:"工具2"},{id:"3",name:"工具3"},{id:"4",name:"工具4"},{id:"5",name:"工具5"}],i.tabLabelLists=[{id:"0",name:"工作台"}],i.toolbarHandler=function(e,t){var a={id:i.isShowContent=e,name:t},n=!0;i.tabLabelLists.forEach(function(t,a){t.id==e&&(alert(t.name+"已经存在"),n=!1)}),n&&i.tabLabelLists.push(a)},i.deleteItemTab=function(t,a){i.tabLabelLists.splice(t,1),i.isShowContent=i.tabLabelLists[t-1].id},i.isShowContent=0,i.selecItemTab=function(t,a){i.isShowContent=t}}]);
//# sourceMappingURL=../../../map/app-baogang/js/controllers/tab.js.map
