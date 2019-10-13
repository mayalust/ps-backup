define(["directives/directives","datatables.net","datatables.net-bs"],function(t,a){"use strict";t.initDirective("attrseditTable",["$timeout","$compile",function(t,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,t,a){var l,e=t,i=!1;d.$on(Event.ATTREDITINIT,function(t,a){l&&l.destroy(),i=!1,l=e.DataTable({dom:'<"row"<"col-sm-6"<"special-btn">><"col-sm-6"f>><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:$.ProudSmart.datatable.language,data:a.data,scrollX:!0,columns:[{data:"name",title:"属性名称"},{data:"label",title:"显示名称"},{data:"dataType",title:"数据类型"},{data:"option",orderable:!1,title:"操作",width:"100px",visible:d.selectedDitem&&d.selectedDitem.canEdit}],columnDefs:[{targets:0,data:"name",render:function(t,a,e){return 2==e.isEdit&&"display"==a?"icon"!=e.dataType?"<input style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":"<input style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"' disabled>":escape(t)}},{targets:1,data:"label",render:function(t,a,e){return 2==e.isEdit&&"display"==a?"icon"!=e.dataType?"<input style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":"<input disabled style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:2,data:"dataType",render:function(t,a,e){if(!d.myDicts)return t;if(2==e.isEdit&&"display"==a){var i="<select id='dtSelect' class='combobox form-control input-sm'>";for(var n in i+='<option value="">请选择...</option>',d.myDicts.DataType)d.myDicts.DataType[n].valueCode==t?i+='<option selected="true" value="'+d.myDicts.DataType[n].valueCode+'">'+d.myDicts.DataType[n].label+"</option>":i+='<option value="'+d.myDicts.DataType[n].valueCode+'">'+d.myDicts.DataType[n].label+"</option>";return i+="</select>"}for(var n in d.myDicts.DataType)if(d.myDicts.DataType[n].valueCode==t)return d.myDicts.DataType[n].label;return t}},{targets:3,data:"option",render:function(t,a,e){var i="<div class='btn-group btn-group-sm'>";return e.canEdit&&(2==e.isEdit?(i+="<a id='save-btn' class='btn btn-default' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 保存</span></a>",e.isNew?i+="<a id='del-btn' class='btn btn-default' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></a>":i+="<a id='cancel-btn' class='btn btn-default' ><i class='fa fa-times hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 取消</span></a>"):(i+="<a id='edit-btn' class='btn btn-default' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 修改</span></a>",i+="<a id='del-btn' class='btn btn-default' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></a>")),i+="</div>"}}]})}),e.on("init.dt",function(){if(d.selectedDitem&&d.selectedDitem.canEdit){var t=$(".special-btn").parent();t.html('<a ng-click="addModelSubItem()" class="btn btn-default btn-sm"><i class="fa fa-plus"></i><span class="hidden-xs"> 添加属性</span></a>'),n(t)(d)}}),e.on("change","#dtSelect",function(){var t=$(this).children("option:selected").val(),a=$(this).closest("tr"),i=l.row(a);if("icon"==t)i.data().label="图标",i.data().name="icon",i.data().dataType="icon",i.cells().invalidate();else{var e=$(this).parents("tr").children();$.each(e,function(t,a){var e=$(a);1==t&&(i.data().label=e.children("input").val()),0==t&&(i.data().name=e.children("input").val())}),i.data().dataType=t,i.cells().invalidate()}}),e.on("click","#save-btn",function(t){t.stopPropagation();var a=$(this).closest("tr"),n=l.row(a);if(2==n.data().isEdit){var e=$(this).parents("tr").children(),s=!0;$.each(e,function(t,a){var e=$(a);if(0==t||1==t){if(!(i=e.children("input").val()))return $(a).addClass("danger"),s=!1,n.data().isEdit=2,n.cells().invalidate(),!1;$(a).removeClass("danger")}if(2==t)return(i=$(a).children("select").val())?(e.html(i),l.cell(e).data(i),$(a).removeClass("danger"),!0):(s=!1,$(a).addClass("danger"),!1);if(3==t)return n.cell(e).invalidate(),!0;var i=e.children("input").val();e.html(i),l.cell(e).data(i)}),s&&d.doAction("attr-save",n.data(),function(t){0==t?n.data().isEdit=2:(n.data().id=t.id,n.data().isEdit=0,n.data().isNew=!1,n.cells().invalidate(),i=!1)})}}),e.on("click","#edit-btn",function(t){if(t.preventDefault(),i)d.doAction("thresholdMessage","当前有修改中的属性，请先完成该操作");else{i=!0;var a=$(this).closest("tr"),e=l.row(a);e.data().isEdit=2,e.cells().invalidate()}}),e.on("click","#cancel-btn",function(t){if(t.preventDefault(),i){i=!1;var a=$(this).closest("tr"),e=l.row(a);e.data().isEdit=0,e.cells().invalidate()}}),e.on("click","#del-btn",function(t){t.preventDefault();var a=$(this).closest("tr"),e=l.row(a);e.data().isDel=!0;var i=e.data();d.doAction("attr-delete",i,function(t){t&&e.remove().draw(!1)})})}]}}])});
//# sourceMappingURL=../../map/js/directives/attr-dom.js.map