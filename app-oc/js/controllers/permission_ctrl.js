define(['controllers/controllers', 'Array'], function (controllers) {
  'use strict';
  function permissionCtrl(scope, timeout, q, routeParams, location, serviceCenterService, ngDialog, userInitService, userLoginUIService, userEnterpriseService, userUIService, growl, userRoleUIService, userFunctionService, userDomainService, marketplaceUIService, viewFlexService, dictionaryService){
    var roleID = routeParams.roleID;
    scope.panel = routeParams.panel;
    scope.navigateTo = function(panel){
        if(panel == "prod_componentpermiss"){
            window.location.href = "../../../app-oc/index.html#/prod_componentpermiss/" +roleID ;
        }else{
            location.path("usermanager/permission/" + panel + "/" + roleID);
        }
    };
    var _currentRole, _roleComponet;
    var _models, _dictions, _roleview, _roleres;
    var _allviews = [];
    var _dashboardviews = [];
    var _viewtypes = {};
    var TEXT = {
      "SUBMIT" : "确定",
      "CANCEL" : "取消"
    };
    var VIEWTYPES = {
      dashboard : 'dashboard',
      template : 'template',
      configAlert : "configAlert",
      designView : "designView",
      configure : "configure"
    }
    function getAllModels(){
      var defer = q.defer();
      serviceCenterService.models.getAll().then(function(allModels){
        defer.resolve(allModels);
      });
      return defer.promise;
    }
    function clone(a){
      return JSON.parse(JSON.stringify(a));
    }
    function getAllDicts(){
      var defer = q.defer();
      dictionaryService.getDictValues(['functionCode'], function(event){
        if(event.code == 0){
          defer.resolve(event.data);
        } else {
          defer.reject(event.message);
        }
      });
      return defer.promise;
    }
    function findRoleViews(params){
      var defer = q.defer();
      userRoleUIService.findRoleViews(params, function(event){
        if(event.code == 0){
          defer.resolve(event.data);
        } else {
          defer.reject(event.message);
        }
      });
      return defer.promise;
    }
    function findRoleRes(params){
      var defer = q.defer();
      userRoleUIService.findRoleRes(params, function(event){
        if(event.code == 0){
          defer.resolve(event.data);
        } else {
          defer.reject(event.message);
        }
      });
      return defer.promise;
    }
    function getCurrentRole(){
      var defer = q.defer();
      userEnterpriseService.queryEnterpriseRole(function(returnObj) {
        if (returnObj.code == 0) {
          var role = returnObj.data.find(function(item) {
            return item.roleID == roleID;
          });
          defer.resolve(role);
        } else {
          defer.reject(returnObj);
        }
      })
      return defer.promise;
    }
    function queryRoleName() {
      userEnterpriseService.queryEnterpriseRole(function(returnObj) {
        if (returnObj.code == 0) {
          scope.roleName = returnObj.data.find(function(item) {
            return item.roleID == roleID;
          }).roleName;
        }
      })
      return defer.promise;
    }
    function initMenuPremission() {
      scope.saveMenuPremission = function() {
        var nodes = scope.functionTree
          .getCheckNode()
          .map(function(elem){
            return elem.functionCode;
          });
        var param = [];
        for(var i in nodes){
          if(nodes[i]){
            param.push(nodes[i])
          }
        }
        userFunctionService.addFunction2Role(roleID, param, function (resultObj) {
          if (resultObj.code == 0) {
            growl.success("功能分配成功", {});
          } else {
            growl.warning("功能分配失败!", {});
          }
        });
      };
      var queryAllFunctionByUser_back = function(event){
        if(event.code == 0){
          var traverse = function(data){
            var find = 0;
            var getFunction = function(item){
              if(item.belong == 1){
                find = 1;
              }
              for(var i in item.function){
                getFunction(item.function[i])
              }
            };
            for(var i in data){
              getFunction(data[i])
            }
            return find;
          };
          var some = traverse(event.data);
          scope.functionTree = {
            name : '全部',
            belong : some,
            function : event.data
          };
        }
      };
      userFunctionService.queryAllFunctionByUser(userLoginUIService.user.userID, roleID, queryAllFunctionByUser_back);
    }
    function loadViewByType(type){
      var defer = q.defer();
      var domainPath = userLoginUIService.user.domainPath;
      viewFlexService.getViewsOnlyPublishedByTypeAndDomainPath(type, domainPath, function(event){
        if(event.code == 0){
          defer.resolve(event.data);
        } else {
          defer.reject(event)
        }
      });
      return defer.promise;
    }
    function getAllDashboard(){
      var defer = q.defer();
      var attrs = [['text', 'viewTitle'], 'viewId', 'values']
      function getDashboard(e){
        return e.viewType == "dashboard";
      }
      function remap(e, inx){
        var obj = {
          id : parseInt(inx)
        };
        for(var i in attrs){
          var attr = attrs[i];
          if(typeof attr == "string"){
            obj[attr] = e[attr];
          } else if(typeof attr == "object"){
            obj[attr[0]] = e[attr[1]];
          }
        }
        return obj;
      }
      viewFlexService.getAllMyViews(function(event){
        if(event.code == "0"){
          event.data = event.data || [];
          defer.resolve(event.data.filter(getDashboard).map(remap));
        } else {
          defer.reject(event);
        }
      });
      return defer.promise;
    }
    function initViewPremission(){
      /** var allViews = []; */
      function getAllModels_success(models){
        _models = models;
        return getAllDicts();
      }
      function getAllDicts_success(dictions){
        _dictions = dictions;
        var params = { roleId : roleID };
        return findRoleViews(params);
      }
      function findRoleViews_success(roleview){
        _roleview = roleview;
        var params = { roleId : roleID };
        return findRoleRes(params);
      }
      function findRoleRes_success(roleres){
        _roleres = roleres;
        var defers = [];
        function loadViewByTypeAndRole(type){
          var defer = q.defer();
          loadViewByType(type).then(function(dt){
            if(type == 'dashboard'){
              Array.prototype.push.apply(_allviews, dt);
            };
            _viewtypes[type] = _viewtypes[type] || {};
            var all = dt.filter(function(v){
              if(v.releaseStatus == '1'){
                var template = v.template;
                if(type == 'dashboard'){
                  return template ? template.resourceId == 0 : true
                } else if(type == 'template'){
                  if(template){
                    return template.resourceId != 0 && template.keyValue != "default";
                  } else {
                    return false;
                  }
                } else {
                  return v.viewType == type;
                }
              } else {
                return false;
              }
            });
            _viewtypes[type].all = all;
            _viewtypes[type].applied = all.filter(function(elem){
              var viewId = elem.viewId;
              var some = _roleres.find(function(el){
                return el.resId == viewId;
              });
              return some;
            });
            _viewtypes[type].avaliable = all.filter(function(elem){
              var viewId = elem.viewId;
              var some = _roleres.find(function(el){
                return el.resId == viewId;
              });
              return !some;
            });
            defer.resolve("success");
          })
          return defer.promise;
        }
        for(var i in VIEWTYPES){
          defers.push(loadViewByTypeAndRole(VIEWTYPES[i]));
        };
        return q.all(defers);
      }
      function allViewLoaded(){
        // 
        function setDashboard(object){
          object.source.forEach(function(elem){
            var loop = function(command){
              var find = _roleview.find(function(el){
                return el.functionCode == command.valueCode;
              });
              if(find){
                if(elem.viewId == find.viewId){
                  elem[command.valueCode] = true;
                }
              }
            };
            for(var i in _dictions){
              loop(_dictions[i]);
            }
            elem.selected = true;
          });
          var saveClick = function(source){
            var resAddIds = source
              .filter(function(elem){
                var some = _roleres.find(function(el){
                  return el.resId == elem.viewId;
                });
                return !some;
              })
              .map(function(elem){
                return elem.viewId;
              });
            var resDeleteIds = _roleres.filter(function(role){
              var some = source.some(function(el){
                return role.resId == el.viewId;
              });
              return !some && role.resType == 21;
            });
            var deleteRoleRes = function(){
              var roleDeleted = function(){
                var deleteFunctionParam = [];
                var loop = function(command){
                  var find = _roleview.find(function(elem){
                    return elem.functionCode == command.valueCode;
                  });
                  if(find){
                    deleteFunctionParam.push(find);
                  }
                };
                for(var i in _dictions){
                  loop(_dictions[i])
                };
                var deleteRoleView_back = function(event){
                  if(event.code == 0){
                    var deleteRV = function(rv){
                      _roleview.$remove(function(index, element){
                        return element.viewId == rv.viewId;
                      });
                    };
                    for(var i in deleteFunctionParam){
                      deleteRV(deleteFunctionParam[i])
                    };
                    var addFunctionParam = [];
                    var loop = function(command){
                      var find = source.find(function(elem){
                        return elem[command.valueCode] == true;
                      });
                      if(find){
                        addFunctionParam.push({
                          roleId : roleID,
                          viewId : find.viewId,
                          functionCode : command.valueCode
                        });
                      }
                    };
                    for(var i in _dictions){
                      loop(_dictions[i]);
                    };
                    var showMsg = function() {
                      growl.success("仪表板视图授权成功");
                      if (resAddIds.length > 0 || resDeleteIds.length > 0 || deleteFunctionParam.length > 0 || addFunctionParam.length > 0) {
                        /** growl.success("仪表板视图授权成功"); */
                      } else {
                        /** growl.success("仪表板视图授权成功"); */
                      }
                    };
                    var addRoleView_callback = function(event){
                      if(event.code == "0"){
                        Array.prototype.push.apply(_roleview, event.data);
                        showMsg();
                      }
                    };
                    if(addFunctionParam.length > 0){
                      userRoleUIService.addRoleView(addFunctionParam, addRoleView_callback)
                    } else {
                      showMsg();
                    }
                  }
                };
                if(deleteFunctionParam.length > 0){
                  userRoleUIService.deleteRoleView(deleteFunctionParam, deleteRoleView_back);
                } else {
                  deleteRoleView_back({code : 0, data : null})
                }
              };
              var deleteRoleRes_callback = function(event){
                if(event.code == 0){
                  for(var i in resDeleteIds){
                    _roleres.$remove(function(index, elem){
                      return elem.resId == resDeleteIds[i].resId;
                    })
                  }
                  roleDeleted();
                }
              };
              if(resDeleteIds.length > 0){
                userRoleUIService.deleteRoleRes(resDeleteIds, deleteRoleRes_callback);
              } else {
                roleDeleted();
              };
            };
            if(resAddIds.length > 0){
              var addRoleRes_callback = function(event){
                if(event.code == 0){
                  Array.prototype.push.apply(_roleres, event.data)
                  deleteRoleRes();
                }
              };
              userInitService.addRoleRes(roleID, 21, resAddIds, addRoleRes_callback);
            } else {
              deleteRoleRes();
            }
          };
          var buttons = _dictions.map(function(elem){
            var setClick = function(row){
              var cache = row[elem.valueCode];
              var find = object.sourceAll.find(function(el){
                return el[elem.valueCode] == true;
              });
              if(find){
                find[elem.valueCode] = false;
              }
              row[elem.valueCode] = cache ? false : true;
            };
            return {
              label : elem.label,
              type : "button",
              disabled : function(row){
                return row.selected != true;
              },
              class : function(row){
                if(row[elem.valueCode]){
                  return 'btn btn-success';
                } else {
                  return 'btn btn-default';
                }
              },
              events : {
                click : setClick
              }
            }
          });
          return {
            title : "仪表板视图",
            source : {
              source : object.sourceAll,
              showheader : true,
              showSelector : true,
              miniSize : true,
              page : true,
              header : [{
                icon : "glyphicon glyphicon-floppy-save",
                class : "btn btn-primary btn-sm",
                label : "保存",
                style : {
                  margin : "2px"
                },
                events : {
                  click : saveClick
                },
                type : "button",
              }],
              events : {
                click : function(row){
                  if(row.selected != true){
                    var loop = function(command){
                      row[command.valueCode] = false;
                    };
                    for(var i in _dictions){
                      loop(_dictions[i])
                    }
                  }
                }
              },
              columnDefs : [{
                label : "视图名称",
                editable : false,
                sortable : true,
                filterable : true,
                data : "viewTitle",
                type : "text",
                modes : {
                  default : {
                    type : "text",
                  }
                }
              },{
                label : "视图描述",
                editable : false,
                sortable : true,
                filterable : true,
                data : "description",
                type : "text",
                modes : {
                  default : {
                    type : "text",
                  }
                }
              },{
                label : "应用于",
                type : "buttonGroup",
                filterable : false,
                sortable : false,
                width : "141px",
                modes : {
                  default : {
                    options : buttons
                  }
                }
              }]
            }
          }
        };
        function setTemplate(object){
          var dispart;
          for(var i in object.source){
            if(object.source[i].template){
              object.source[i].resourceId = object.source[i].template.resourceId;
            }
          };
          var resType = object.resType;
          if(object.title == "设备视图"){
            dispart = {
              label : "设备模板",
              editable : false,
              sortable : true,
              filterable : true,
              data : "resourceId",
              format : function(value){
                var find = _models.find(function(elem){
                  return elem.id == value;
                });
                if(find){
                  return find.label;
                } else {
                  return "-";
                }
              },
              filterFormat : {
                label : "label",
                value : "id"
              },
              type : "select",
              options : _models,
              modes : {
                default : {
                  type : "text",
                }
              }
            }
          } else {
            dispart = {
              label : "视图描述",
              editable : false,
              sortable : true,
              filterable : true,
              data : "description",
              type : "text",
              modes : {
                default : {
                  type : "text",
                }
              }
            }
          }
          var addNewClick = function(row){
            var submitClick = function(){
              var source = object.sourceAva.filter(function(elem){
                return elem.selected == true;
              });
              Array.prototype.push.apply(object.source, source);
              var resIds = source.map(function(elem){
                elem.selected = false;
                return elem.viewId;
              });
              var addRoleRes_callback = function(event){
                if(event.code == 0){
                  var loop = function(item){
                    item.disabled = false;
                    object.sourceAva.$remove(function(index, elem){
                      return elem == item;
                    });
                  };
                  for(var i in source){
                    loop(source[i]);
                  }
                  ngDialog.close();
                  growl.success(object.title + "添加成功")
                }
              };
              userInitService.addRoleRes(roleID, resType, resIds, addRoleRes_callback);
            };
            var fnlist = [{
              label : TEXT.SUBMIT,
              icon : 'btn btn-primary',
              style : {
                width : '50%',
                'border-radius' : 0,
                'font-size' : '18px',
                'font-weight' : 'bold',
                'padding' : 10
              },
              fn : submitClick
            },{
              label : TEXT.CANCEL,
              icon : 'btn btn-default',
              style : {
                width : '50%',
                'border-radius' : 0,
                'font-size' : '18px',
                'font-weight' : 'bold',
                'padding' : 10
              },
              fn : function(){
                ngDialog.close();
              }
            }];
            var datatablesource = {
              source : object.sourceAva,
              miniSize : true,
              pageResize : false,
              header : [],
              rowclass : function(row){
                var inUse = object.sourceAva.filter(function(elem){
                  return elem.selected == true && elem != row;
                }).concat(object.source);
                var some = inUse.some(function(elem){
                  if(elem.template && row.template){
                    if(row.template.resourceType == "device"){
                      return row.template.resourceId == elem.template.resourceId
                    } else {
                      return false;
                    }
                  } else {
                    return false;
                  }
                });
                row.disabled = some;
                return some ? "disabled" : "";
              },
              columnDefs : [{
                label : "视图名称",
                editable : false,
                sortable : true,
                filterable : true,
                data : "viewTitle",
                type : "text",
                modes : {
                  default : {
                    type : "text",
                  }
                }
              },dispart]
            };
            scope.dialog = {
              title : "添加" + object.title,
              datatablesource : datatablesource,
              button : fnlist
            };
            ngDialog.open({
              template: '../partials/dialogue/data_table_dia.html',
              className: 'ngdialog-theme-plain',
              scope: scope
            })
          };
          var deleteClick = function(source){
            var fnlist = [{
              label : TEXT.SUBMIT,
              icon : 'btn btn-success',
              style : {
                width : '50%',
                'border-radius' : 0,
                'font-size' : '18px',
                'font-weight' : 'bold',
                'padding' : 10
              },
              fn : function(){
                ngDialog.close();
                var roleRes = source.map(function(elem){
                  return {
                    roleId : roleID,
                    resType : resType,
                    resId : elem.viewId
                  };
                });
                var deleteRoleRes_callback = function(event){
                  if(event.code == "0"){
                    for(var i in source){
                      if(typeof object.sourceAva.pushbefore == "function"){
                        object.sourceAva.pushbefore(source[i]);
                      } else {
                        object.sourceAva.unshift(source[i])
                      }
                      source[i].selected = false;
                      /**
                       for(var j in object.source){
                                      if(object.source[j] == source[i]){
                                        object.source[j].remove();
                                      }
                                    }
                       */
                      object.source.$remove(function(index, elem){
                        return source[i] == elem;
                      })
                      object.source.removeAllChecked();
                    };
                    growl.success(object.title + "使用权限删除成功")
                  }
                };
                userRoleUIService.deleteRoleRes(roleRes, deleteRoleRes_callback);
              }
            },{
              label : TEXT.CANCEL,
              icon : 'btn btn-default',
              style : {
                width : '50%',
                'border-radius' : 0,
                'font-size' : '18px',
                'font-weight' : 'bold',
                'padding' : 10
              },
              fn : function(){
                ngDialog.close();
              }
            }];
            scope.dialog = {
              title : {
                label : '提示'
              },
              description : {
                label : '确认要删除此用户使用这些' + object.title + '的权限吗？'
              },
              fnlist : fnlist
            };
            ngDialog.open({
              template: '../partials/dialogue/common_dia_prompt.html',
              className: 'ngdialog-theme-plain',
              scope: scope
            });
          };
          return {
            title : object.title,
            source : {
              source : object.source,
              showheader : true,
              header : [{
                icon : "fa fa-plus",
                class : "btn btn-primary btn-sm",
                label : "添加",
                style : {
                  margin : "2px"
                },
                mark : "viewTitle",
                id : "viewId",
                type : "button",
                events : {
                  click : addNewClick
                }
              },{
                icon : "fa fa-minus",
                class : "btn btn-default btn-sm",
                label : "删除",
                style : {
                  margin : "2px"
                },
                disabled : function(source){
                  return !source.some(function(elem){
                    return elem.selected
                  })
                },
                events : {
                  click : deleteClick
                },
                type : "button"
              }],
              columnDefs : [{
                label : "视图名称",
                editable : false,
                sortable : true,
                filterable : true,
                data : "viewTitle",
                type : "text",
                modes : {
                  default : {
                    type : "text",
                  }
                }
              },dispart]
            }
          };
        };
        var DASHBOARD_VIEW = setDashboard({
          title : "仪表板视图",
          sourceAll : _allviews,
          source : _viewtypes.dashboard.applied,
          resType : 21,
          sourceAva : _viewtypes.dashboard.avaliable
        });
        var MODEL_VIEW = setTemplate({
          title : "设备视图",
          source : _viewtypes.template.applied,
          resType : 21,
          sourceAva : _viewtypes.template.avaliable
        });
        var CONFIGALERT = setTemplate({
          title : "告警视图",
          resType : 23,
          source : _viewtypes.configAlert.applied,
          sourceAva : _viewtypes.configAlert.avaliable
        });
        var DESIGNVIEW = setTemplate({
          title : "分析视图",
          resType : 24,
          source : _viewtypes.designView.applied,
          sourceAva : _viewtypes.designView.avaliable
        });
        var CONFIGURE = setTemplate({
          title : "组态视图",
          resType : 25,
          source : _viewtypes.configure.applied,
          sourceAva : _viewtypes.configure.avaliable
        });
        scope.views = [DASHBOARD_VIEW, MODEL_VIEW, CONFIGALERT, DESIGNVIEW, CONFIGURE];
      }
      getAllModels()
        .then(getAllModels_success)
        .then(getAllDicts_success)
        .then(findRoleViews_success)
        .then(findRoleRes_success)
        .then(allViewLoaded)
    };
    function initEquipmentPremission(){
      var params = {
        roleId : roleID
      };
      var getAllDicts_callback = function(event){
        if(event.code == 0) {
          var dics = event.data;
          var findRoleRes_callback = function(event){
            if(event.code == 0){
              var roleRes = event.data.filter(function(elem){
                return elem.resType == 30;
              });
              var loop = function(dic){
                var find = roleRes.find(function(elem){
                  return elem.resId == dic.valueCode;
                })
                if(find){
                  dic.selected = true;
                }
              }
              for(var i in dics){
                loop(dics[i])
              }
              var saveClick = function(source){
                var addIds = source.filter(function(el){
                  var some = roleRes.some(function(roler){
                    return roler.resId == el.valueCode;
                  });
                  return !some;
                }).map(function(elem){
                  return elem.valueCode;
                });
                var removeIds = roleRes.filter(function(el){
                  var some = source.some(function(sou){
                    return sou.valueCode == el.resId
                  });
                  return !some;
                }).map(function(elem){
                  return {
                    roleId : roleID,
                    resId : elem.resId
                  }
                });
                var success = function(){
                  growl.success("修改设备控制功能成功。");
                }
                var addRoleSuccess = function(){
                  if(removeIds.length > 0){
                    userRoleUIService.deleteRoleRes(removeIds, function(event){
                      success()
                    })
                  } else {
                    success();
                  };
                };
                if(addIds.length > 0){
                  userInitService.addRoleRes(roleID, 30, addIds, function(event){
                    addRoleSuccess();
                  });
                } else {
                  addRoleSuccess()
                }
              };
              scope.equipments = {
                title : "设备控制",
                source : dics,
                showheader : true,
                showSelector : true,
                page : true,
                header : [{
                  icon : "glyphicon glyphicon-floppy-save",
                  class : "btn btn-primary btn-sm",
                  label : "保存",
                  style : {
                    margin : "2px"
                  },
                  events : {
                    click : saveClick
                  },
                  type : "button",
                }],
                columnDefs : [{
                  label : "指令类型",
                  editable : false,
                  sortable : true,
                  filterable : true,
                  data : "label",
                  type : "text",
                  modes : {
                    default : {
                      type : "text",
                    }
                  }
                }]
              };
            }
          };
          userRoleUIService.findRoleRes(params, findRoleRes_callback);
        }
      };
      dictionaryService.getDictValues(['commandType'],getAllDicts_callback);
    };
    function getUnselected(e){
      var isComp = false;
      if(e.values){
        isComp = e.values.component;
      }
      return e.selected != true && isComp;
    }
    function getSelected(e){
      var find = _dashboardviews.find(function(r){
        return r.viewId == e.viewId;
      });
      return find;
    }
    function removeUndefined(e){
      return e;
    }
    function stringify(json){
      json = json.map(function(e){
        var obj = {};
        var exclude = ["active", "selected", "$$hashKey", "id"];
        for(var i in e){
          if(exclude.indexOf(i) == -1){
            obj[i] = e[i];
          }
        }
        return obj;
      });
      return JSON.stringify(json);
    }
    function parseJson(str){
      var objLike = new RegExp("^\\{.*\\}$", "g");
      var arrLike = new RegExp("^\\[.*\\]$", "g");
      if(objLike.test(str) || arrLike.test(str)){
        return JSON.parse(str);
      } else {
        return null
      }
    }
    function findUsed(e){
      var find = _roleComponet.find(function(r){
        return r.viewId == e.viewId;
      });
      if(find){
        e.name = find.name;
        e.alias = find.alias;
        e.selected = true;
      }
      return e;
    }
    function initComponents(){
      var _ROLEKEY = "values"
      var cached = {};
      function editDescription(des){
        var defer = q.defer();
        var role = {
          roleName: _currentRole.roleName,
          roleID: _currentRole.roleID
        };
        role[_ROLEKEY] = des
        userRoleUIService.modifyRole(role, function(event) {
          if (event.code == 0) {
            defer.resolve(event.data);
          } else {
            defer.reject(event);
          }
        });
        return defer.promise;
      }
      scope.allSelectedDashboard =[];
      getCurrentRole().then(function(role){
        _currentRole = role;
        _roleComponet = parseJson(role[_ROLEKEY]) || [];
        return getAllDashboard();
      }).then(function(dashboardviews){
        var view;
        _dashboardviews = dashboardviews.map(findUsed);
        scope.alldashboards = _dashboardviews.filter(getUnselected);
        scope.allSelectedDashboard = _roleComponet.map(getSelected).filter(removeUndefined);
        scope.addView = function(){
          view.selected = true;
          scope.alldashboards =  _dashboardviews.filter(getUnselected);
          view.name = view.text;
          view.alias = "";
          scope.allSelectedDashboard.push(view);
        }
        scope.onSelect = function(v){
          view = v;
        }
        scope.onInit = function(v){
          view = v;
        }
        scope.save = function(){
          var json = stringify(scope.allSelectedDashboard)
          editDescription(json).then(function(e){
            growl.success("添加组件成功");
          });
        }
        scope.moveup = function(v){
          var inx = scope.allSelectedDashboard.indexOf(v);
          if(inx > 0){
            scope.allSelectedDashboard.splice(inx, 1);
            scope.allSelectedDashboard.splice(inx - 1, 0, v);
          }
          cached.active = false;
          v.active = true;
          cached = v;
        }
        scope.movedown = function(v){
          var inx = scope.allSelectedDashboard.indexOf(v);
          if(inx < scope.allSelectedDashboard.length){
            scope.allSelectedDashboard.splice(inx, 1);
            scope.allSelectedDashboard.splice(inx + 1, 0, v);
          }
          cached.active = false;
          v.active = true;
          cached = v;
        }
        scope.remove = function(v){
          var inx = scope.allSelectedDashboard.indexOf(v);
          scope.allSelectedDashboard.splice(inx, 1);
          delete v.alias;
          delete v.name;
          delete v.selected;
          if(cached == v){
            cached = {};
          }
          scope.alldashboards =  _dashboardviews.filter(getUnselected);
        }
      })
    }
    /**
     * 标准的登录状态判定
     * 登陆后执行初始化init方法
     */
    if(!userLoginUIService.user.isAuthenticated) {
      scope.$on('loginStatusChanged', function(evt, d) {
        if(userLoginUIService.user.isAuthenticated) {
          pageInitialized();
        }
      });
    } else {
      pageInitialized();
    }
    function pageInitialized(){
      if(scope.panel == 'menus'){
        initMenuPremission()
      } else if(scope.panel == 'view'){
        initViewPremission();
      } else if(scope.panel == 'equipment'){
        initEquipmentPremission();
      } else if(scope.panel == 'component'){
        initComponents();
      };
    }
  }
  controllers.initController('permissionCtrl', ['$scope', '$timeout', '$q', '$routeParams', '$location', 'serviceCenterService', 'ngDialog', 'userInitService', 'userLoginUIService', 'userEnterpriseService', 'userUIService', 'growl', 'userRoleUIService', 'userFunctionService', 'userDomainService', 'marketplaceUIService', 'viewFlexService', 'dictionaryService', permissionCtrl]);
});