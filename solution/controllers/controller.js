define(function(){
  var treeCache = createCache();
  function createCache(){
    //不可写为 function cache()编译时会丢失包内容
    var cache = function(key, val){
      cache[key] = val;
    }
    return cache;
  }
  return [{
    route : "/rview",
    templateUrl : "tree.html",
    name : "ctrlTest3",
    injector : ["$scope", "$rootScope", "$q", "$location", "resourceUIService", "$routeParams", "commonMethodService", "serviceProxy", "growl"],
    controller : function(scope, rootScope, q, $location, resourceUIService, $routeParams, cms, serviceProxy, growl){
      scope.navigators = [{
        label : "设备视图管理",
        active : true
      }];
      scope.a = 10;
      var ALERTKPI = 999999;
      var treeIns, _res, resourceIdMap = {root:[]}, _projects = [], _devices = [], invalidNodes = [],
        treeViewMap = null;
        events = {},
        push = Array.prototype.push,
        tostring = Object.prototype.toString,
        isObject = isType("Object"),
        isNull = isType("Null"),
        isUndefined = isType("Undefined"),
        isArray = isType("Array"),
        isNumber = isType("Number"),
        isFunction = isType("Function"),
        isString = isType("String"),
        target = cms(),
        treenavigator = $("<div class=\"tree-menu\"></div>"),
        resource = target.getParameter("resource"),
        _role = target.getValue("global/ROLE"),
        icons = ['tag tag-green', 'tag tag-yellow', 'tag tag-orange', 'tag tag-red'],
        extendstr = "includeFields=id,label,modelId,values.view.viewTitle,values.view.viewId,domains,resourcetype,viewType",
        _LOCATION = [null, "index", "navigate", "factory", "production"],
        _onlyDeviceClickable = (function(param){
          return param.navitype == "device";
        })(target.parameters || {}),
        _backToMainWhileDeviceChange = false,
        LOC = {
          "300" : "domain",
          "301" : "customer",
          "302" : "project",
          "1000" : "device"
        };
      function nextTick(fn){
        setTimeout(fn, 100);
      }
      function pushBack(arr, obj){
        if(isArray(obj)){
          push.apply(arr, obj)
        } else {
          push.call(arr, obj)
        }
      }
      function isType(type){
        return function(obj){
          return tostring.call(obj) == "[object " + type + "]" && obj === obj;
        }
      }
      function isNaN(num){
        return num !== num;
      }
      function bind(target, fn){
        return function() {
          fn.apply(target, arguments);
        }
      }
      function find(arr, callback){
        var i;
        arr = arr || [];
        for(var i = 0; i < arr.length; i++){
          if(callback(arr[i], i)){
            return arr[i];
          }
        }
      }
      function filter(arr, callback){
        var i, rs = [];
        arr = arr || [];
        for(var i = 0; i < arr.length; i++){
          if(callback(arr[i], i)){
            rs.push(arr[i]);
          }
        }
        return rs;
      }
      function clone(obj){
        return JSON.parse(JSON.stringify(obj));
      }
      function extend(a, b){
        for(var i in b){
          a[i] = b[i]
        }
      }
      function each(arr, callback){
        var i;
        arr = arr || [];
        for(i=0; i<arr.length; i++){
          callback && callback(arr[i], i);
        }
      }
      function eachProp(obj, callback){
        var i;
        obj = obj || {};
        for(var i in obj){
          callback && callback(obj[i], i);
        }
      }
      function insertBySort(children, inserted, rule){
        for(var i = children.length - 1; i > -1;){
          if(rule(inserted, children[i])){
            children[i + 1] = children[i];
            i--;
          } else {
            break;
          }
        }
        children[i + 1] = inserted;
      };
      function getLocationByModel(model){
        var viewType = (function(model){
          if(!model) return undefined;
          var attrs = model.attrs || [];
          var viewTypeAttr = attrs.find(function(elem){
            return elem.name == "viewType";
          }) || {};
          return viewTypeAttr.sourceValue;
        })(model);
        return viewType == "motor" ? "motor" : "device";
      }
      function nodeClick(node){
        if(_onlyDeviceClickable && node.modelId < 1000) return;
        serviceProxy.removeAllRequest();
        if(node.setHighlight){
          node.setHighlight(true);
        };
        nextTick(function(){
          if(_onlyDeviceClickable){
            analysisChangePath(node);
          } else {
            deviceChangePath(node);
          }
        })
      }
      function nodeClickMove(node){
        if(_onlyDeviceClickable && node.modelId < 1000) return;
        serviceProxy.removeAllRequest();
        /**
         if(node.setHighlight){
        node.setHighlight(true);
      };*/
        nextTick(function(){
          //target.setParameter("id", node.id);
          //target.trigger("changeNavString", changeNavString.call(node));
          target.setParameter("sub", null);
          target.navigateTo("index", {
            main : target.getParameter("main")
          }, "self");
        });
      }
      function deviceChangePath(node){
        var path = node.$location;
        //target.setParameter("id", node.id);
        target.trigger("changeNavString", changeNavString.call(node));
        getResourceById(node.id, function(resource){
          extend(node, resource);
          target.setValue("global/resource", node);
          target.trigger("pathChange", path);
          target.trigger("tree_resourceChange", {
            resource : node
          });
          target.trigger("analysisShakeNavigateTo", 0);
        });
      }
      function analysisChangePath(node){
        var path = node.$location;
        //target.setParameter("id", node.id);
        target.trigger("changeNavString", changeNavString.call(node));
        getResourceById(node.id, function(resource){
          extend(node, resource);
          target.setValue("global/resource", node);
          target.trigger("tree_resourceChange", {
            resource : node
          });
          target.trigger("analysisShakeNavigateTo", 0);
        });
      }
      function changeNavString(){
        var node = this, str,
          arr = [node.label],
          parent = node.parent;
        while(parent){
          if(parent.id != 99){
            arr.push(parent.label);
          }
          parent = parent.parent
        }
        arr.reverse();
        return arr.join(" > ");
      }
      function getResourceById(id, callback){
        target.getResourceById(id, function(resource){
          callback && callback(resource);
        });
      }
      function getIcon(i){
        return icons[i - 1] || 'tag tag-green';
      }
      function error(msg){
        this.msg = msg;
      };
      function rule(a, b){
        var regeExp = new RegExp("/\\d+/", "g"),
          val1 = a.values && a.values.number || null,
          val2 = b.values && b.values.number || null;
        function getMaxUnmber(variable) {
          var maxLength = 0,
            ret = regeExp.exec(variable.label);
          while (ret != null) {
            var num = ret[0].length;
            if (num > maxLength) {
              maxLength = num;
            }
            ret = regeExp.exec(variable.label)
          }
          return maxLength;
        }
        function addZeroBefore(word) {
          var dif = max - word.length;
          for (var i = 0; i < dif; i++) {
            word = "0" + word;
          }
          return word;
        }
        if (val1 || val2) {
          return val1 < val2;
        } else {
          var mnum1 = getMaxUnmber(a),
            mnum2 = getMaxUnmber(b),
            max = Math.max(mnum1, mnum2),
            la = a.label.replace(regeExp, function (word) {
              return addZeroBefore(word);
            }),
            lb = b.label.replace(regeExp, function (word) {
              return addZeroBefore(word);
            });
          return la < lb;
        }
      }
      function getLastTwo(domains){
        var arr = domains.split("/").filter(function(e){
          return e;
        });
        return arr.slice(-2);
      }
      function checkModelId(modelId){
        if(modelId > 1000){
          return true;
        } else {
          return modelId == 300 || modelId == 301 || modelId == 302;
        }
      }
      function extendToResIdMap(target, resources){
        var proj = {}, id, type, modelId;
        //extendToResIdMap.size = extendToResIdMap.size || 1/0;
        each(resources, function(resource, i){
          var domains = resource.domains.split("/").filter(function(e){
              return e;
            }),
            last2 = getLastTwo(resource.domains),
            parentID = resource.id == last2[1] ? last2[0] : last2[1];
          if(parentID !== resource.id){
            resource.parentID = parentID;
            id = resource.id;
            modelId = resource.modelId;
            type = modelId > 1000 ? 1000 : modelId;
            target[id] = resource;
            resource.resourceType = LOC[type];
          } else {
            console.err("此节点为错误或无效节点", resource);
            invalidNodes.push(resource);
          }
        })
        return target;
      }
      function clickFn(){
        var id = target.getParameter("id");
        if(_onlyDeviceClickable && this.resourceType !== "device"){
          event.preventDefault();
          this.toggle();
        } else if(id != this.id){
          if(_backToMainWhileDeviceChange){
            if(!target.getParameter("sub")){
              nodeClick(this);
            } else {
              nodeClickMove(this);
            }
          } else {
            nodeClick(this);
          }
        }
      }
      function inputToRelativeMap(resource){
        var domains = resource.domains, parents,
          modelId = resource.modelId, parent = getParent(resource);
        domains = domains.split("/").filter(function(e){
          return e;
        });
        function getParent(resource){
          if(resource.parentID){
            return resourceIdMap[resource.parentID];
          } else {
            console.err("没有设置PARENTID属性");
          }
        }
        function getParentsWithSomeModelID(resource){
          var rs = [], cached, modelId = resource.modelId, parent = resource;
          while(parent = getParent(parent)){
            if(parent.modelId != modelId){
              break;
            }
            rs.push(parent);
          }
          return rs;
        }
        if(parent){
          parent.children = parent.children || [];
          insertBySort(parent.children, resource, rule);
        } else {
          resourceIdMap['root'].push(resource);
          console.assert(false, "无根节点的节点", resource);
        }
        if(resource.label == "电厂"){
           
        }
        if(resource.values && resource.values.view){
          resource.view = resource.values.view;
        } else {
          resource.view = treeViewData[resource.id];
          if(resource.view){
            saveResourceView(resource.id, resource.view).then(function(d){
              // 
            });
          }
        }
        resource.click = clickFn;
        resource.$on = function(eventname, callback){
          events[eventname] = callback;
        }
        //console.assert(resource.$location, "$location没正确倒入", resource.label, resource.modelId, resource.layer);
      }
      function getCurrentResource(callback){
        var resource = target.getValue("global/resource") || {},
          id = target.getParameter("id") || resource.id;
        id && target.getResourceById(id, function(resource){
          callback && callback(resource);
        });
        !id && callback && callback(null);
      }
      function getDevicesByCondition(callback){
        runtime('resource开始加载');
        target.getDevicesByCondition({}, function(resources){
          runtime('resource完成加载');
          callback && callback(resources);
        }, extendstr);
      }
      function getKpiValueCi(ci, kpi, callback){
        /**
        runtime('getStatus开始加载');
        target.getKpiValueCi(ci, kpi, function(valuelist){
          runtime('getStatus完成加载');
          callback && callback(valuelist)
        },{
          isRealTimeData: true
        });*/
        callback([]);
      }
      function getDomains(callback){
        var domains = [];
        var mids = [300, 301, 302];
        var i;
        function getResourceByModelId(inx){
          var mid = mids[inx];
          function handler(d){
            pushBack(domains, d);
            getResourceByModelId(inx + 1);
          }
          mid && target.getResourceByModelId(mid, handler, extendstr);
          !mid && callback && callback(domains);
        }
        getResourceByModelId(0)
      }
      function getCurrentResourceSuccess(resource){
        _res = resource;
        getDomains(getDomainsSuccess);
      }
      function getDomainsSuccess(domains){
        extendToResIdMap(resourceIdMap, domains);
        var ci = [],node;
        each(domains, function(domain){
          inputToRelativeMap(domain);
          ci.push(domain.id);
        });
        dev = resourceIdMap['root'];
        function traverse(d){
          each(d, function(child){
            !child.children && _projects.push(child);
            child.children && traverse(child.children);
          })
        }
        traverse(dev);
        if(!_onlyDeviceClickable){
          if(!_res){
            node = resourceIdMap["root"][0];
          } else {
            if(_res.modelId < 1000){
              node = resourceIdMap[_res.id];
            }
          };
          if(node){
            if(!node.$location){
              node.postponed = true;
            } else {
              deviceChangePath(node);
            }
          }
        }
        getKpiValueCi(ci, [ALERTKPI], getDomainsKpiValueCiSuccess);
      }
      function getDomainsKpiValueCiSuccess(valuelist){
        getDevicesByCondition(function(d){
          getDevicesByConditionSuccess(d);
        });
      }
      function getDevicesByConditionSuccess(resources){
        runtime('getResourceSuccess开始');
        var ci = [];
        _devices = resources;
        extendToResIdMap(resourceIdMap, resources);
        each(resources, function(resource){
          inputToRelativeMap(resource);
          ci.push(resource.id);
        })
        runtime("MAP全完成", resourceIdMap['root']);
        getKpiValueCi(ci, [ALERTKPI], getKpiValueCiSuccess);
      };
      function getKpiValueCiSuccess(valuelist){
        !treeCache.treeData && treeCache("treeData", resourceIdMap['root']);
        !treeCache.treeMap && treeCache("treeMap", resourceIdMap);
        var find = _projects.find(function(e){
          return e.children instanceof Array && e.children.length > 0;
        });
        resourceIdMap['firstDevice'] = isObject(find) && isArray(find.children) && find.children[0];
        var phase = scope.$root.$$phase;
        if(phase == "$apply" || phase === "$digest"){
          scope.option = treeCache.treeData;
        } else {
          scope.$apply(function(){
            scope.option = treeCache.treeData;
          });
        }
        runtime('resource加载完成');
      }
      function getTreeView(callback){
        target.getEditorStatus("DomainAreaLineTree", function (tree) {
          treeCache('treeview', tree);
          //saveTreeDateToResource(tree);
          callback && callback();
        });
      }
      function getTreeViewSuccess(){
        treeViewData = (function(tree){
          var rs = {};
          for(var type in tree){
            for(var i = 0; i < tree[type].length; i++){
              rs[tree[type][i].id] = tree[type][i].view;
            }
          }
          return rs;
        })(treeCache['treeview']);
        if(!treeCache.treeData){
          getCurrentResource(getCurrentResourceSuccess);
        } else {
          getKpiValueCiSuccess()
        }
      }
      /**
      function saveTreeDateToResource(tree){
        var defers = [];
        eachProp(tree, function(n, i){
          each(n, function(n){
            defers.push(saveResource(n.id, {
              viewId : n.view.viewId
            }))
          })
        });
        q.all(defers).then(function(resources){
           
        })
      }*/
      function saveResourceView(id, obj){
        var defer = q.defer();
        target.postService("resourceUIService", "updateDeviceValue", [id, "view", obj], function(event){
          if(event.code){
            defer.resolve(event.data);
          }
        })
        return defer.promise;
      };
      scope.searchContent = "";
      scope.oninit = function(treeIns){
        scope.search = function(){
          treeIns.search(scope.searchContent);
        }
      }
      scope.save = function(){
        target.saveEditorStatus("DomainAreaLineTree", treeCache['treeview'], function(){
          growl.success("保存完成")
        });
      }
      if(treeCache['treeview']){
        getTreeViewSuccess()
      } else {
        getTreeView(getTreeViewSuccess)
      }
    }
  },{
    route : "/rview_select/:mid/:id",
    templateUrl : "test.html",
    name : "dialogtest",
    injector : ["$scope", "$location", "resourceUIService", "$routeParams", "viewFlexService", "commonMethodService", "growl"],
    controller : function($scope, $location, resourceUIService, $routeParams, viewFlexService, cms, growl){
      var mid = $routeParams['mid'], id = $routeParams['id'], treeViewData, target = cms();
      if(!treeCache['treeview']){
        $location.path("/rview");
      }
      treeViewData = (function(tree){
        var rs = {};
        for(var type in tree){
          for(var i = 0; i < tree[type].length; i++){
            rs[tree[type][i].view.viewId] = tree[type][i].view;
          }
        }
        return rs;
      })(treeCache['treeview']);
      if(!treeCache['configureview']){
        getConfigureView(getConfigureViewSuccess)
      } else {
        getConfigureViewSuccess()
      }
      function getConfigureViewSuccess(){
        $scope.navigators = [{
          label : "选择组态视图",
          active : true
        }];
        $scope.source = {
          showSelector : false,
          data : treeCache['configureview'].filter(function(n){
            return true //!treeViewData[n.viewId];
          }),
          body : {
            viewTitle : {
              label : "组态视图名称",
              on : {
                click : function(row){
                  resourceUIService.getResourceById(id, function(event){
                    if(event.code == 0){
                      var find, arr, resource = event.data;
                      if(mid == 300){
                        arr = treeCache['treeview'].domains;
                      } else if(mid == 301){
                        arr = treeCache['treeview'].customers;
                      } else if(mid == 302){
                        arr = treeCache['treeview'].projects;
                      } else if(mid > 1000){
                        arr = treeCache['treeview'].devices;
                      }
                      find = arr.find(function(n){
                        return n.id == id;
                      });
                      if(find){
                        find.view.viewId = row.viewId;
                        find.view.viewTitle = row.viewTitle;
                      } else {
                        arr.push({
                          id : parseInt(id),
                          modelId : parseInt(mid),
                          label : resource.label,
                          view : {
                            viewId : row.viewId,
                            viewTitle : row.viewTitle
                          }
                        })
                      };
                      treeCache.treeMap[id].view = {
                        viewId : row.viewId,
                        viewTitle : row.viewTitle
                      }
                      growl.info("保存中请稍后");
                      target.postService("resourceUIService", "updateDeviceValue", [id, "view", treeCache.treeMap[id].view], function(event){
                        if(event.code){
                           
                          growl.success("修改成功");
                        }
                        $location.path("/rview");
                      });
                    }
                  });
                }
              }
            },
            viewId : {
              label : "组态视图链接",
              bind : function(row){
                return row.viewId;
              },
              style : function(row){
                return {
                  color : "blue",
                  "text-decoration" : "underline"
                }
              },
              type : "text",
              on : {
                click : function(row){
                  window.open("../app-free-style/index.html#/topoview/index/%5B%7B\"viewId\":" + row.viewId + "%7D%5D", "_blank");
                }
              }
            }
          }
        }
      }
      function getConfigureView(callback){
        viewFlexService.getManagedViewsByType("configure", null, function(event){
          if(event.code == 0){
            treeCache('configureview', event.data);
            callback();
          }
        })
      }
    }
  }]
});