define({
  "on" : {
    "init" : function(event){
      var target = event.target;
      var id = target.getParameter("id") || target.getValue("device/id");
      var main = target.getParameter("main");
      target.getDomainAreaLineTree_alertStatus(function( find ){
        find.getChildren( function(n,i,l){ return l == 1 }).then( function(children){
          var viewId = find.$attr("values/view/viewId");
          target.getViewById(viewId, function(view){
            var content = view.content;
            var json = JSON.parse(content);
            target.render(json);
            target.on("$loadCiKpiComplete", function(cells){
              for(var i in cells){
                cells[i].attr("circle/opacity", 0);
                cells[i].attr("text/opacity", 0);
              }
              var createMarker = function(index, node){
                var position;
                var cell = cells.find(function(cell){
                  var text = cell.attr("text/text");
                  // 
                  return node.label.indexOf(text) != -1;
                }) || cells[index] || {};
                if(cell && cell.attributes && cell.attributes.position){
                  position = cell.attributes.position;
                } else {
                  position = {
                    x : Math.floor(100 + Math.random() * 300),
                    y : Math.floor(100 + Math.random() * 200)
                  }
                };
                target.createMarker(node.label, function(ins){
                  //  
                  //  
                  //设置状态
                  /**
                  node.$on("statusChanged", function(nd){
                    ins.setAlarmStatus(node.status);
                  });
                   **/
                  ins.setAlarmStatus(node.state);
                  ins.setPos(position);
                  ins.on("click", function(event){
                    node.getPathLocation().then(function(path){
                      target.navigateToTab({
                        index : path,
                        id : node.id
                      });
                    });
                  })
                });
              };
              for(var i in children){
                createMarker(i, children[i])
              }
            });
          });
        });
      });
    }
  }
})