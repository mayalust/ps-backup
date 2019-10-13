define(["directives/directives","datatables.net","datatables.net-bs"],function(t,a){"use strict";t.initDirective("durationTable",["$timeout","$compile",function(t,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,t,a){var n,o=t;e.$on(Event.REPORTTREEINIT+"_duration",function(t,a){n&&n.destroy(),!1,n=o.DataTable({dom:'<"row"<"col-sm-6"<"special-btn">><"col-sm-6">><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:$.ProudSmart.datatable.language,data:a.datalist,columns:a.columns,columnDefs:a.columnDefs,scrollX:!0})}),o.on("click","#designname",function(t){t.stopPropagation();var a=$(this).text();e.search(a,"1001")}),o.on("click","#clientnum",function(t){t.stopPropagation();var a=$(this).text();e.search(a,"1000")})}]}}]),t.initDirective("reportLookTable",["$timeout","$compile",function(t,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(n,t,a){var o,e=t;n.$on("reportLook",function(t,a){o&&o.destroy(),!1,o=e.DataTable({dom:a&&0<a.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:a,columns:[{title:"报表名称",data:"reportName"},{title:"生成时间",data:"insertTime"},{title:"报表格式",data:"fileType"},$.ProudSmart.datatable.optionCol2],columnDefs:[{targets:1,data:"insertTime",render:function(t,a,e){var n="";return t&&(n=new Date(t).Format("yyyy-MM-dd hh:mm:ss")),n}},{targets:3,data:"option",render:function(t,a,e){return"<a id='download-btn' class='btn btn-default btn-sm' ><i class='fa fa-times hidden-lg hidden-md hidden-sm '></i><span class='hidden-xs'> 下载</span></a>","</div>","<div class='btn-group btn-group-sm'><a id='download-btn' class='btn btn-default btn-sm' ><i class='fa fa-times hidden-lg hidden-md hidden-sm '></i><span class='hidden-xs'> 下载</span></a></div>"}}]})}),e.on("click","#del-btn",function(t){t.stopPropagation();var a=$(this).text();n.search(a,"1001")}),e.on("click","#download-btn",function(t){t.stopPropagation();var a=$(this).closest("tr"),e=o.row(a).data();window.open(n.url+"/api/rest/downloadReport/reportUIService/download?reportName="+e.reportName+"&reportFileName="+e.reportFileName)})}]}}]),t.initDirective("reportRuleTable",["$timeout","$compile",function(t,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,t,a){var n,o=t;e.$on("reportRule",function(t,a){n&&n.destroy(),!1,n=o.DataTable({dom:a&&0<a.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:a,columns:[{title:"规则名称",data:"userName"},{title:"邮件模板",data:"userName"},{title:"报表名称",data:"userName"},{title:"接收人",data:"userName"},{title:"启用状态",data:"userName"},$.ProudSmart.datatable.optionCol3],columnDefs:[{targets:5,data:"option",render:function(t,a,e){return"<a id='edit-btn' class='btn btn-default btn-sm'><i class='fa fa-save  hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 编辑</span></a>","<a id='del-btn' class='btn btn-default btn-sm' ><i class='fa fa-times hidden-lg hidden-md hidden-sm '></i><span class='hidden-xs'> 删除</span></a>","</div>","<div class='btn-group btn-group-sm'><a id='edit-btn' class='btn btn-default btn-sm'><i class='fa fa-save  hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 编辑</span></a><a id='del-btn' class='btn btn-default btn-sm' ><i class='fa fa-times hidden-lg hidden-md hidden-sm '></i><span class='hidden-xs'> 删除</span></a></div>"}}]})}),o.on("click","#del-btn",function(t){t.stopPropagation();var a=$(this).text();e.search(a,"1001")})}]}}]),t.initDirective("yieldTable",["$timeout","$compile",function(t,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(t,a,e){var n,o=a;t.$on(Event.REPORTTREEINIT+"_yield2",function(t,a){n&&n.destroy(),!1,n=o.DataTable({dom:'<"row"<"col-sm-6"<"special-btn">><"col-sm-6">><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:$.ProudSmart.datatable.language,data:a.datalist,columns:a.columns,columnDefs:a.columnDefs,scrollX:!0})})}]}}])});
//# sourceMappingURL=../../map/js/directives/report-dom.js.map