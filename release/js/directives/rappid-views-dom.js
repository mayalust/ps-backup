define(["directives/directives","datatables.net","datatables.net-bs"],function(o,t){"use strict";o.initDirective("rappidViewsDom",["$timeout","$compile","$filter","growl",function(t,n,i,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(s,t,e){var l,a=t,d=!1;s.$on("RAPPIDVIEWS",function(t,e){l&&l.destroy(),d=!1,l=a.DataTable({dom:'<"row"<"col-sm-6"<"special-btn">><"col-sm-6"f>><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:o.datatable.language,data:e.data,order:[2,"desc"],columns:[{data:"viewTitle",title:"视图名称"},{data:"navigate",title:"导航级别"},{data:"createTime",title:"创建时间"},{data:"option",orderable:!1,title:"操作",width:"120px",visible:s.selectedDitem&&s.selectedDitem.canEdit}],columnDefs:[{targets:0,data:"viewTitle",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:2,data:"createTime",render:function(t,e,a){return i("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:1,data:"navigate",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input maxlength='20' style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:3,data:"option",render:function(t,e,a){return 2==a.isEdit?'<div class="btn-group  btn-group-sm"><a id="save-btn" class="btn btn-default"><i class="fa fa-check  hidden-lg hidden-md hidden-sm"></i><span class="hidden-xs ng-binding">保存</span></a><a id="cancel-btn" class="btn btn-default" ><i class="fa fa-close hidden-lg hidden-md hidden-sm"></i><span class="hidden-xs ng-binding">取消</span></a></div>':"<div class='btn-group  table-option-group btn-group-sm'><button type='button' class='btn btn-default'>操作</button><button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'><span class='caret'></span><span class='sr-only'>Toggle Dropdown</span></button><ul class='dropdown-menu' role='menu'><li><a href id='edit-btn'>编辑</a></li><li><a href id='view-btn'>查看</a></li><li><a href id='design-btn'>设计</a></li><li><a href id='copy-btn'>复制</a></li><li><a href id='del-btn'>删除</a></li></ul></div>"}}]})}),a.on("init.dt",function(){var t=$(".special-btn").parent();t.html('<div class="btn-group btn-group-sm"><a ng-click="addViews()" class="btn btn-default"><i class="fa fa-plus"></i><span class="hidden-xs"> 新建视图</span></a><a ng-click="managePerforms()" class="btn btn-default"><i class="fa fa-edit"></i><span class="hidden-xs"> 管理性能视图</span></a></div>'),n(t)(s)}),a.on("click","#view-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=l.row(e).data();location.href="../app-configure/index.html#/display/"+a.viewId}),a.on("click","#design-btn",function(t){t.preventDefault();var e=$(this).closest("tr");l.row(e).data();location.href="../app-configure/index.html#/configure/"}),a.on("click","#copy-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=l.row(e).data();s.doAction("view-copy",a)}),a.on("click","#edit-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=l.row(e);d||(d=!0,a.data().isEdit=2,a.cells().invalidate())}),a.on("click","#save-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=l.row(e),n=a.data();if(2==n.isEdit){var i=$(this).parents("tr").children();$.each(i,function(t,e){var a=$(e);if(0==t&&(0<a.children("input").length&&!(n=a.children("input").val())))return c.warning("视图名称不能空"),!1;if(0==t||1==t){var n=a.children("input").val();a.html(n),l.cell(a).data(n)}})}s.doAction("view-save",n,function(t){t&&(d=!1,a.data().isEdit=0,a.cells().invalidate())})}),a.on("click","#cancel-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=l.row(e);a.data();d=!1,a.data().isEdit=0,a.cells().invalidate()}),a.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=l.row(e);a.data().isDel=!0;var n=a.data();s.doAction("attr-delete",n,function(t){t&&a.remove().draw(!1)})})}]}}])});
//# sourceMappingURL=../../map/js/directives/rappid-views-dom.js.map