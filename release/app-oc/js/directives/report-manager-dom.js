define(["directives/directives","datatables.net","datatables.net-bs","bootstrap-daterangepicker"],function(e,t,a){"use strict";e.initDirective("reportTemplateTable",["$timeout","$compile","$filter","growl","weatherService",function(e,d,n,r,t){return{restrict:"A",controller:["$scope","$element","$attrs",function(l,e,t){var s,a=e;l.$on(Event.REPORTMODULE+"_template",function(e,t){s&&(s.destroy(),a.empty()),!1,s=a.DataTable({order:[[5,"desc"]],dom:t.data&&0<t.data.length?$.ProudSmart.datatable.special2dom:'<"margin-bottom-5"<"special-btn">>',language:$.ProudSmart.datatable.language,data:t.data,columns:[{data:"domainPath",title:"管理域"},{data:"name",className:"td-word",title:"模板名称"},{data:"title",className:"td-word",title:"模板标题"},{data:"catalogId",title:"模板分类"},{data:"dataSourceId",title:"数据源名称"},{data:"insertTime",title:"创建时间"},{data:"fileName",width:"260px",title:"模板文件"},{data:"option",orderable:!1,width:"120px",title:"操作"}],columnDefs:[{targets:0,data:"domainPath",render:function(e,t,a){if("display"!=t)return"";var n="";return"display"==t&&(0<a.isEdit?n='<div  class="dropdowntree" placeholder="请选择..." ng-model="selectedTemplate.domainPath" change="" key="domainPath" options="domainListTree" mark="nodes"/>':e&&null!=l.domainListDic[e]&&l.domainListDic[e]&&(n=l.domainListDic[e].label)),n}},{targets:1,data:"name",render:function(e,t,a){return 0<a.isEdit&&"display"==t?"<input maxlength='80' ng-model='selectedTemplate.name' style='width:100%' class='form-control input-sm' type='text' value='"+escape(e)+"'>":escape(e)}},{targets:2,data:"title",render:function(e,t,a){return 0<a.isEdit?"<input maxlength='80' ng-model='selectedTemplate.title' style='width:100%' class='form-control input-sm' type='text' value='"+escape(e)+"'>":escape(e)}},{targets:3,data:"catalogId",render:function(e,t,a){if(0<a.isEdit)return'<select style="width:100%" ng-model="selectedTemplate.catalogId" class="combobox form-control input-sm" ng-options="item.id as item.name for item in catalogs"><select>';var n="";return l.catalogsDic[e]&&null!=l.catalogsDic[e].name&&(n=l.catalogsDic[e].name),n}},{targets:4,data:"dataSourceId",render:function(e,t,a){if(0<a.isEdit)return'<select style="width:100%" ng-model="selectedTemplate.dataSourceId" class="combobox form-control input-sm" ng-options="item.id as item.name for item in dataSources"><select>';var n="";return l.dataSourcesDic[e]&&null!=l.dataSourcesDic[e]&&(n=l.dataSourcesDic[e].name),n}},{targets:6,data:"fileName",render:function(e,t,a){return 3!=a.isEdit&&2!=a.isEdit||"display"!=t?e:"<uploader-div/>"}},{targets:5,data:"insertTime",render:function(e,t,a){return n("date")(e,"yyyy-MM-dd HH:mm:ss")}},{targets:7,data:"option",render:function(e,t,a){var n="";return 0<a.isEdit?n='<div class="btn-group  btn-group-sm"><a id="save-btn" class="btn btn-default" ><i class="fa fa-check  hidden-lg hidden-md hidden-sm"></i><span class="hidden-xs ng-binding">保存</span></a><a id="cancel-btn" class="btn btn-default" ><i class="fa fa-close hidden-lg hidden-md hidden-sm"></i><span class="hidden-xs ng-binding">取消</span></a></div>':(n+="<div class='btn-group  table-option-group btn-group-sm'>",n+="<button type='button' class='btn btn-default'>操作</button>",n+="<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>",n+="<span class='caret'></span>",n+="<span class='sr-only'>Toggle Dropdown</span>",n+="</button>",n+="<ul class='dropdown-menu' role='menu'>",0==a.existBuildPolicy&&(n+="<li ><a href id='edit-btn'>编辑</a></li>"),n+="<li><a href id='params-btn'>参数</a></li>",n+="<li><a href id='del-btn'>删除</a></li>",n+="</ul>",n+="</div>"),n}}],rowCallback:function(e,t,a){d(e)(l)}})}),a.on("init.dt",function(){var e=$(".special-btn").parent();e.html('<a ng-click="addtemplate()" class="btn btn-default btn-sm"><i class="fa fa-plus"></i><span class="hidden-xs"> 添加模板</span></a>'),d(e)(l)}),a.on("click","#save-btn",function(e){e.stopPropagation();var t=$(this).closest("tr"),a=s.row(t),n=a.data();$('div[name="domainPath"]').attr("model");if(jQuery.trim(l.selectedTemplate.domainPath))if(jQuery.trim(l.selectedTemplate.name))if(jQuery.trim(l.selectedTemplate.title))if(l.selectedTemplate.catalogId)if(l.selectedTemplate.dataSourceId)if(l.selectedTemplate.tplFileName||l.selectedTemplate.zipFileName){var i=l.reportTemplates;for(var d in i)if(i[d].id!=l.selectedTemplate.id&&i[d].name==jQuery.trim(l.selectedTemplate.name))return void r.warning("模板名称已存在!",{});0<n.isEdit&&(n.name=l.selectedTemplate.name,n.title=l.selectedTemplate.title,n.catalogId=l.selectedTemplate.catalogId,n.catalogName=l.catalogsDic[n.catalogId].catalogName,n.dataSourceId=l.selectedTemplate.dataSourceId,n.dataSourceName=l.dataSourcesDic[n.dataSourceId].dataSourceName,n.tplFileName=l.selectedTemplate.tplFileName,n.zipFileName=l.selectedTemplate.zipFileName,n.domainPath=l.selectedTemplate.domainPath,l.doAction("saveTemplate",n,function(e){e&&(n.isEdit=0,n.id=e.id,n.reportParamXML=e.reportParamXML,n.reportParams=e.reportParams,l.selectedTemplate&&(n.fileName=l.selectedTemplate.tplFileName?l.selectedTemplate.tplFileName:l.selectedTemplate.zipFileName),l.selectedTemplate=null,a.cells().invalidate())}))}else r.warning("请选择模板文件",{});else r.warning("请选择数据源",{});else r.warning("请选择模板分类",{});else r.warning("请输入模板标题",{});else r.warning("请输入模板名称",{});else r.warning("请选择管理域",{})}),a.on("click","#cancel-btn",function(e){e.stopPropagation(),l.selectedTemplate=null,!1;var t=$(this).closest("tr"),a=s.row(t);if(2==a.data().isEdit)a.data().isEdit=0,a.cells().invalidate();else{var n=l.reportTemplates;for(var i in n)if(0==n[i].id){l.reportTemplates.splice(i,1);break}a.data().isEdit=0,a.remove().draw(!1)}l.clearUploader()}),a.on("click","#edit-btn",function(e){e.preventDefault();var t=l.reportTemplates;for(var a in t)if(0<t[a].isEdit)return void r.warning("当前有未保存的数据",{});var n=$(this).closest("tr"),i=s.row(n);!0,i.data().isEdit=2,l.selectedTemplate=jQuery.extend(!0,{},i.data()),i.cells().invalidate(),d(n)(l)}),a.on("click","#del-btn",function(e){e.preventDefault();var t=$(this).closest("tr"),a=s.row(t);l.doAction("deleteTemplate",a.data(),function(e){e&&a.remove().draw(!1)})}),a.on("click","#params-btn",function(e){e.preventDefault();var t=$(this).closest("tr"),a=s.row(t);l.doAction("paramsHandler",a.data())}),a.on("click","#pdf-btn",function(e){e.preventDefault();var t=$(this).closest("tr"),a=s.row(t);l.doAction("pdfTemplate",a.data())})}]}}]),e.initDirective("reportPolicyTable",["$timeout","$compile","$filter","growl","weatherService",function(e,n,t,s,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,t){var l,a=e;d.$on(Event.REPORTMODULE+"_policy",function(e,t){l&&l.destroy(),!1,l=a.DataTable({order:[[7,"desc"]],dom:t.data&&0<t.data.length?$.ProudSmart.datatable.special2dom:'<"margin-bottom-5"<"special-btn">>',language:$.ProudSmart.datatable.language,data:t.data,columns:[{data:"domainPath",title:"管理域"},{data:"tplName",title:"报表模板"},{data:"periodTypeValue",title:"生成周期"},{data:"cronExp",title:"触发时间"},{data:"reportFileTypeList",title:"生成格式"},{data:"enabled",title:"是否启用"},$.ProudSmart.datatable.optionCol2,{data:"updateTime",title:"",visible:!1}],columnDefs:[{targets:0,data:"domainPath",render:function(e,t,a){var n="";return e&&null!=d.domainListDic[e]&&d.domainListDic[e]&&(n=d.domainListDic[e].label),n}},{targets:1,data:"tplName",render:function(e,t,a){return escape(e)}},{targets:2,data:"periodTypeValue",render:function(e,t,a){var n="";return d.periodListObj[e]&&null!=d.periodListObj[e].label&&(n=d.periodListObj[e].label),n}},{targets:3,data:"cronExp",render:function(e,t,a){return e}},{targets:4,data:"reportFileTypeList",render:function(e,t,a){return e}},{targets:5,data:"enabled",render:function(e,t,a){return"display"==t?1==e?'<input class="enabledCheckBox" checked type="checkbox">':'<input class="enabledCheckBox" type="checkbox">':""}},{targets:6,data:"option",render:function(e,t,a){return"<button id='edit-btn' class='btn btn-primary' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 编辑</span></button>","<button id='del-btn' class='btn btn-default' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></button>","</div>","<div class='btn-group btn-group-sm'><button id='edit-btn' class='btn btn-primary' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 编辑</span></button><button id='del-btn' class='btn btn-default' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></button></div>"}}],rowCallback:function(e,t,a){n(e)(d)}})}),a.on("init.dt",function(){var e=$(".special-btn").parent();e.html('<a ng-click="policyhandler()" class="btn btn-default btn-sm"><i class="fa fa-plus"></i><span class="hidden-xs"> 添加策略</span></a>'),n(e)(d)}),a.on("click","#edit-btn",function(e){e.preventDefault();var t=$(this).closest("tr"),a=l.row(t),n=jQuery.extend(!0,{},a.data());d.doAction("editpolicy",n,function(e){e&&a.remove().draw(!1)})}),a.on("click","#del-btn",function(e){e.preventDefault();var t=$(this).closest("tr"),a=l.row(t);d.doAction("deletepolicy",a.data(),function(e){e&&a.remove().draw(!1)})}),a.on("change",".enabledCheckBox",function(t){var a=this,e=$(this).closest("tr"),n=l.row(e),i=n.data();t.target.checked?(n.data().enabled=!0,i.enabled=1):(n.data().enabled=!1,i.enabled=0),d.doAction("AlertEnable",i,function(e){0==e.code?(l.rows().invalidate().draw(!1),t.target.checked?($(a).attr("checked",!0),s.success("启用成功",{})):($(a).prop("checked",!1),s.success("停用成功",{}))):e||(t.target.checked?(n.data().enabled=!1,$(a).attr("checked",!1)):(n.data().enabled=!0,$(a).prop("checked",!0)))},!0)})}]}}])});
//# sourceMappingURL=../../../map/app-oc/js/directives/report-manager-dom.js.map
