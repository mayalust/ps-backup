define(["directives/directives","datatables.net","datatables.net-bs"],function(t,e){"use strict";t.initDirective("contractTermsTable",["$timeout","$compile","$filter","userEnterpriseService","growl",function(t,d,l,e,f){return{restrict:"A",controller:["$scope","$element","$attrs",function(i,t,e){var m,a=t,n=!1,s=!1;i.$on(Event.CONTECTITEMSINIT,function(t,e){m&&(m.destroy(),a.empty()),s&&(s=!1),n=!1,m=a.DataTable({dom:e.option[0]&&0<e.option[0].length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,select:$.ProudSmart.datatable.select,data:e.option[0],ordering:!1,order:[[7,"desc"]],columns:[{data:"customerId",title:"客户名称"},{data:"projectId",title:"项目名称"},{data:"label",title:"合同条款名称"},{data:"takeEffectTime",title:"生效日期"},{data:"loseEfficacyTime",title:"失效日期"},$.ProudSmart.datatable.optionCol3,{data:"id",visible:!1,title:""},{data:"createTime",visible:!1,title:""}],columnDefs:[{targets:0,data:"customerId",render:function(t,e,a){var n="";if(2!=a.isEdit||0!=a.id||"display"!=e)return i.customersObj&&i.customersObj[t]&&(n=i.customersObj[t].customerName),escape(n);return' <select style="width:100%;"  ng-model="customor.id" class="form-control select2" selectdata="CustomerList"  ng-options="value.id as value.customerName for value in CustomerList"  ng-change="alertFunCustom()"  select2></select>'}},{targets:1,data:"projectId",render:function(t,e,a){if(2==a.isEdit&&"display"==e)return'<select ng-model="selTableProjectId" ng-change="alertFunProId(selTableProjectId)" id="projectlists" name="projectId" style="width:100%" class="combobox form-control" ng-options="item.id as item.projectName for item in selTableProject"><option value="">请选择项目</option><option selected="selected">'+a.projectName+"</option><select>";var n="";return null!=i.projectObj[t]&&(n='<a href="index.html#/projectManagement/'+i.projectObj[t].id+' " ng-click="linkProject('+i.projectObj[t].id+')">'+escape(i.projectObj[t].projectName)+"</a>"),n}},{targets:2,data:"label",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input style='width:100%' class='form-control ' autocomplete='off' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:3,data:"takeEffectTime",render:function(t,e,a){return 0<a.isEdit?"<input style='width:100%' autocomplete='off' class='form-control ' type='text' readonly='readonly' value='"+l("date")(t,"yyyy-MM-dd")+"' drops='down' date-time-picker>":l("date")(t,"yyyy-MM-dd")}},{targets:4,data:"loseEfficacyTime",render:function(t,e,a){return 0<a.isEdit?"<input style='width:100%' autocomplete='off' class='form-control ' type='text' readonly='readonly' drops='down' value='"+l("date")(t,"yyyy-MM-dd")+"' date-time-picker>":l("date")(t,"yyyy-MM-dd")}},{targets:5,data:"option",render:function(t,e,a){var n="<div class='btn-group btn-group-sm'>";return 0<a.isEdit?(n+="<button id='save-btn' class='btn btn-primary' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 保存</span></button>",n+="<button id='cancel-btn' class='btn btn-default' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 取消</span></button>"):(i.menuitems.A02_S14&&(n+="<button id='edit-btn' class='btn btn-primary' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 编辑</span></button>"),i.menuitems.A03_S14&&(n+="<button id='del-btn' class='btn btn-default' ><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></button>"),i.menuitems.A05_S14&&(n+="<button id='devicelist-btn' class='btn btn-default' ><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 设备</span></button>")),n+="</div>"}}],rowCallback:function(t,e,a){d(t)(i)}})}),a.on("init.dt",function(){}),a.on("click","td",function(t){t.preventDefault();var e=$(this).closest("tr");m.row(e).data()}),a.on("click","#edit-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=m.row(e);if(n){if(0==a.data().isEdit)return void f.warning("当前有正编辑的合同条款",{})}else n=!0,a.data().isEdit=2,i.selTableProject=i.getselectedProject(a.data().customerId),i.selTableProjectId=a.data().projectId,a.cells().invalidate().draw(!1);0!=a.data().id||f.warning("当前有正编辑的合同条款",{})}),a.on("click","#save-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),d=m.row(e),l="",o="",r=!0,c="",u="";$.each(e.children(),function(t,e){var a=$(e);if(0==t){if(!d.data().customerId)return $(e).addClass("danger"),r=!1;$(e).removeClass("danger")}if(1==t){if(!d.data().projectId)return $(e).addClass("danger"),r=!1;$(e).removeClass("danger")}if(!a.has("button").length&&a.has("input").length){var n=$.trim(a.children("input").val());if(!n)return $(e).addClass("danger"),r=!1;if(2==t&&(m.cell(a).data(n),d.data().label=n),3==t){var i=Date.parse(n);l=new Date(i),c=l}if(4==t){var s=Date.parse(n);if((o=new Date(s))<=l)return f.warning("请选择大于生效日期的日期点",{}),$(e).addClass("danger"),r=!1;u=o}$(e).removeClass("danger")}}),r&&(d.data().takeEffectTime=c,d.data().loseEfficacyTime=u,i.doAction("saveContracts",d.data(),function(t){t?(d.data().isEdit=0,d.data().id=t.id,n=!1,d.cells().invalidate().draw(!1)):d.data().isEdit=2}))}),a.on("click","#cancel-btn",function(t){if(t.stopPropagation(),n=!1,(e=m.row(".shown")).data())e.data().isEdit=0,s=!1,i.selCustomor="",i.doAction("cancel",e.data());else{var e,a=$(this).closest("tr");(e=m.row(a)).data().isEdit=0,s=!1,i.selCustomor="",i.doAction("cancel",e.data())}}),a.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=m.row(e);i.doAction("deleteContract",a.data(),function(t){0!=t?(a.data().isEdit=2,s=!1):(a.data().isEdit=0,a.remove().draw(!1))})}),a.on("click","#devicelist-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=m.row(e);if(s)f.info("请先关闭之前设备列表再打开",{});else{s=!0;a.child('<div class="box"><div class="box-body table-responsive"><div class="margin-bottom-10"><select style="width:20%;" ng-model="selected.devicesId"  ng-change="changeDevices();" class="form-control select2" ng-options="value.id as value.label for value in facilitySelList" selectdata="facilitySelList" select2></select> <div class="pull-right"><a id="savesel-table" ng-click="saveselDevices()" class="btn btn-primary btn-sm margin-right-5"><i class="fa fa-save"></i><span class="hidden-xs"> 保存</span></a><a id="close-table" class="btn btn-default btn-sm"><i class="fa fa-times"></i><span class="hidden-xs"> 关闭</span></a></div> </div><table width="100%" class="table" device-list-table></table></div></div>').show(),e.addClass("shown"),e.addClass("bg-f5f5f5"),e.next().addClass("bg-f5f5f5"),d(e)(i),d(e.next())(i),i.doAction("showDeviceList",a.data())}}),a.on("click","#close-table",function(t){t.preventDefault();var e=$(this).closest("tr"),a=m.row(e);s=!1,i.doAction("cancel",a.data())})}]}}]),t.initDirective("projectManageTable",["$timeout","ngDialog","$compile","$filter","growl",function(t,i,c,l,e){return{restrict:"A",controller:["$scope","$element","$attrs",function(o,t,e){var r,d=t;o.$on(Event.PROJECTMANAGEINIT,function(t,e){r&&(r.destroy(),d.empty());var a=[{data:"domainPath",title:(o.menuitems.S12&&o.menuitems.S12.label?o.menuitems.S12.label:"客户")+"归属"},{data:"customerId",title:(o.menuitems.S12&&o.menuitems.S12.label?o.menuitems.S12.label:"客户")+"名称"},{data:"projectName",title:(o.menuitems.S13&&o.menuitems.S13.label?o.menuitems.S13.label:"项目")+"名称"}],n=[{targets:0,data:"domainPath",render:function(t,e,a){t=escape(t);return 2==a.isEdit&&"display"==e?'<div class="dropdowntree select-sm" ng-model="selEditInfo.domainPath" change="" key="domainPath" options="domainListTree" mark="nodes" />':t&&o.domainListDic[t]?o.domainListDic[t].label:"无"}},{targets:1,data:"customerId",render:function(t,e,a){t=escape(t);if(2!=a.isEdit||"display"!=e)return t&&o.customerDic[t]?o.customerDic[t].customerName:"";return' <select style="width:100%;" ng-model="selEditInfo.customerId" class="form-control select2" selectdata="CustomerList" select2></select>'}},{targets:2,data:"projectName",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input style='width:100%' class='form-control input-sm' autocomplete='off' type='text' value='"+escape(t)+"'>":escape(t)}}];if(1<e.option.length&&1<e.option[1].length)e.option[1].forEach(function(i){a.push({data:i.name,title:i.label}),n.push({targets:a.length-1,data:i.name,render:function(t,e,a){var n="";return a.values&&a.values[i.name]&&(n=a.values[i.name]),n}})});else{var i=[{data:"projectAddress",title:"项目地址",render:function(t,e,a,n){var i=t;return null!=a.values&&null!=a.values&&null!=a.values.standardAddress&&null!=a.values.standardAddress&&(i=a.values.standardAddress.split(",").join("")+" "+t),i}},{data:"installDate",title:"项目安装时间"},{data:"debugFinishDate",title:"调试完成时间"},{data:"qualityCloseDate",title:"质保截止时间"}];o.menuitems.S46&&i.push({data:"distributorId",title:"经销商名称"}),a=a.concat(i);var s=[{targets:3,data:"projectAddress",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input style='width:100%' class='form-control input-sm' autocomplete='off' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:4,data:"installDate",render:function(t,e,a){return 0<a.isEdit?"<input style='width:100%' autocomplete='off' class='form-control input-sm' type='text' readonly='readonly' value='"+l("date")(t,"yyyy-MM-dd")+"' date-time-picker>":l("date")(t,"yyyy-MM-dd")}},{targets:5,data:"debugFinishDate",render:function(t,e,a){var n="";return 0<a.isEdit?"<input style='width:100%' autocomplete='off' class='form-control input-sm' type='text' readonly='readonly' value='"+l("date")(t,"yyyy-MM-dd")+"' date-time-picker>":(t&&(n=l("date")(t,"yyyy-MM-dd")),n)}},{targets:6,data:"qualityCloseDate",render:function(t,e,a){return 0<a.isEdit?"<input style='width:100%' autocomplete='off' class='form-control input-sm' type='text' readonly='readonly' value='"+l("date")(t,"yyyy-MM-dd")+"' date-time-picker>":l("date")(t,"yyyy-MM-dd")}}];o.menuitems.S46&&s.push({targets:7,data:"distributorId",render:function(t,e,a){var n="";return 2!=a.isEdit||"display"!=e?t&&o.distributorDic[t]?o.distributorDic[t].distributorName:(-1==t&&(n="无"),n):n=' <select style="width:100%;" ng-model="selEditInfo.distributorId"  class="form-control select2" selectdata="distributorList" select2></select>'}}),n=n.concat(s)}a.push({data:"risingTime",title:"",visible:!1}),a.push($.ProudSmart.datatable.optionCol3),n.push({targets:a.length-1,data:"option",render:function(t,e,a){var n="<div class='btn-group btn-group-sm'>";return 2==a.isEdit?(n+="<button id='save-btn' class='btn btn-primary' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 保存</span></button>",n+="<button id='cancel-btn' class='btn btn-default' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 取消</span></button>"):(o.menuitems.A03_S13&&(n+="<button id='edit-btn' class='btn btn-primary' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 编辑</span></button>"),o.menuitems.A04_S13&&(n+="<button id='del-btn' class='btn btn-default' ><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></button>"),o.menuitems.A01_S13&&(n+="<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'> 更多<span class='caret'></span></button>",n+="<ul class='dropdown-menu' role='menu'>",o.menuitems.A01_S13&&(n+="<li><a href='#/facility/project/"+a.id+"'>设备信息</a></li></ul>"))),n+="</div>"}}),r=d.DataTable({dom:e.option&&1<=e.option[0].length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,select:$.ProudSmart.datatable.select,data:e.option[0],order:[[a.length-2,"desc"]],columns:a,columnDefs:n,rowCallback:function(t,e,a){c(t)(o)}})}),d.on("init.dt",function(){var t=$(".special-btn").parent();c(t)(o)}),d.on("click","#edit-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=r.row(e);if(a.data().installDate=l("date")(a.data().installDate,"yyyy-MM-dd"),a.data().debugFinishDate=l("date")(a.data().debugFinishDate,"yyyy-MM-dd"),a.data().qualityCloseDate=l("date")(a.data().qualityCloseDate,"yyyy-MM-dd"),a.data().values.standardAddress){o.provinces=o.$parent.provinces,o.cityDics=o.$parent.cityDics,o.districtDics=o.$parent.districtDics;var n=a.data().values.standardAddress.split(",");a.data().province=n[0],n[1]&&(a.data().city=n[0]+","+n[1]),n[2]&&(a.data().county=a.data().values.standardAddress)}else a.data().province="",a.data().city="",a.data().county="";$.extend(o.projectInfo,a.data()),i.open({template:"../partials/dialogue/project_management_dia.html",className:"ngdialog-theme-plain",scope:o})}),d.on("click","#save-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),s=r.row(e),d="",l=!0;$.each(e.children(),function(t,e){var a=$(e);if(0==t){if(!o.selEditInfo.domainPath)return $(e).addClass("danger"),l=!1;$(e).removeClass("danger"),s.data().domainPath=o.selEditInfo.domainPath}if(1==t){if(!o.selEditInfo.customerId)return $(e).addClass("danger"),l=!1;$(e).removeClass("danger"),s.data().customerId=o.selEditInfo.customerId}if(3==t){if(!o.selEditInfo.distributorId)return $(e).addClass("danger"),l=!1;$(e).removeClass("danger"),s.data().distributorId=o.selEditInfo.distributorId}if(!a.has("button").length&&a.has("input").length){var n=$.trim(a.children("input").val());if(!n)return $(e).addClass("danger"),l=!1;if(2==t){if(/^\s*$/g.test(n))return $(e).addClass("danger"),l=!1;s.data().projectName=n,l=!0}if(4==t){if(/^\s*$/g.test(n))return $(e).addClass("danger"),l=!1;s.data().projectAddress=n,l=!0}if(5==t||6==t||7==t){var i=Date.parse(n);d=new Date(i),r.cell(a).data(d)}$(e).removeClass("danger"),r.cell(a).data(n)}}),l&&o.doAction("saveProject",s.data(),function(t){0!=t.code?(s.data().isEdit=2,s.data().id=0):(s.data().isEdit=0,s.data().id=t.data.id,s.cells().invalidate().draw(!1),c(e)(o))})}),d.on("click","#cancel-btn",function(t){if(t.stopPropagation(),(e=r.row(".shown")).data())e.data().isEdit=0,o.doAction("cancel",e.data());else{var e,a=$(this).closest("tr");(e=r.row(a)).data().isEdit=0,o.doAction("cancel",e.data())}}),d.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=r.row(e);o.doAction("deleteProject",a.data(),function(t){0!=t||a.remove().draw(!1)})})}]}}]),t.initDirective("faciDeviceTable",["$timeout","$compile","$filter",function(t,n,e){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,t,e){var i,a=t;d.$on(Event.SELDEVICEINIT+"_faciDivice",function(t,e){i&&(i.destroy(),a.empty()),!1,i=a.DataTable({dom:e&&0<e.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,select:$.ProudSmart.datatable.select,data:e,order:[[1,"desc"]],columns:[$.ProudSmart.datatable.selectCol,{data:"custermerId",title:"客户"},{data:"modelId",title:"型号"},{data:"label",title:"名称"},{data:"sn",title:"序列号"}],columnDefs:[{orderable:!1,targets:0,render:function(t,e,a){return"display"==e?1001==a.check?'<input class="itemCheckBox" checked type="checkbox" >':'<input class="itemCheckBox" type="checkbox" ng-checked="full.check == 1001">':""}},{targets:1,data:"customerId",render:function(t,e,a){var n="";for(var i in d.CustomerList)d.CustomerList[i].customerID==t&&(n=d.CustomerList[i].customerName);return n}},{targets:2,data:"modelId",render:function(t,e,a){var n="";for(var i in d.modelListSelect){var s=d.modelListSelect[i];if(s.id==t)return s.label}return n}}],rowCallback:function(t,e,a){e.check?$(t).addClass("selected"):$(t).removeClass("selected"),n(t)(d)}})}),a.on("change","#allselect-btn",function(t){if(t.stopPropagation(),t.target.checked){for(var e=i.rows({selected:!0}),a=0;a<e.nodes().length;a++){i.row(e.nodes()[a]).data().check=1001}i.rows().invalidate().draw(!1)}else{for(e=i.rows({selected:!0}),a=0;a<e.nodes().length;a++){i.row(e.nodes()[a]).data().check=0}i.rows().invalidate().draw(!1)}}),a.on("click","td",function(t){t.preventDefault();var e=$(this).closest("tr"),a=i.row(e),n=a.data();1001!=n.check?n.check=1001:n.check=0,a.cells().invalidate()})}]}}]),t.initDirective("deviceListTable",["$timeout","$compile","$filter",function(t,i,e){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,t,e){var n,a=t;d.$on(Event.SELDEVICEINIT,function(t,e){n&&(n.destroy(),a.empty()),!1,n=a.DataTable({dom:e.option[0]&&0<e.option[0].length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:e.option[0],columns:[{data:"modelId",title:"设备模板"},{data:"label",title:"设备名称"},{data:"sn",title:"设备序列号"},$.ProudSmart.datatable.optionCol1],columnDefs:[{targets:0,width:"20%",data:"modelId",render:function(t,e,a){var n="";if(3==a.isEdit)n='<select style="width:100%;" ng-model="selected.devicesId"  class="form-control select2" ng-options="value.id as value.label for value in facilitySelList" selectdata="facilitySelList" select2></select>';else for(var i in d.modelListSelect){var s=d.modelListSelect[i];if(s.id==t){n=s.label;break}}return n}},{targets:1,data:"label",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input maxlength='20' style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:3,data:"option",render:function(t,e,a){var n="<div class='input-group'>";return 2==a.isEdit||3==a.isEdit?(n+="<a id='save-btn'  class='btn btn-default btn-sm' ><i class='fa fa-save hidden-lg hidden-md hidden-sm '></i><span class='hidden-xs'> 保存</span></a>",n+="<a id='cancel-btn' class='btn btn-default btn-sm' ><i class='fa fa-times  hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 取消</span></a>"):n+="<a id='delDevice-btn' class='btn btn-default btn-sm' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 移出</span></a>",n+="</div>"}}],rowCallback:function(t,e,a){e.check?$(t).addClass("selected"):$(t).removeClass("selected"),i(t)(d)}})}),a.on("init.dt",function(){}),a.on("click","td",function(t){t.preventDefault();var e=$(this).closest("tr");n.row(e).data()}),a.on("click","#delDevice-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=n.row(e);d.doActionss("removeDevice",a.data()),a.remove().draw(!1)})}]}}]),t.initDirective("deviceProjectTable",["$timeout","$compile","$filter",function(t,e,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,t,e){var a,n=t;d.$on(Event.PRODEVICEINIT,function(t,e){a&&(a.destroy(),n.empty()),!1,a=n.DataTable({dom:e.option[0]&&0<e.option[0].length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:e.option[0],order:[[0,"desc"]],columns:[{data:"modelId",title:"设备模板"},{data:"deviceName",title:"设备名称"},{data:"serialNo",title:"设备序列号"}],columnDefs:[{targets:0,data:"modelId",render:function(t,e,a){var n="";for(var i in d.modelListSelect){var s=d.modelListSelect[i];if(s.id==t)return s.label}return n}}]})})}]}}]),t.initDirective("faultKnowledgeTable",["$timeout","$compile","$filter","growl",function(t,n,e,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(l,t,e){var o,a=t,r=!1;function s(t){var e;if(0<t.isEdit){for(var a in e='<table width="100%" class="table table-inner">',t)e+='<tr role="row">',"phenomenon"==a?(e+='<td style="width:19%;">故障现象:</td>',e+='<td><textarea rows="7" cols="20" autocomplete="off" datatype="'+t.phenomenon+'" style="width:75%;resize: none;" class="form-control input-sm" name="phenomenon" value="'+t.phenomenon+'">'+t.phenomenon+"</textarea></td>"):"cause"==a?(e+='<td style="width:19%;">产生原因:</td>',e+='<td><textarea rows="7" cols="20" autocomplete="off" datatype="'+t.cause+'" style="width:75%;resize: none;" class="form-control input-sm" name="cause" value="'+t.cause+'">'+t.cause+"</textarea></td>"):"processingMethod"==a&&(e+='<td style="width:19%;">处理方法:</td>',e+='<td><textarea rows="7" cols="20" autocomplete="off" datatype="'+t.processingMethod+'" style="width:75%;resize: none;" class="form-control input-sm" name="processingMethod" value="'+t.processingMethod+'">'+t.processingMethod+"</textarea></td>"),e+="</tr>";e+="</table>"}else{for(var a in e='<table width="100%" class="table table-inner">',t)e+='<tr role="row">',"phenomenon"==a?(e+='<td style="width:19%;">故障现象:</td>',e+='<td><div style="width: 90%;height:auto;">'+t.phenomenon+"</div></td>"):"cause"==a?(e+='<td style="width:19%;">产生原因:</td>',e+='<td><div style="width: 90%;height:auto;">'+t.cause+"</div></td>"):"processingMethod"==a&&(e+='<td style="width:19%;">处理方法:</td>',e+='<td><div style="width: 90%;height:auto;">'+t.processingMethod+"</div></td>"),e+="</tr>";e+="</table>"}return e}l.$on(Event.FAULTKNOWLEDGEINIT,function(t,e){o&&(o.destroy(),a.empty()),r=!1,o=a.DataTable({dom:e.option&&0<e.option.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:e.option[0],order:[[0,"asc"]],columns:[{data:"faultNo",title:"故障编号"},{data:"label",title:"故障名称"},{data:"category",title:"故障类别"},{data:"desc",title:"故障关键字"},{data:"severity",title:"严重级别",width:"15%"},$.ProudSmart.datatable.optionCol2,{data:"id",title:"",visible:!1}],columnDefs:[{targets:0,data:"faultNo",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input maxlength='20' style='width:100%' autocomplete='off' class='form-control input-sm' type='text' value='"+escape(t)+"' name = 'faultNo'>":escape(t)}},{targets:1,data:"label",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input maxlength='20' style='width:100%' autocomplete='off' class='form-control input-sm' type='text' value='"+escape(t)+"' name = 'label'>":escape(t)}},{targets:2,data:"category",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input maxlength='50' style='width:100%' autocomplete='off' class='form-control input-sm' type='text' value='"+escape(t)+"'  name = 'category'>":escape(t)}},{targets:3,data:"desc",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input maxlength='50' style='width:100%' autocomplete='off' class='form-control input-sm' type='text' value='"+escape(t)+"' name = 'desc'>":escape(t)}},{targets:4,data:"severity",render:function(t,e,a){if(2==a.isEdit&&"display"==e){return'<select ng-model="selSeverity" ng-change="alertFun(selSeverity)" id="severity" name="severity" style="width:100%" class="combobox form-control" ng-options="item.severNo as item.severName for item in severiesList"><option value="">请选择...</option><select>'}var n="无数据",i="alerts-warning";return 4==t?(n="严重",i="alerts-critical"):3==t?(n="重要",i="alerts-major"):2==t?(n="次要",i="alerts-minor"):1==t&&(n="警告",i="alerts-warning"),"<span class='label "+i+"'>"+n+"</span>"}},{targets:5,data:"option",render:function(t,e,a){var n="";return 2==a.isEdit?n+='<div class="btn-group btn-group-sm"><a id="save-btn" class="btn btn-default"><i class="fa fa-check  hidden-lg hidden-md hidden-sm "></i><span class="hidden-xs ng-binding">保存</span></a><a id="cancel-btn" class="btn btn-default" ><i class="fa fa-close hidden-lg hidden-md hidden-sm"></i><span class="hidden-xs ng-binding">取消</span></a></div>':(n+='<div class="btn-group btn-group-sm">',l.menuitems.A02_S10&&(n+='<a id="edit-btn" class="btn btn-primary"><i class="fa fa-check  hidden-lg hidden-md hidden-sm "></i><span class="hidden-xs ng-binding">编辑</span></a>'),l.menuitems.A03_S10&&(n+='<a id="del-btn" class="btn btn-default" ><i class="fa fa-close hidden-lg hidden-md hidden-sm"></i><span class="hidden-xs ng-binding">删除</span></a></div>')),n}}],rowCallback:function(t,e,a){n(t)(l)}})}),a.on("init.dt",function(){}),a.on("click","td",function(t){t.preventDefault();var e=$(this).closest("tr"),a=o.row(e);if(5!=$(this).context.cellIndex||0!=a.data().isEdit){var n=a.data();if(n)if(a.child.isShown())0==a.data().isEdit||null==a.data().isEdit?(a.child.hide(),e.removeClass("shown")):2==a.data().isEdit&&(e.hasClass("shown")||(a.child(s(n)).show(),e.addClass("shown")));else{var i=a.data();0==i.isEdit||null==i.isEdit?a.child(s(i)).show():2==i.isEdit&&(e.hasClass("shown")||(a.child(s(n)).show(),e.addClass("shown")))}}}),a.on("click","#edit-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=o.row(e);if(r){if(0==a.data().isEdit)return void c.warning("当前有正编辑的故障知识",{})}else r=!0,a.data().isEdit=2,l.selSeverity=a.data().severity,a.cells().invalidate(),n(e)(l)}),a.on("click","#save-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),a=o.row(e),n=$(this).parents("tr").children(),i=null;for(var s in a.data())"isEdit"==s&&2==a.data()[s]&&(i=a.data());if($.each(n,function(t,e){var a=$(e);if(4==t){if(!i.severity)return $(e).addClass("danger"),!(r=!0);r=!1,$(e).removeClass("danger")}if(!a.has("button").length&&a.has("input").length){var n=$.trim(a.children("input,textarea").val());if(!n)return $(e).addClass("danger"),!(r=!0);$(e).removeClass("danger"),r=!1,o.cell(a).data(n)}}),i){var d=e.parent().find(".input-sm");0==r&&$.each(d,function(t,e){var a=$(e).val(),n=$(e).attr("name");if(3e3<a.length)return c.warning("您输的字符超限，请控制在3000字符以内",{}),!(r=!0);i[n]=a,r=!1}),0==r&&l.doAction("savefaultKnowledge",i,function(t){t?(i.isEdit=0,i.id=t.id,r=!1,e.removeClass("shown"),a.cells().invalidate().draw(!1),a.child.hide()):(i.isEdit=2,i.id=0)})}else c.warning("请填写完整故障知识",{})}),a.on("click","#cancel-btn",function(t){if(t.stopPropagation(),r=!1,(e=o.row(".shown")).data())e.data().isEdit=0,l.doAction("cancel",e.data());else{var e,a=$(this).closest("tr");(e=o.row(a)).data().isEdit=0,l.doAction("cancel",e.data())}}),a.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=o.row(e);l.doAction("deletefaultKnowledge",a.data(),function(t){0!=t?selectRow.isEdit=2:a.remove().draw(!1)})})}]}}])});
//# sourceMappingURL=../../../map/app-oc/js/directives/project-dom.js.map