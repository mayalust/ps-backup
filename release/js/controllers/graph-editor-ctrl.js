function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["controllers/controllers"],function(controllers){"use strict";controllers.controller("graphEditorCtrl",["$scope","$rootScope","$routeParams","$timeout","kpiDataService","resourceUIService","SwSocket","Info","viewFlexService","growl","$q","$window","$location","solutionUIService","serviceCenterService","chartOptionService","toolBarList",function(scope,rootScope,routeParams,timeout,kpiDataService,resourceUIService,SwSocket,Info,viewFlexService,growl,q,window,location,solutionUIService,serviceCenterService,chartOptionService,toolBarList){var status,rootCi,freeBoardValue,CHARTDATA,solutionId,serviceViewId,allViews,viewId,currentView,loadedView,solutionId=routeParams.solutionId,groupId=routeParams.groupId,modelId=routeParams.modelId,viewId=routeParams.viewId,path="../localdb/freeboard.json";function callback(e){if(allViews=e.data.filter(function(e){return"designView_v2"==e.viewType&&e.viewId!=viewId}),!(currentView=e.data.find(function(e){return e.viewId==viewId})))throw new Error("视图不存在！！");scope.viewTitle=currentView.viewTitle,scope.titleChange(),getDashboard()}function getDashboard(){var cachBindData={};if(null!=currentView){var clone,dt=JSON.parse(currentView.content);clone=dt}else clone=standardDashboard.clone();loadedView={layout:clone.data,setting:clone.setting},scope.editData={layout:clone.data,setting:clone.setting},scope.editData.layout.traveseByChild(function(element){if(element.onChange&&(element.onChange=eval(element.onChange)),element.source){var source=element.source;element.clone(freeBoardValue[source].clone().$extension(element))}element.data&&element.data.bindTo&&(cachBindData[element.data.bindTo]?element.data=cachBindData[element.data.bindTo]:cachBindData[element.data.bindTo]=element.data),element.id=$randomString(32)}),replaceCiKpi.call(scope.editData.layout,function(){timeout(function(){scope.editData.renderBoard()})})}function getModelDashboardViewSolution(event){if(event.code){if(null!=event.data){var clone,dt=JSON.parse(event.data);clone="V_2"==dt.version?{layout:dt.data,setting:dt.setting}:{layout:{id:$randomString(32),type:"column",children:[],col:12},setting:{padding:15}}}loadedView=clone.clone(),scope.editData=clone,scope.editData.layout.traveseByChild(function(element){if(element.onChange&&(element.onChange=eval(element.onChange)),element.source){var source=element.source;element.clone(freeBoardValue[source].clone().$extension(element.clone()))}element.id=$randomString(32)}),replaceCiKpi.call(scope.editData.layout,function(){timeout(function(){scope.editData.renderBoard()})})}}function toolbar(e){this.clone(e)}function subtoolbar(e){this.clone(e)}function modelSelector(e){this.clone(e)}scope.solutionId=solutionId,loadedView={id:$randomString(32),type:"column",children:[],col:12},Info.get(path,function(e){solutionId?(scope.titleComposory=!1,solutionUIService.getModelDashboardViewContent(solutionId,groupId,modelId,getModelDashboardViewSolution)):(scope.titleComposory=!0,viewId&&(viewFlexService.getAllMyViews(callback),scope.viewId=viewId))}),toolbar.prototype.click=function(){scope.toolbarDetail=this.clone(),scope.toolbarDetail.sub=scope.toolbarDetail.sub.map(function(e){return new subtoolbar(e)})},subtoolbar.prototype.click=function(){var e=scope.tools[this.dataType.type+"chart"].clone(),t=CHARTDATA[this.option],a=$randomString(32);e.$extension(t),e.id=$randomString(32),t&&(e.$extension({data:{bindTo:a}}),$randomString(32),e.data.$extension({bindTo:a})),scope.toolbarDetail=void 0,scope.editData.layout.children.push(e),scope.editData.renderBoard()},rootScope.exitDashboard=function(){var e=[{label:"不保存",icon:"btn btn-default pull-left",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){window.location.href=solutionId&&serviceViewId?"../app-ac/index.html#/myView":"../app-oc/index.html#/designView/"+scope.viewId}},{label:"取消",icon:"btn btn-cancel",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){scope.dialogBox=void 0}},{label:"保存",icon:"btn btn-success",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){rootScope.saveDashboard(function(){rootScope.viewmode,window.location.href=solutionId&&serviceViewId?"../app-ac/index.html#/myView":"../app-oc/index.html#/designView/"+scope.viewId})}}];scope.dialogBox={title:{label:"退出DASHBOARD编辑器"},description:{label:"尚有未保存的修改，是否保存？"},fnlist:e}},modelSelector.prototype.change=function(){var e=this.id,t=q.defer(),a=q.defer(),o=q.defer();return scope.unitFilter=void 0,scope.unitFilterDisabled=!1,serviceCenterService.kpis.getBymodelId(e).then(function(e){scope.kpis=e,scope.kpiUnits=e.reduce(function(e,t){return e.some(function(e){return e.value==t.unit})||e.push({label:t.unit,value:t.unit}),e},[{label:"all",value:""}]),a.resolve("success")},function(e){}),serviceCenterService.resources.getBymodelId(e).then(function(e){scope.resources=e,o.resolve("success")},function(e){}),q.all([a.promise,o.promise]).then(function(e){t.resolve("success")}),t.promise},scope.toolBarList=toolBarList.map(function(e){return new toolbar(e)}),scope.cols=[{inx:0,value:12}],scope.drop={},scope.colstyles=[{label:"自定义",value:[]},{label:"100%",value:[12]},{label:"50% - 50%",value:[6,6]},{label:"66% - 33%",value:[8,4]},{label:"33% - 66%",value:[4,8]},{label:"33% - 33% - 33%",value:[4,4,4]},{label:"25% - 25% - 25% - 25%",value:[3,3,3,3]}];var path1="../localdb/editor.json",path2="../localdb/freeboard.json";function refineDataStructure(){var o={};this.traveseByChild(function(e){if(delete e.id,e.$$hashKey&&delete e.$$hashKey,e.data&&(e.data.model&&(e.data.model={id:e.data.model.id}),e.data.resource&&(e.data.resource=e.data.resource.map(function(e){return e.id==rootCi.id?"rootCi":e.id})),e.data.kpi&&(e.data.kpi=e.data.kpi.map(function(e){return e.id}))),e.attributes){for(var t in e.attributes){var a={value:e.attributes[t].value};null!=e.attributes[t].applied&&(a.applied=e.attributes[t].applied),e.attributes[t].data&&a.$extension({data:{value:e.attributes[t].data.value}}),e.attributes[t]=a}e.data.bindTo&&(o[e.data.bindTo]?e.data=o[e.data.bindTo]:o[e.data.bindTo]=e.data)}})}function panelCancel(){scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0}function init(){serviceCenterService.rootDomain.get().then(function(e){var t=[(rootCi=e).modelId];resourceUIService.getModelByIds(t,function(e){var a=[e.data[0]];serviceCenterService.models.getAll().then(function(e){for(var t in Array.prototype.push.apply(a,e),scope.allModels=a.map(function(e){return new modelSelector(e)}),freeBoardValue.TEXT.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.SPARKLINE.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.LINECHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.GAUGECHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.PIECHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.BARCHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.SCATTERCHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.KCHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),freeBoardValue.RADARCHART.$extension({data:{model:scope.allModels[0],resource:[rootCi],modelDisable:!1}}),scope.tools={grid:freeBoardValue.GRID,linechart:freeBoardValue.LINECHART,gaugechart:freeBoardValue.GAUGECHART,piechart:freeBoardValue.PIECHART,barchart:freeBoardValue.BARCHART,scatterchart:freeBoardValue.SCATTERCHART,kchart:freeBoardValue.KCHART,radarchart:freeBoardValue.RADARCHART,mapchart:{type:"mapchart"},map1chart:{type:"map1chart"},map2chart:{type:"map2chart"},scatter2chart:{type:"scatter2chart"},scatter3chart:{type:"scatter3chart"},relation1chart:{type:"relation1chart"},relation2chart:{type:"relation2chart"},parallels1chart:{type:"parallels1chart"},parallels2chart:{type:"parallels2chart"},parallels3chart:{type:"parallels3chart"},sankey1chart:{type:"sankey1chart"},sankey2chart:{type:"sankey2chart"}},scope.tools)replaceCiKpi.call(scope.tools[t]);scope.editData.renderBoard()},function(e){})})})}function panelClose(){scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0,scope.editData.renderBoard()}function dataPanelShow(e){scope.dataPanel=e.clone(),scope.dataPanel.data.model=scope.allModels.find(function(e){return e.id==scope.dataPanel.data.model.id}),scope.dataPanel.data.model.change().then(function(){for(var t in scope.resources){var e=!1;scope.dataPanel.data.resource&&(e=scope.dataPanel.data.resource.some(function(e){return scope.resources[t].id==e.id})),scope.resources[t].checked=e}for(var t in scope.kpis){var a;scope.dataPanel.data.kpi&&(a=scope.dataPanel.data.kpi.find(function(e){return scope.kpis[t].id==e.id})),a&&(scope.unitFilter=a.unit,scope.unitFilterDisabled=!0),scope.kpis[t].checked=null!=a}})}function replaceCiKpi(t){var a=[];this.traveseByChild(function(i){var r,e=q.defer();a.push(e.promise),function(n){if(i.data){if(i.data.defer=function(e){r=e},"object"!=_typeof(i.data.model)){var t=i.data.model;resourceUIService.getModelByIds([t],function(e){"0"==e.code&&(i.data.model=new modelSelector(e.data[0]),a(t))})}else if(null!=i.data.model){a(t=i.data.model.id)}}else n.resolve("success");function a(o){serviceCenterService.resources.getBymodelId(o).then(function(e){if($.isArray(i.data.resource))for(var t in i.data.resource)if("rootCi"==i.data.resource[t])i.data.resource[t]=rootCi;else if("object"!=_typeof(i.data.resource[t])){var a=i.data.resource[t];i.data.resource[t]=e.find(function(e){return a==e.id})}serviceCenterService.kpis.getBymodelId(o).then(function(e){if($.isArray(i.data.kpi))for(var t in i.data.kpi)if("object"!=_typeof(i.data.kpi[t])){var a=i.data.kpi[t];i.data.kpi[t]=e.find(function(e){return a==e.id})}delete i.data.defer,"function"==typeof r&&r("success!!"),n.resolve("success")})})}}(e)}),q.all(a).then(function(e){"function"==typeof t&&t()})}scope.titleChange=function(){function t(){var e=allViews.some(function(e){return e.viewTitle==scope.viewTitle});scope.correct=!e}allViews?t():viewFlexService.getAllMyViews(function(e){"0"==e.code&&(allViews=e.data.filter(function(e){return"designView_v2"==e.viewType&&e.viewId!=viewId}),t())})},rootScope.saveDashboard=function(t){if(solutionId||"string"==typeof scope.viewTitle&&""!=scope.viewTitle){var e=scope.editData.clone();refineDataStructure.call(e.layout);var a={version:"V_2",data:e.layout,setting:e.setting};if(solutionId)solutionUIService.saveModelDashboardViewContent(solutionId,groupId,modelId,JSON.stringify(a),function(e){0==e.code?growl.success("解决方案视图修改成功",{}):growl.error("解决方案视图修改失败",{})});else{var o={viewTitle:30<scope.viewTitle.length?scope.viewTitle.slice(0,30):scope.viewTitle,viewName:"designView_v2",viewType:"designView_v2",content:JSON.stringify(a)};scope.viewId?(o.viewId=scope.viewId,viewFlexService.updateView(o,function(e){0==e.code&&(growl.success("性能视图修改成功",{}),t&&t())})):viewFlexService.addView(o,function(e){0==e.code&&(growl.success("性能视图创建成功",{}),scope.viewId=e.data.viewId,t&&t())})}}else growl.error("视图名不能为空！",{})},Info.get(path1,function(e){CHARTDATA=e,Info.get(path2,function(e){freeBoardValue=e.freeBoardValue,init()})}),scope.editData={layout:{id:$randomString(32),type:"column",children:[],col:12},setting:{padding:15}},rootScope.panelCancel=panelCancel,scope.colstyle=scope.colstyles[1],scope.gridSelector={},scope.colChange=function(e){scope.gridSelector.setValue(e)},scope.onDelete=function(e){var a,o,n=$(e.target).attr("id");scope.editData.layout.traveseByChild(function(e,t){e.id==n&&(a=e,o=t)});var t=o.find(function(e){return e==a});t&&o.$remove(function(e){return e.id==t.id}),scope.editData.renderBoard()},scope.onSetting=function(e,t){var a,o=$(e.target).attr("id");scope.editData.layout.traveseByChild(function(e,t){e.id==o&&(a=e,t)}),scope.selectData=a,scope.editPanel=a.clone(),rootScope.panelClose=function(){a.$extension(scope.editPanel),scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0,scope.editData.renderBoard()}},scope.switchToData=function(){var e=scope.editPanel;scope.editPanel=void 0,timeout(function(){dataPanelShow(e)},400),rootScope.panelClose=function(){if(scope.dataPanel.data.resource&&scope.dataPanel.data.kpi){for(var e in scope.dataPanel.attributes)scope.dataPanel.attributes[e].data&&"none"==scope.dataPanel.attributes[e].data.value&&(scope.dataPanel.attributes[e].data.value=scope.dataPanel.attributes[e].data.option[1].value);scope.dataPanel.valueGroup&&(scope.dataPanel.valueGroup.data.value="value")}else{for(var e in scope.dataPanel.attributes)scope.dataPanel.attributes[e].data&&"none"!=scope.dataPanel.attributes[e].data.value&&(scope.dataPanel.attributes[e].data.value="none");scope.dataPanel.valueGroup&&(scope.dataPanel.valueGroup.data.value="custom")}scope.selectData.$extension(scope.dataPanel),scope.editData.renderBoard(),timeout(function(){var e=scope.selectData.clone();scope.editPanel=e,rootScope.panelClose=function(){scope.selectData.$extension(scope.editPanel),scope.editData.renderBoard(),scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0}},400),scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0}},scope.onDataChange=function(e,t){var a,o=$(e.target).attr("id");for(var n in scope.editData.layout.traveseByChild(function(e,t){e.id==o&&(a=e,t)}),scope.resources)scope.resources[n].checked=!1;for(var n in scope.kpis)scope.kpis[n].checked=!1;dataPanelShow((scope.selectData=a).clone()),rootScope.panelClose=function(){if(scope.dataPanel.data.resource&&scope.dataPanel.data.kpi){for(var e in scope.dataPanel.attributes)scope.dataPanel.attributes[e].data&&"none"==scope.dataPanel.attributes[e].data.value&&(scope.dataPanel.attributes[e].data.value=scope.dataPanel.attributes[e].data.option[1].value);scope.dataPanel.valueGroup&&(scope.dataPanel.valueGroup.data.value="value")}else{for(var e in scope.dataPanel.attributes)scope.dataPanel.attributes[e].data&&"none"!=scope.dataPanel.attributes[e].data.value&&(scope.dataPanel.attributes[e].data.value="none");scope.dataPanel.valueGroup&&(scope.dataPanel.valueGroup.data.value="custom")}scope.selectData.$extension(scope.dataPanel.clone()),scope.editData.renderBoard(),scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0}},scope.onChange=function(e,t){scope.tools.grid.children=e.map(function(e){return{type:"column",children:[],col:e}}),t&&(scope.colstyle=scope.colstyles[0])},scope.onDrop=function(event,ui,before){var targetId=$(event.target).attr("id"),dragId=ui.draggable.attr("id");if(targetId!=dragId)if(-1==dragId.indexOf("add_")){var getElem,getParent,clone={};scope.editData.layout.traveseByChild(function(e,t){e.id==dragId&&(getElem=e,getParent=t)}),clone=getElem.clone();var find=getParent.find(function(e){return e==getElem}),find,targetParent;if(find&&getParent.$remove(function(e){return e.id==find.id}),scope.editData.layout.traveseByChild(function(e,t){e.id==targetId&&(find=e,targetParent=t)}),before){var inx=targetParent.indexOf(find);-1!=inx&&targetParent.insertBefore(inx,clone)}else find.children.push(clone);scope.editData.renderBoard()}else{var dragId=dragId.split("add_")[1];if("grid"==dragId){var find,pare,children,children=[],row;if(scope.tools.clone()[dragId])row=scope.tools.clone()[dragId];else{if(!scope.tools.clone()[dragId+"chart"])throw new Error("找不到视图!");row=scope.tools.clone()[dragId+"chart"]}if(row.traveseByChild(function(element){element.id=$randomString(32),element.traverse(function(el){el.onChange&&(el.onChange=eval(el.onChange))})}),scope.editData.layout.traveseByChild(function(e,t){e.id==targetId&&(find=e,pare=t)}),before){var inx=pare.indexOf(find);pare.insertBefore(inx,row)}else find.children.push(row);scope.editData.renderBoard()}else{var find=toolBarList.find(function(e){return e.id==dragId}),uuid=$randomString(32),option=find.sub[0].option,find,pare,children,children=[],select;if(scope.tools.clone()[dragId])select=scope.tools.clone()[dragId];else{if(!scope.tools.clone()[dragId+"chart"])throw new Error("找不到视图!");select=scope.tools.clone()[dragId+"chart"]}var tempData=CHARTDATA[option];select.id=$randomString(32),select.$extension(tempData);var selectWrap={type:"row",style:"border : 1px dashed #aaa; padding : 20px 0; margin : 20px auto;",children:[{type:"col",col:12,children:[{id:$randomString(32),type:"multiSelect",data:{bindTo:uuid,model:select.data.model,resource:select.data.resource}}]},{type:"col",col:12,children:[select]}]};if(selectWrap.traveseByChild(function(element){element.id=$randomString(32),element.traverse(function(el){el.onChange&&(el.onChange=eval(el.onChange))})}),scope.editData.layout.traveseByChild(function(e,t){e.id==targetId&&(find=e,pare=t)}),before){var inx=pare.indexOf(find);pare.insertBefore(inx,selectWrap)}else find.children.push(selectWrap);scope.editData.renderBoard()}}},scope.kpiChange=function(e){if(1==scope.dataPanel.data.maxKpi)for(var t in scope.kpis)scope.kpis[t].id!=e.id?scope.kpis[t].checked=!1:scope.kpis[t].checked=!scope.kpis[t].checked;else e.checked=!e.checked;var a=scope.kpis.filter(function(e){return 1==e.checked});0<a.length?(scope.unitFilter=a[0].unit,scope.unitFilterDisabled=!0,scope.dataPanel.data.kpi=a):(scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel.data.kpi=void 0)},scope.resourceChange=function(e){e.checked=!e.checked;var t=scope.resources.filter(function(e){return 1==e.checked});0<t.length?scope.dataPanel.data.resource=t:scope.dataPanel.data.resource=void 0},scope.mode="EDIT",scope.groupRemove=function(t,e){if(1<e.length)for(var a in e.$remove(function(e){return t.id==e.id}),e)e[a].id=a},rootScope.clearDashboard=function(){scope.editData={layout:{id:$randomString(32),type:"column",children:[],col:12}},timeout(function(){scope.editData.renderBoard()})},rootScope.resetDashboard=function(){var cachBindData={};scope.editData=loadedView.clone(),scope.editData.layout.traveseByChild(function(element){if(element.onChange&&(element.onChange=eval(element.onChange)),element.id=$randomString(32),element.source){var source=element.source;element.clone(freeBoardValue[source].clone().$extension(element.clone()))}element.data&&element.data.bindTo&&(cachBindData[element.data.bindTo]?element.data=cachBindData[element.data.bindTo]:cachBindData[element.data.bindTo]=element.data)}),replaceCiKpi.call(scope.editData.layout),timeout(function(){"PREV"==status?scope.editData.renderBoard(!0):scope.editData.renderBoard()})},scope.dataTypeChange=function(t,e){if("none"!=t.value&&(null==e.data.resource||null==e.data.kpi)){var a=scope.editPanel;scope.editPanel=void 0,timeout(function(){dataPanelShow(a)},400),rootScope.panelClose=function(){if(scope.dataPanel.data.resource&&scope.dataPanel.data.kpi){var e=scope.dataPanel;scope.selectData.clone(e),scope.dataPanel=void 0,scope.editData.renderBoard(),timeout(function(){rootScope.panelClose=function(){scope.editPanel.clone(scope.selectData),scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0}},400)}else t.value="none";scope.unitFilter="",scope.unitFilterDisabled=!1,scope.dataPanel=void 0,scope.editPanel=void 0,scope.resources=void 0,scope.kpis=void 0}}},scope.groupAdd=function(e){var t=e[0].clone(),a=[];for(var o in t.attributes.value.value.split(","))a.push(parseInt(100*Math.random()));for(var o in t.attributes.value.value=a.toString(),e.push(t),e)delete e[o].$$hashKey,e[o].id=o},scope.tabClick=function(e){"EDIT"==(scope.mode=e)?($(".free-board-left").removeClass("free-board-fold"),$(".free-board-right").removeClass("free-board-full"),timeout(function(){var e=$(".previewarea");e.removeClass("previewarea"),e.addClass("drawarea"),scope.editData.renderBoard(),status="EDIT"},300)):($(".free-board-left").addClass("free-board-fold"),$(".free-board-right").addClass("free-board-full"),timeout(function(){var e=$(".drawarea");e.addClass("previewarea"),e.removeClass("drawarea"),scope.editData.renderBoard(!0),status="PREV"},300))}}])});
//# sourceMappingURL=../../map/js/controllers/graph-editor-ctrl.js.map