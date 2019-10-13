define({
  "on": {
    "init": function(event) {
      runtime("主导航TAB开始加载");
      var target = event.target;
      var user = target.getCurrentUser();
      var roleID = user.currentRoleID ? user.currentRoleID.split(",")[0] :user.roleID;
      target.getRoleByID(roleID, function(role){
        var tabs = JSON.parse(role.values) || [];
        tabs = tabs.map(function(t, i){
          return {
            id : i,
            label : t.name,
            alias : t.alias,
            viewId : t.viewId
          }
        });
        var ROLE = -1; //-1表示不启用任何原来的配置
        target.setValue("global/ROLE", ROLE);
        target.setValue("global/tabs", tabs);
        //如果存在choselist和配置，则使用该内容
        //没有的话设置一个
        if(!tabs || tabs.length == 0) {
          tabs = [];
          tabs.push({
            id: 0,
            label: "我的首页",
            default: "baogang/alert/home"
          })
        }
        var CACHEDVALUENAME = "controlPanelLevel1Navigation";
        var CHANGENAVEEVENT = "lv1viewchange";
        var MOVETOEVENT = "lv1moveTo";
        var NAVIGATETO = "navigateTo";
        // ------------------- 初始化内容在这里设置

        target.setScopeValue("CACHEDVALUENAME", CACHEDVALUENAME);
        target.setScopeValue("CHANGENAVEEVENT", CHANGENAVEEVENT);
        target.setScopeValue("MOVETOEVENT", MOVETOEVENT);
        var param = target.getParameter("main");
        var main, path, temp_view;
        if(param instanceof Array) {
          main = param[0];
          path = param[1];
          if(path.indexOf("viewId:") != -1) {
            temp_view = {
              viewId: path.split("viewId:")[1]
            }
          }
        } else {
          main = param
        }
        var editMode = false;
        var subTabs = [];
        var updateNaviList = function() {
          var obj = {
            tabs: tabs,
            subTabs: subTabs,
            editMode: editMode
          };
          target.saveEditorStatus(CACHEDVALUENAME, obj);
        }
        var select = function(item, path) {
          var viewId = item.viewId;
          if(temp_view) {
            target.setScopeValue("INITPARAMS", {
              item: temp_view
            });
          } else {
            target.setScopeValue("INITPARAMS", {
              item: item,
              path: path
            });
          }
          target.trigger(CHANGENAVEEVENT, target.getScopeValue("INITPARAMS"));
        };
        var saveView = function(item, callback) {
          var viewTitle = item.label;
          var viewType = "dashboard";
          var viewId = item.viewId;
          if(viewId) {
            target.updateView({
              viewId: viewId,
              viewTitle: item.label,
              viewType: "dashboard"
            }, function(data) {
              callback(data);
            })
          } else {
            var run = function(json) {
              var viewTitle = item.label + "(" + (item.default || "自定义") + ")";
              target.getAllMyViews(function(views) {
                var find = views.find(function(view) {
                  viewTitle == view.viewTitle;
                });
                if(find) {
                  item.viewId = find.viewId;
                  callback(find);
                } else {
                  target.addView({
                    viewTitle: item.label + "(" + (item.default || "自定义") + ")",
                    viewType: "dashboard",
                    content: json ? json : null,
                  }, function(data) {
                    item.viewId = data.data.viewId;
                    callback(data);
                  })
                }
              });
            };
            if(item.default) {
              target.Info("../../localdb/echartTemplate/" + item.default+".json", function(json) {
                run(JSON.stringify(json));
              })
            } else {
              run();
            }
          }
        };

        var deleteView = function(item) {
          if(item.viewId) {
            target.deleteView(item.viewId);
          };
        }
        var render = function(view) {
          var tabFilter = tabs.filter(function(elem) {
            return elem.show != false || editMode;
          })
          var tabsClone = tabFilter.map(function(elem) {
            var clone = elem.$clone();
            clone.on = {
              click: function(el) {
                /**
                target.setParameter("main", elem.id);
                target.trigger(CHANGENAVEEVENT, {
                  item : elem
                });
                main = tabsClone.indexOf(clone);
                render()*/
                target.navigateTo("index", {
                  main : elem.id
                }, "self")
              }
            };
            if(editMode) {
              clone.addOn = [{
                icon: "glyphicon glyphicon-scale",
                on: {
                  click: function(el) {
                    var run = function() {
                      var viewId = elem.viewId;
                      target.linkTo("../app-freeboard/index.html#/freeboard/view/dashboard/" + elem.viewId + "/0");
                    }
                    if(!elem.viewId) {
                      saveView(elem, function() {
                        updateNaviList();
                        run();
                      });
                    } else {
                      run();
                    }
                  }
                }
              }, {
                icon: "glyphicon glyphicon-edit",
                on: {
                  click: function(event) {
                    target.createPopupBypath("info", {
                      title: "工作台信息",
                      theme: "system",
                      width: 500,
                      on: {
                        submit: function(item) {

                        }
                      }
                    }, elem);
                  }
                }
              }]
            };
            return clone;
          });

          var subTabsFilter = subTabs.filter(function(elem) {
            return elem.show || editMode;
          })

          var subTabsClone = subTabsFilter.map(function(elem) {
            var clone = elem.$clone();
            clone.on = {
              click: function(el) {
                target.tabInx = tabFilter.length + subTabsFilter.indexOf(elem);
                render();
              }
            }
            if(editMode) {
              clone.$extension({
                addOn: [{
                  icon: "glyphicon glyphicon-edit",
                  on: {
                    click: function() {
                      target.createPopupBypath("popup", {
                        title: "编辑工作台",
                        theme: "system",
                        width: 500,
                        on: {
                          submit: function(item) {
                            elem.label = item.name;
                            elem.id = item.id;
                            saveView(elem, function() {
                              updateNaviList();
                              render();
                            });
                          }
                        }
                      }, elem);
                    }
                  }
                }, {
                  icon: "glyphicon glyphicon-scale",
                  on: {
                    click: function(event) {
                      target.linkTo("../app-freeboard/index.html#/freeboard/view/dashboard/" + elem.viewId + "/0");
                    }
                  }
                }, {
                  icon: "proudsmart ps-delete-02",
                  on: {
                    click: function(event) {
                      var inx = subTabs.indexOf(elem);
                      subTabs.splice(inx, 1);
                      deleteView(elem);
                      updateNaviList();
                      render();
                    }
                  }
                }]
              });
            }
            return clone;
          });

          var concat = tabFilter.concat(subTabsFilter);
          if(view) {
            target.tabInx = concat.indexOf(view);
          };

          var find = concat.find(function(elem) {
            return elem.id == main;
          });

          if(find) {
            target.tabInx = concat.indexOf(find);
          };

          if(target.tabInx > concat.length - 1) {
            target.tabInx = concat.length - 1;
          };

          select(concat[target.tabInx], path);

          if(editMode) {
            var clist = tabsClone.concat(subTabsClone).concat([{
              id: -1,
              label: "",
              icon: "glyphicon glyphicon-plus",
              on: {
                click: function(elem) {
                  target.createPopupBypath("popup", {
                    title: "新建工作台",
                    theme: "system",
                    width: 500,
                    on: {
                      submit: function(item) {
                        var item = {
                          id: item.id,
                          label: item.name
                        };
                        saveView(item, function() {
                          subTabs.push(item);
                          updateNaviList();
                          render();
                        });
                      }
                    }
                  });
                }
              }
            }, {
              id: -1,
              label: "",
              icon: "glyphicon glyphicon-cog",
              on: {
                click: function(elem) {
                  target.createPopupBypath("setting", {
                    title: "设置",
                    theme: "system",
                    width: 500,
                    on: {
                      submit: function(data) {
                        tabs = data.tabs;
                        editMode = data.editMode;
                        subTabs = data.subTabs;
                        updateNaviList();
                        render();
                      }
                    }
                  }, {
                    editMode: editMode,
                    tabs: tabs,
                    subTabs: subTabs
                  });
                }
              }
            }, {
              id: -2,
              label: "",
              icon: "glyphicon glyphicon-transfer",
              on: {
                click: function(elem) {
                  target.createPopupBypath("viewpare", {
                    title: "配置区域，产线，设备对应的组太视图",
                    theme: "system",
                    width: 700,
                    on: {
                      submit: function(data) {
                        target.createPopupBypath("viewpare", {
                          title: "配置视图",
                          theme: "system",
                          width: 500,
                          on: {
                            submit: function(item) {

                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            }])
          } else {
            var clist = tabsClone.concat(subTabsClone).concat([{
              id: -1,
              label: "",
              icon: "glyphicon glyphicon-cog",
              on: {
                click: function(elem) {
                  target.createPopupBypath("setting", {
                    title: "设置",
                    theme: "system",
                    width: 500,
                    on: {
                      submit: function(data) {
                        tabs = data.tabs;
                        editMode = data.editMode;
                        subTabs = data.subTabs;
                        updateNaviList();
                        render();
                      }
                    }
                  }, {
                    editMode: editMode,
                    tabs: tabs,
                    subTabs: subTabs
                  });
                }
              }
            }]);
          }
          setTimeout(function(){
            target.render(clist, {
              class: "steelNavi"
            });
          });
          runtime("主导航TAB加载完成!!")
        };
        target.on("navigateTo", function(id) {
          var concat = tabs.concat(subTabs);
          var find = concat.find(function(elem) {
            return elem.id == id;
          });
          render(find);
          if(find) {
            select(find);
          }
        })
        render();
      })
    }
  },
  "format": {
    "id": "id",
    "label": "label"
  }
});