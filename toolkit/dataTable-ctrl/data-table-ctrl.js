/**
 * data-table-controller Created by leonlin.
 */

(function(root, factory){
  if(typeof define === "function" && define.amd){
    /** for AMD use*/
    define([], function(){
      return factory(root);
    })
  } else {
    /** for Global use*/
    root.F$ = root.FjQuery = factory(root);
  }
})(this, function(root){
  var dataTableInstance, arr = [];
  function extend(a, b){
    for(var i in b){
      a[i] = b[i];
    }
  }
  function wrapHtml(dom){
    var wrap = $("<div></div>");
    wrap.append(dom);
    return wrap.html();
  }
  function dataTable(dom, data, columns){
    var dataRemap, api;
    var init = dataTable.init = function(dom, data, columns){
      var self = this;
      dataTableInstance = $(dom).dataTable({
        data : data,
        columns : columns,
        rowCallback : function(row, data, index){
          var tds = $(row).children("td");
          tds.html("");
          var node = self[index] = new dataTable.row(data);
          self.length = (index + 1) > self.length ? (index + 1) : self.length;
          for(var i = 0; i < columns.length; i++){
            if(typeof columns[i].render == "function"){
              var fun = columns[i].render;
              var attr = columns[i].data;
              $(tds.get(i)).append(fun(node, node[attr]));
            }
          }

        }
      });
      api = dataTableInstance.api();
    }
    var row = dataTable.row = function(data){
      extend(this, data);
    }
    row.prototype.remove = function(){
      var inx = dataRemap.indexOf(this);
      var r = api.row(inx);
      r.remove();
      dataRemap.splice(inx, 1);
      api.draw();
    }
    row.prototype.update = function(){
      var inx = dataRemap.indexOf(this);
      var r = api.row(inx);
      r.data(dataRemap.get(inx));
      api.draw();
    }
    row.prototype.data = function(){
      var output = {};
      for(var i in this){
        if(this.hasOwnProperty(i)){
          output[i] = this[i];
        }
      }
      return output;
    }
    extend(init.prototype, {
      length : 0,
      get : function(inx){
        var node = dataRemap[inx];
        return node.data();
      },
      append : function(d){
        this.push(new dataTable.row(d));
        api.row.add(d);
        this.draw();
      },
      draw : function(){
        api.draw();
      },
      search : function(keywords){

      },
      prepend : function(d){
        this.unshift(new dataTable.row(d));
      },
      toArray : function(){
        var output = [];
        for(var i = 0; i < dataRemap.length; i++){
          output.push(dataRemap[i].data());
        }
        return output;
      },
      each : function(callback){
        for(var i=0; i<this.length; i++ ){
          callback(i, this[i]);
        }
      },
      push : arr.push,
      slice : arr.slice,
      splice : arr.splice,
      indexOf : arr.indexOf,
      find : arr.find,
      filter : arr.filter,
      reduce : arr.reduce,
      map : arr.map
    });
    dataRemap = new dataTable.init(dom, data, columns)
    return dataRemap;
  };
  return dataTable
});