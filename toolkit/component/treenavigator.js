/**
 * Created by leonlin on 16/11/3.
 */
define(['toolkit/itree/tree-data-handler', 'pstree'], function(treeDataHandler, pstree) {
  return function(data) {
    var ALERTKPI = 999999;
    var treeIns, _res, resourceIdMap = {root:[]}, elemData = data, _projects = [], _devices = [], invalidNodes = [],
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
      target = elemData.element,
      treenavigator = $("<div class=\"tree-menu\"></div>"),
      resource = target.getParameter("resource"),
      _role = target.getValue("global/ROLE"),
      icons = ['tag tag-green', 'tag tag-yellow', 'tag tag-orange', 'tag tag-red'],
      extendstr = "includeFields=id,label,modelId,values.viewType,values.view.viewTitle,values.view.viewId,values.number,domains,resourcetype,viewType",
      _LOCATION = [null, "index", "navigate", "factory", "production"],
      serviceProxy = data.serviceProxy,
      _onlyDeviceClickable = (function(param){
        return param.navitype == "device";
      })(target.parameters || {}),
      _backToMainWhileDeviceChange = target.parameters.backToMainWhileDeviceChange,
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
    //function getLocationByModel(model){
    //  var viewType = (function(model){
    //    if(!model) return undefined;
    //    var attrs = model.attrs || [];
    //    var viewTypeAttr = attrs.find(function(elem){
    //      return elem.name == "viewType";
    //    }) || {};
    //    return viewTypeAttr.sourceValue;
    //  })(model);
    function getLocationByModel(resource) {
      var viewType = resource.values && resource.values['viewType'];
      viewType = viewType || null;
      var nameDic = {
        motor:"motor",
        wind:"wind",
        reality:"reality",
        UPS:"UPS",
        electric:"electric",
        screen:"screen"
      };
      return viewType ? nameDic[viewType] : "device";
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
      nextTick(function(){
        target.setParameter("id", node.id);
        target.setParameter("sub", null);
        target.navigateTo("index", {
          main : target.getParameter("main")
        }, "self");
      });
    }
    function setCacheTree(){
      if(treeIns){
        target.trigger("deviceTreeLoaded", treeIns);
      }
    }
    function deviceChangePath(node){
      var path = node.$location,
        nameDic = {
        motor:"motor",
        wind:"wind",
        reality:"reality",
        UPS:"UPS",
        electric:"electric",
        screen:"screen"
      };
      target.setParameter("id", node.id);
      target.trigger("changeNavString", changeNavString.call(node));
      getResourceById(node.id, function(resource){
        target.getAttrsByModelId(resource.modelId, function( attrs ){
          var viewType = attrs.find(function( n ){ return n.name === "viewType" }),
            sourceValue = viewType && viewType.sourceValue;
          path = sourceValue && nameDic[sourceValue] || node.$location;
          extend(node, resource);
          target.setValue("global/resource", node);
          target.trigger("pathChange", path);
          target.trigger("tree_resourceChange", {
            resource : node
          });
          target.trigger("analysisShakeNavigateTo", 0);
        });
      });
    }
    function analysisChangePath(node){
      var path = node.$location;
      target.setParameter("id", node.id);
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
        parent = getParent(node);
      function getParent(node){
        return node.parentID && resourceIdMap[node.parentID] || node.parent
      }
      while(parent){
        if(parent.id != 99){
          arr.push(parent.label);
        }
        parent = getParent(parent);
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
      target.setValue("global/alertTime", null);
      if(_onlyDeviceClickable && this.resourceType !== "device"){
        event.preventDefault();
        this.toggle();
      } else if(id != this.id){
        _backToMainWhileDeviceChange
           ? (!target.getParameter("sub")
              ? nodeClick(this)
              : nodeClickMove(this)
          ) : nodeClick(this);
      }
    }
    function inputToRelativeMap(resource){
      var domains = resource.domains, parents,
        modelId = resource.modelId, parent = getParent(resource);
      domains = domains.split("/").filter(function(e){
        return e;
      });
      function getParent(resource){
        return resource.parentID
          ? resourceIdMap[resource.parentID]
          : console.err("没有设置PARENTID属性");
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
      if(modelId > 1000){
        //resource.$location = getLocationByModel(target.getRootScope("rootModelsDic")[modelId])
        resource.$location = getLocationByModel(resource)
      } else {
        if(modelId == 300){
          parents = getParentsWithSomeModelID(resource);
          if(resource.layer == 1){
            resource.$location = "index";
          } else if(resource.layer == 2){
            resource.$location = "navigate";
          } else if(resource.layer == 3){
            resource.$location = "factory";
          } else {
            resource.$location = {error : "unhandled node", message : "[300]layer is over 3, cannot handle"}
            console.error("管理域出现" + resource.layer + "级，不可被处理", resource.label, resource.modelId, resource.layer);
          }
        } else if(modelId == 301){
          resource.$location = "production";
        } else if(modelId == 302){
          if(resource.children && resource.children[0] && resource.children[0].modelId > 1000 || resource.layer == 1){
            resource.$location = "devicegroup";
          } else {
            resource.$location = "virtual";
          }
        }
      }
      resource.click = clickFn;
      resource.$on = function(eventname, callback){
        events[eventname] = callback;
      }
      console.assert(resource.$location, "$location没正确倒入", resource.label, resource.modelId, resource.layer);
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
      runtime('getStatus开始加载');
      target.getKpiValueCi(ci, kpi, function(valuelist){
        runtime('getStatus完成加载');
        callback && callback(valuelist)
      },{
        isRealTimeData: true
      });
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
      each(valuelist, function(val){
        resourceIdMap[val.nodeId]['status'] = val.value;
        resourceIdMap[val.nodeId]['icon'] = getIcon(val.value);
      });
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
      each(valuelist, function(val, i){
        resourceIdMap[val.nodeId]['status'] = val.value;
        resourceIdMap[val.nodeId]['icon'] = getIcon(val.value);
      })
      var root = resourceIdMap['root'];
      var find = _projects.find(function(e){
        return e.children instanceof Array && e.children.length > 0;
      });
      resourceIdMap['firstDevice'] = isObject(find) && isArray(find.children) && find.children[0];
      console.assert(resourceIdMap['firstDevice'], "没有找到任何设备");
      root = root && root[0] && root[0].layer == 1 && root[0].modelId == 300 ? root[0].children : root;
      treeIns = pstree(treenavigator[0], {
        data : isArray(root) ? root : [],
        animate : false,
        themes : "show-line folder-pull-right steel-industry condense",
        on : {
          init : function(){
            this.icon = this.icon || "tag tag-green";
            this.open = this.depth < 2;
          },
          click : clickFn
        }
      });
      setCacheTree();
      var nd = (function(){
        if(_onlyDeviceClickable){
          if(isObject(_res) && _res.modelId > 1000 && _devices.some(function(d){
              return d.id == _res.id;
            })) return _res;
          return resourceIdMap['firstDevice'] || null;
        } else {
          return _res ? _res : (resourceIdMap['root'] ? resourceIdMap['root'][0] : null);
        }
      })();
      var node = treeIns.find(function(e){
        return ( nd && nd.id ) == e.id;
      });
      isObject(node) && isFunction(node.eachParent) && node.eachParent(function(n){
        !n.open && n.toggle();
      });
      isObject(node) && isFunction(node.highlight) && node.highlight();
      isObject(node) && !node.open && isFunction(node.toggle) && node.toggle();
      if(node){
        if(_onlyDeviceClickable){
          nodeClick(node);
        } else if(node.modelId > 1000 || node.postponed){
          delete node.postponed;
          nodeClick(node);
        };
      }
      runtime('allfinished', root);
    }
    getCurrentResource(getCurrentResourceSuccess);
    target.on("treeSelect", function(){
      var id = target.getParameter("id");
      var node = treeIns.find(function(n){
        return n.id == id;
      });
      node && isFunction(node.eachParent) && node.eachParent(function(n){
        !n.open && n.toggle();
      });
      node && isFunction(node.highlight) && node.highlight();
    });
    target.on("searchtree", function(str){
      treeIns.search(function(node){
        return node.label.indexOf(str) != -1;
      })
    });
    return treenavigator;
  }
});