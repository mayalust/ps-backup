function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define([],function(){var target={inject:function(e){var t,a;for(var r in e)a=e[t=r],target[t]=a}};return $.fn.freeboard=function(){var cur=this,instance={},previewMode=!1,buttonEnabled=!0,_DROPCONFIG_={greedy:!0,drop:drop},setMode=function(e){previewMode=e},renderLayout=function(D){var E=D.setting;null==E&&(E={color:"transparent",padding:15}),function(e){$(cur).children().remove();var t=$("<div class='wrap'></div>");e.variable=function(t){var a=null;return null==window.variable&&(window.variable={}),window.variable[t]?a=window.variable[t]:e.traveseByChild(function(e){e.$attr("advance/variable")==t&&(a=e,window.variable[t]=e)}),a},e.traverse(function(e,t){t.hasOwnProperty("__onChange__")&&(t.oldValue=t.value)}),previewMode||($(cur).attr("id",e.id),"function"==typeof t.droppable?t.droppable({greedy:!0}):require(["jquery-ui"],function(){t.droppable({greedy:!0})}));previewMode?_($(cur),e.children):($(cur).append(t),_(t,e.children));function k(e,t){for(var a in t){var r;previewMode?"tabItem"==t[a].type?((r=$("<div tabId='tabId_"+t[a].tabId+"' style='display:"+t[a].display+"' class='col-md-12'></div>")).css("background-color","#fff"),r.css("min-height","300px"),"vertical"==t[a].parent.parent.parameters.align&&(r.css("float","left"),r.css("width","calc(100% - 100px)"))):r=$("<div class='col-md-"+t[a].col+"'></div>"):"tabItem"==t[a].type?(r=$("<div tabId='tabId_"+t[a].tabId+"' style='display:"+t[a].display+"' class='col-md-12'></div>")).css("background-color","#fff"):r=$("<div class='col-md-"+t[a].col+" column'></div>"),"ROW"==t[a].$attr("parent/parent/source")&&"float"==t[a].$attr("parent/parent/parameters/alignment")&&r.css("width","auto"),E&&E.padding;var o=$("<div class='wrap'></div>");e.append(r),previewMode||r.attr("id",t[a].id),previewMode?t[a].children&&0<t[a].children.length&&_(r,t[a].children):(r.append(o),_(o,t[a].children))}}function _(S,C){var e=$("<div id='endDom' class='emptyEnd'></div>"),I=!1;for(var t in e.attr("id",$(S).parent().attr("id")),C)!function(r,o){var a,n,e,i=$("<div class='wrap'></div>"),t=$("<div class='btn'><span class='proudsmart ps-edit'></span></div>"),d=$("<div id='move' class='btn move'><span class='proudsmart ps-move'></span></div>"),s=$("<div id='data' class='btn'><span class='proudsmart ps-linked-data'></span></div>"),c=$("<div id='beforeDom' class='empty'></div>"),p=$("<div class='btn'><span class='proudsmart ps-delete'></span></div>"),l=$("<div class='btn'><span class='glyphicon glyphicon-duplicate'></span></div>"),v=$("<div class='btn'><span class='glyphicon glyphicon-duplicate'></span></div>"),u=$("<div class='btn'><span class='glyphicon glyphicon-scissors'></span></div>"),f=$("<div class='tool'></div>"),b=$("<div class='tabWrap'></div>"),y=$("<h3 class='box-title'>标题标题</h3>"),m=$('<div class="box-tools pull-right">\t\t\t\t\t\t\t\t\t\t<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\t\t\t\t\t\t\t\t\t<button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\t\t\t\t\t\t\t\t\t</div>');if(f.append(p),f.append(l),f.append(u),"box"==o.type){y.css("width","100%"),f.append(t);var g=$("<div class='box-header with-border'></div>");g.append(y),n=$("<div class='row column'></div>"),o.style&&n.css(o.style),n.append(g),previewMode?g.append(m):n.append(f)}else"box-body"==o.type?((e=$("<div class='instruct'></div>")).text("内容区"),previewMode?n=$("<div></div>"):(n=$("<div class='row column'></div>")).append(e)):"box-footer"==o.type?((e=$("<div class='instruct'></div>")).text("注释区"),previewMode?n=$("<div></div>"):(n=$("<div class='row column'></div>")).append(e)):"block"==o.type?previewMode?(n=$("<div class='row'></div>"),E&&(n.css("margin-right","-0px"),n.css("margin-left","-0px"))):(n=$("<div class='row column'></div>")).append(f):"tab"==o.type?(previewMode?n=$("<div class='row'></div>"):(n=$("<div class='row column'></div>")).append(f),o.style&&n.css(o.style),n.append(b)):previewMode?n=$("<div class='row'></div>"):(n=$("<div class='row column'></div>")).append(f);var w,h,M=$("<div></div>");w=previewMode?S:i,(h=M)&&w.append(h),a=$("<div></div>"),o.parameters&&y.text(o.parameters.title),$$.loadExternalJs(["../toolkit/component/data-switch.js"],function(e){var t=e(o),a="../../toolkit/component/"+t.type;$$.loadExternalJs([a],function(e){var t=e({Info:target.Info,global:D.layout,location:location,window:window,index:r,element:o,serviceCenterService:target.serviceCenterService,chartOptionService:target.chartOptionService,projectUIService:target.projectUIService,angularStyle:target.angularStyle,timeout:target.timeout,target:previewMode?n:i,tabWrap:b,targetDom:S,coldomInner:i,rowDom:n,previewMode:previewMode,resourceUIService:target.resourceUIService,ticketTaskService:target.ticketTaskService,buttonEnabled:buttonEnabled,alertService:target.alertService,routeParam:target.routeParam,q:target.q,imageslist:target.angularStyle.getParameters().imgSrc.options.map(function(e){return e.value}),traverseColumn:k,onTabClick:target.onTabClick});M.after(t),M.remove()})}),f.append(t),f.append(d),previewMode||(n.append(i),n.attr("id",o.id),n.draggable({cursor:"move",revert:!0,handle:d,start:start,stop:stop,cursorAt:{right:30},helper:function(e){var t=$("<div class='colDrag row'><div class='col-xs-12'><div class='row title'>移动一个区块去其它位置</div><div class='row' id='grid'></div></div></div>");return t},appendTo:$(".drawarea"),containment:$(".drawarea"),revertDuration:0,zIndex:999})),"whole"!=S.attr("id")&&0<C.length&&c.attr({id:o.id}),previewMode||("function"==typeof c.contextMenu&&c.contextMenu("myMenu1",{bindings:{paste:function(e){var t=$(e).attr("id");scope.onInsert({id:t})}}}),p.attr({id:o.id}),p.on("click",function(e,t){scope.$apply(function(){scope.onDelete({event:e,ui:t})})}),u.attr({id:o.id}),u.on("click",function(e,t){scope.$apply(function(){scope.onCut({event:e,ui:t})})}),l.attr({id:o.id}),l.on("click",function(e,t){scope.$apply(function(){scope.onCopy({event:e,ui:t})})}),v.attr({id:o.id}),t.attr({id:o.id}),s.attr({id:o.id}),t.on("click",function(e,t){scope.$apply(function(){scope.onSetting({event:e,ui:{element:a}})})}),s.on("click",function(e,t){scope.$apply(function(){scope.onDataChange({event:e,ui:t})})}));"box-body"!=o.type&&"box-footer"!=o.type?previewMode||S.append(c):I=!0,previewMode&&"col"!=o.type&&"row"!=o.type&&"box"!=o.type&&"box-body"!=o.type&&"box-footer"!=o.type&&"block"!=o.type&&"tab"!=o.type||S.append(n);var x=_DROPCONFIG_.$clone();x.over=over,x.out=out,x.drop=dropBefore,"function"==typeof c.droppable?c.droppable(x):require(["jquery-ui"],function(){c.droppable(x)}),previewMode?"box"==o.type?_(n,o.children):o.children&&0<o.children.length&&k(n,o.children):"box"==o.type?_(i,o.children):o.children&&0<o.children.length&&k(i,o.children)}(t,C[t]);var a=_DROPCONFIG_.$clone();a.over=over,a.out=out,"function"==typeof e.droppable?e.droppable(a):require(["jquery-ui"],function(){e.droppable(a)}),I||previewMode||(S.append(e),"function"==typeof e.contextMenu?e.contextMenu("myMenu1",{bindings:{paste:function(e){var t=$(e).attr("id");scope.onPaste({id:t})}}}):require(["contextMenu"],function(){e.contextMenu("myMenu1",{bindings:{paste:function(e){var t=$(e).attr("id");scope.onPaste({id:t})}}})}))}}(D.layout)};if(0==typeof arguments.length){if("object"!=_typeof(arguments[0]))throw new Error("parameter is not a object");renderLayout(arguments[0])}else if("option"==arguments[0]){var method=arguments[1],param=arguments[2];eval(method)(param)}function start(e,t){$("#drawarea").css("overflow-y","hidden");var a=$(e.target).attr("id");$("#"+a+".empty").addClass("hideElement"),$("#"+a+".row").addClass("hideElement")}function stop(e,t){$("#drawarea").css("overflow-y","auto");var a=$(e.target).attr("id");$("#"+a+".empty").removeClass("hideElement"),$("#"+a+".row").removeClass("hideElement")}function dropBefore(e,t){scope.onDrop({event:e,ui:t,before:!0})}function over(e,t){$(e.target).attr("id")!=t.draggable.attr("id")&&$(e.target).addClass("hover")}function out(e,t){$(e.target).removeClass("hover")}function overBefore(e,t){$(e.target).children(".wrap").addClass("hover")}function outBefore(e,t){$(e.target).children(".wrap").removeClass("hover")}function drop(e,t){scope.onDrop({event:e,ui:t,before:!1})}return instance.renderLayout=renderLayout,instance.setMode=setMode,instance},target});
//# sourceMappingURL=../../map/toolkit/component/free-board.js.map
