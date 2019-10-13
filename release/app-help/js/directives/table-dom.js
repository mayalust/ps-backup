define(["directives/directives"],function(r){"use strict";r.directive("approveTable",["$timeout","$compile",function(t,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(c,t,e){var s,o=t;c.$on(Event.APPROVEINIT,function(t,e){s&&s.destroy(),s=o.DataTable({dom:'<"row"<"col-sm-12"<"special-btn">><"col-sm-12">><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:r.datatable.language,data:e.data,columns:e.columns,rowCallback:function(t,e,o){n(t)(c)},aaSorting:[[0,"desc"]],columnDefs:e.columnDefs})}),o.on("init.dt",function(){var t=$(".special-btn").parent();t.html('<a ng-click="addProve()" class="pull-right btn btn-default btn-sm"><i class="fa fa-plus"></i><span class="hidden-xs"> 新增</span></a>'),n(t)(c)}),o.on("click","#save-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),o=s.row(e),a=!0,n=$("#protocols").find("option:selected").val(),l=$("#version").find("option:selected").val();return"请选择..."==n||""==n?($("#protocols").parent("td").addClass("danger"),a=!1):(o.data().protocol=n,$("#protocols").parent("td").removeClass("danger"),"请选择..."==l||""==l?($("#version").parent("td").addClass("danger"),!1):(o.data().protocolVersion=l,$("#version").parent("td").removeClass("danger"),$.each(e.children(),function(t,e){var o=$(e);if(!o.has("button").length&&o.has("input").length){var n=$.trim(o.children("input").val());if(n)$(e).removeClass("danger"),s.cell(o).data(n);else if(2==t||3==t)return s.cell(o).data(n),$(e).addClass("danger"),a=!1}}),void(a&&c.doAction("save",o.data()))))}),o.on("click","#protocols",function(t){$(this).closest("tr");var e=$("#protocols  option:selected").val(),o=($("#version option").length,c.protocolVersions);if(""!=e)for(var n in $("#version").html(""),o)o[n].protocol==e&&$("#version").append('<option  value="'+o[n].protocolVersion+'" selected = "selected" >'+o[n].protocolVersion+"</option>");else $("#version").html(""),$("#version").append('<option  value="" selected = "selected" >请选择...</option>')}),o.on("click","#cancel-btn",function(t){t.stopPropagation(),c.doAction("cancel")}),o.on("click","#edit-btn",function(t){t.preventDefault();var e=!1;$(this).parents("tbody").children();if(!e){e=!0;var o=$(this).closest("tr"),n=s.row(o);n.data();n.data().isEdit=2,n.cells().invalidate()}}),o.on("click","#del-btn",function(t){t.preventDefault();var l=$(this).parents("tbody").children();$.each(l,function(t,e){var o=$(e).closest("tr"),n=s.row(o);if(null==n.data()&&l.eq(t).remove(),null!=n.data()){var a=l.eq(t).find("input");$.each(a,function(t,e){var o=$(e).val();$(e).replaceWith(o)})}});var e=$(this).closest("tr"),o=s.row(e);c.doAction("delete",o.data())})}]}}]),r.directive("recordTable",["$timeout","$compile",function(t,l){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,t,o){var n,a=t;e.$on(Event.USERINFOSINIT+"_record",function(t,e){n&&n.destroy(),!1,n=a.DataTable({dom:'<"row"<"col-sm-6"<"special-btn">><"col-sm-6"f>><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:r.datatable.language,data:e.data,columns:e.columns,aaSorting:[[5,"asc"]],columnDefs:e.columnDefs})}),a.on("init.dt",function(){var t=$(".special-btn").parent();t.html('<a  href="#/renew" class="btn btn-default btn-sm"><i  style="float: left;margin-top: 4px;margin-right: 3px;" class="proudsmart ps-renewal"></i><span class="hidden-xs"> 缴费</span></a>'),l(t)(e)}),a.on("click","#price-btn",function(t){var e=$(this).closest("tr"),o=n.row(e).data();location.href="#/renew/"+o.orderNo})}]}}]),r.directive("messageTable",["$timeout","$compile",function(t,l){return{restrict:"A",controller:["$scope","$element","$attrs",function(n,t,e){var a,o=t;n.$on(Event.USERCENTERINIT+"_msg",function(t,e){a&&a.destroy(),a=o.DataTable({dom:'<"row"<"col-sm-12"<"special-btn">><"col-sm-12">><"row"<"clo-sm-12">>t<"row"<"col-sm-2"i><"col-sm-2"l><"col-sm-8"p>>',language:r.datatable.language,data:e.data,columns:e.columns,rowCallback:function(t,e,o){l(t)(n)},columnDefs:e.columnDefs})}),o.on("click","th:eq(0)",function(t){var e=$("input[name='allClick']").is(":checked");$("input[name='msgClick']").prop("checked",e)}),o.on("click","#msgClick",function(t){for(var e=$("input[name='allClick']").is(":checked"),o=document.getElementsByName("msgClick"),n=0,a=0,l=0;l<o.length;l++)1==o[l].checked&&n++,0==o[l].checked&&a++;n==o.length&&$("input[name='allClick']").prop("checked",!0),0<a&&1==e&&$("input[name='allClick']").attr("checked",!1)}),o.on("click","td:nth-child(2)",function(t){var e=$(this).closest("tr"),o=a.row(e).data();"/read"!=n.readMsgStatus&&n.statusUpdate(o)}),o.on("click","td:nth-child(1)",function(t){if("/read"==n.readMsgStatus){var e=$(this).closest("tr"),o=a.row(e).data();n.statusUpdate(o)}})}]}}])});
//# sourceMappingURL=../../../map/app-help/js/directives/table-dom.js.map
