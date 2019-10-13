var _ref,inspector;function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var graph=new joint.dia.Graph({type:"bpmn"}).on({add:function(e,n,t){if(t.stencil){var o={"bpmn.Pool":8,"bpmn.Choreography":2}[e.get("type")];if(o){var i=e.get("size");e.set("size",{width:i.width*o,height:i.height*o},{silent:!0})}}}}),commandManager=new joint.dia.CommandManager({graph:graph}),paper=new joint.dia.Paper((_ref={width:2e3,height:2e3,model:graph,gridSize:10},_defineProperty(_ref,"model",graph),_defineProperty(_ref,"perpendicularLinks",!0),_defineProperty(_ref,"defaultLink",new joint.shapes.bpmn.Flow),_defineProperty(_ref,"validateConnection",function(e,n,t,o,i,a){return e!=t&&!(("target"===i?t:e)instanceof joint.dia.LinkView)}),_defineProperty(_ref,"embeddingMode",!0),_defineProperty(_ref,"frontParentOnly",!1),_defineProperty(_ref,"validateEmbedding",function(e,n){var t=joint.shapes.bpmn.Pool;return n.model instanceof t&&!(e.model instanceof t)}),_ref)).on({"blank:pointerdown":function(e,n,t){_.contains(KeyboardJS.activeKeys(),"shift")?selectionView.startSelecting(e,n,t):(selectionView.cancelSelection(),paperScroller.startPanning(e,n,t))},"cell:pointerdown":function(e,n){(n.ctrlKey||n.metaKey)&&e.model instanceof joint.dia.Element&&!(e.model instanceof joint.shapes.bpmn.Pool)&&(selection.add(e.model),selectionView.createSelectionBox(e))},"cell:pointerup":openTools}),paperScroller=new joint.ui.PaperScroller({autoResizePaper:!0,padding:50,paper:paper});paperScroller.$el.appendTo("#paper-container"),paperScroller.center();var selection=new Backbone.Collection,selectionView=new joint.ui.SelectionView({paper:paper,graph:graph,model:selection,filter:["bpmn.Pool"]}).on({"selection-box:pointerdown":function(e){if(e.ctrlKey||e.metaKey){var n=selection.get($(e.target).data("model"));selection.reset(selection.without(n)),selectionView.destroySelectionBox(paper.findViewByModel(n))}}}),stencil=new joint.ui.Stencil({graph:graph,paper:paper});function openTools(e){if(!inspector||inspector.options.cellView!==e){inspector&&inspector.remove();var n=e.model.get("type");inspector=new joint.ui.Inspector({cellView:e,inputs:inputs[n],groups:{general:{label:n,index:1},appearance:{index:2}}}),$("#inspector-container").prepend(inspector.render().el)}e.model instanceof joint.dia.Element&&!selection.contains(e.model)&&(new joint.ui.FreeTransform({cellView:e}).render(),new joint.ui.Halo({cellView:e,boxContent:function(e){return e.model.get("type")}}).render(),selectionView.cancelSelection(),selection.reset([e.model],{safe:!0}))}function showStatus(e,n){$(".status").removeClass("info error success").addClass(n).html(e),$("#statusbar-container").dequeue().addClass("active").delay(3e3).queue(function(){$(this).removeClass("active")})}stencil.render().$el.appendTo("#stencil-container"),stencil.load([new joint.shapes.bpmn.Gateway,new joint.shapes.bpmn.Activity,new joint.shapes.bpmn.Event,new joint.shapes.bpmn.Annotation,new joint.shapes.bpmn.Pool({attrs:{".":{magnet:!1},".header":{fill:"#5799DA"}},lanes:{label:"Pool"}}),new joint.shapes.bpmn.Group({attrs:{".":{magnet:!1},".label":{text:"Group"}}}),new joint.shapes.bpmn.Conversation,new joint.shapes.bpmn.Choreography({participants:["Participant 1","Participant 2"]}),new joint.shapes.bpmn.Message,new joint.shapes.bpmn.DataObject]),joint.layout.GridLayout.layout(stencil.getGraph(),{columns:100,columnWidth:110,rowHeight:110,dy:20,dx:20,resizeToFit:!0}),stencil.getPaper().fitToContent(0,0,10),stencil.getGraph().get("cells").each(function(e){new joint.ui.Tooltip({target:'.stencil [model-id="'+e.id+'"]',content:e.get("type").split(".")[1],bottom:".stencil",direction:"bottom",padding:0})}),graph.on("add",function(e,n,t){if(t.stencil){var o=paper.findViewByModel(e);o&&openTools(o)}}),KeyboardJS.on("delete, backspace",function(e){$.contains(e.target,paper.el)&&(commandManager.initBatchCommand(),selection.invoke("remove"),commandManager.storeBatchCommand(),selectionView.cancelSelection())}),paper.el.oncontextmenu=function(e){e.preventDefault()},$("#toolbar-container [data-tooltip]").each(function(){new joint.ui.Tooltip({target:this,content:$(this).data("tooltip"),top:"#toolbar-container",direction:"top"})});var toolbar={toJSON:function(){var e=_.uniqueId("json_output");window.open("",e,"menubar=no,location=no,resizable=yes,scrollbars=yes,status=no").document.write(JSON.stringify(graph.toJSON()))},loadGraph:function(){gdAuth(function(){showStatus("loading..","info"),gdLoad(function(e,n){try{var t=JSON.parse(n);graph.fromJSON(t),document.getElementById("fileName").value=e.replace(/.json$/,""),showStatus("loaded.","success")}catch(e){showStatus("failed.","error")}})},!0)},saveGraph:function(){gdAuth(function(){showStatus("saving..","info");var e=document.getElementById("fileName").value;gdSave(e,JSON.stringify(graph.toJSON()),function(e){e?showStatus("saved.","success"):showStatus("failed.","error")})},!0)}};graph.fromJSON(example);
//# sourceMappingURL=../../map/app-flowsheet/src/bpmn.js.map
