define(['directives/directives'], function(directives) {
  'use strict';
  directives.directive("adminLiteToggle", ["$timeout", function(timeout) {
    var directive = {};
    directive.scope = {};
    directive.restrict = "A";
    directive.link = link;

    function link(scope, element, attr) {
      timeout(function() {
        $.AdminLTE.pushMenu.activate(element)
      });
    }

    return directive;
  }]);
  directives.directive('viewDiv', function() {
    return {
      restrict: 'AEC',
      templateUrl: 'partials/chart.html',
      controller: function($scope, $element) {
        console.info("进入viewDIv：controller");
      },
      link: function(scope, el, attr) {
        console.info("进入viewDIv：link");
      },
      compile: function(element, attributes) {
        return {
          pre: function preLink(scope, element, attributes) {
            console.info("进入viewDIv：preLink");
          },
          post: function postLink(scope, element, attributes) {
            console.info("进入viewDIv：postLink");
          }
        };
      }
    }
  });
  directives.directive('onFinishRenderFilters', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function() {
            scope.$emit('ngRepeatFinished');
          });
        }
      }
    };
  });
  directives.directive('sparkline', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var init = function() {
          $('.sparkbar').each(function() {
            var $this = $(this);
            $this.sparkline('html', {
              type: 'bar',
              height: $this.data('height') ? $this.data('height') : '30',
              barColor: $this.data('color')
            });
          });
          //-----------------
          //- SPARKLINE PIE -
          //-----------------
          $('.sparkpie').each(function() {
            var $this = $(this);
            $this.sparkline('html', {
              type: 'pie',
              height: $this.data('height') ? $this.data('height') : '90',
              sliceColors: $this.data('color')
            });
          });
          //------------------
          //- SPARKLINE LINE -
          //------------------
          $('.sparkline').each(function() {
            var $this = $(this);
            $this.sparkline('html', {
              type: 'line',
              height: $this.data('height') ? $this.data('height') : '90',
              width: '100%',
              lineColor: $this.data('linecolor'),
              fillColor: $this.data('fillcolor'),
              spotColor: $this.data('spotcolor')
            });
          });
        }
        scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
          init();
        });
      }
    };
  }]);
  directives.directive('showtab', function() {
    return {
      link: function(scope, element, attrs) {
        element.click(function(e) {
          e.preventDefault();
          $(element).tab('show');
        });
      }
    };
  });
  directives.directive('menuMessages', function($compile, $timeout) {
    return {
      restrict: 'EA',
      template: '<li  ng-show="menuitems[&quot;F06&quot;]"  class="dropdown notifications-menu"><a  href="#" class="dropdown-toggle" data-toggle="dropdown">' +
      '<i class="fa fa-bell-o"></i>' +
      '<span ng-class="{true:&quot;label label-warning&quot;,false:&quot; label btn-twinkle&quot;}[alertStatus==&quot;default&quot;]" ng-show="unread != 0" ng-bind="unread"></span>' +
      '</a>' +
      '<ul style="width: 300px;max-height: 327px;overflow: hidden;" class="dropdown-menu" ng-slimscroll >' +
      '<li style="background-color:#cdcdcd;" class="header align-center info-box-number">消息通知</li>' +
      '<li ng-if="unread != 0" style="height: 260px;overflow: hidden;">' +
      '<ul class="menu" style="max-height: 255px;overflow-y: auto;">' +
      '<li class="msg-li" ng-repeat="msg in userMessage">' +
      '<p style="margin: 0 0 0px;"><a href class="msg-title " ng-click="messageClick(msg);"  title="{{msg.message.title}}">{{msg.message.title}}</a><span class="pull-right msg-txt" ng-style="msg.msgSty"  ng-click="messageClick(msg);"  title="{{msg.senderTxt}}">{{msg.msgTxt}}</span></p>' +
      '<p style="margin: 0 0 0px;color: #cacaca;">{{msg.message.content}}</p>' +
      '<p style="margin: 0 0 0px;color: #cacaca;">{{msg.message.insertTime | date:"yyyy-MM-dd HH:mm:ss"}}</p>' +
      '</li>' +
      '</ul>' +
      '<li  ng-if="unread == 0"  style="height: 260px;text-align: center;line-height: 260px;">' +
      '您暂时没有新的消息' +
      '</li>' +
      '</li>' +
      //宝钢暂时不用
      // '<li class="footer"><a style="color: #3c8dbc !important;" href="../app-uc/index.html#/message">查看更多</a></li>' +
      '</ul>' +
      '<audio id="noticeAudio" preload="auto">' +
      '<source src="../music/song.mp3" type="audio/mpeg">'+
      '</audio>'+
      '</li>',
      replace: true,
      link: function(scope, iElem, iAttr, ngmodel) {},
      controller: ['$scope', '$location', 'SwSocket', 'growl', '$element', '$attrs', 'psMessageService','configUIService',
        function($scope, $location, SwSocket, growl, $element, $attrs, psMessageService, configUIService) {
          $scope.msgSty;
          $scope.userMessage = [];
          var uuid = Math.uuid();
          $scope.messageTypeArr = {};
          $scope.configGroupsArr = {};
          $scope.alertStatus = "default";
          //获取所有的全局配置
          var configList = function() {
            configUIService.getAllConfigs(function(returnObj){
              if(returnObj.code == 0) {
                returnObj.data.forEach(function(item) {
                  $scope.configGroupsArr[item.groupName] = item;
                });
                if(returnObj.data.length > 0 && $scope.configGroupsArr["messageType"] != undefined && $scope.configGroupsArr["messageType"].value){
                  var messageType = eval("(" + $scope.configGroupsArr["messageType"].value + ")");
                  $scope.messageTypeArr= messageType;
                }
                queryMessage();
              }
            });
          };
          var messageTypeReturn = function(obj) {
            if(obj.message){
              if($scope.messageTypeArr[obj.message.msgType] != undefined){
                obj["senderTxt"] = $scope.messageTypeArr[obj.message.msgType].senderTxt;
                obj["msgTxt"] = $scope.messageTypeArr[obj.message.msgType].msgTxt;
                obj["msgSty"] = {
                  "background-color": $scope.messageTypeArr[obj.message.msgType].msgSty
                };
              }
            };
            return obj;
          }
          //消息返回处理
          var callback = function(evendata) {
            var dataObj = messageTypeReturn(evendata.data);
            if(dataObj.message){
              if (dataObj.message.msgType == "alert_message_insystem" || dataObj.message.msgType == "gateway_message" || dataObj.message.msgType == "payment_message") {

                /**
                 *
                 * 宝钢告警添加消息通知 加入声音提醒
                 * hanxing 2018-12-21
                 */
                if(dataObj.message.msgType == "alert_message_insystem"){
                  $("#noticeAudio")[0].play();
                }
                growl.error("您有一条新的" + dataObj.senderTxt + "", {});
              } else if (dataObj.message.msgType == "command_message" || dataObj.message.msgType == "energyconsume_message" || dataObj.message.msgType == "datareport_message" || dataObj.message.msgType == "devicereport_message") {
                if (dataObj.message.title.search("失败") > -1) {
                  growl.error(dataObj.senderTxt + ":" + dataObj.message.title, {});
                } else {
                  growl.info(dataObj.senderTxt + ":" + dataObj.message.title, {});
                }
              } else {
                growl.info("您有一条新的" + dataObj.senderTxt + "", {});
              }
              var msgObj = evendata.data;
              taskShow(msgObj, 1);
            };
          };
          //status 1是从websocket上推送上来2是直接查询
          var taskShow = function(message, status,unread) {
            var msgObj = message;
            if(message) {
              if(status == 1) {
                msgObj = [message];
              }
              var dataMsg = [];
              for(var j in msgObj) {
                // if(j < 4) {
                  var dataObj = messageTypeReturn(msgObj[j])
                  dataMsg.push(dataObj);
                // }
              }
              if(status == 2) {
                $scope.userMessage = dataMsg;
                $scope.unread = unread;
              } else {
                $scope.userMessage.unshift(message);
                if($scope.unread > 0) {
                  $scope.unread = $scope.unread + 1;
                } else {
                  $scope.unread = 1;
                }
                $scope.$apply();
              }

            }
          }
          $scope.messageClick = function(messageData) {
            if (messageData.message.msgType == "ticket_message" || messageData.message.msgType == "alert_message_insystem") {
              psMessageService.modifyMsgStatus([messageData.message.messageId], function(res) {
                if(res.code == 0) {
                  for(var i in $scope.userMessage){
                    if($scope.userMessage[i].messageId == messageData.messageId){
                      $scope.userMessage.splice(i, 1);
                    }
                  }
                  $scope.unread = $scope.unread -1;

                  // $scope.$apply();
                }
              })
            }else{
              psMessageService.modifyMsgStatus([messageData.message.messageId], function(res) {
                if (res.code == 0) {
                  queryMessage();
                  var str2 = $.trim(messageData.message.content);
                  if (messageData.message.msgType == "ticket_message") {//工单任务
                    // var orderId = str2.split("任务ID：")[1];
                    // var orderAddress = str2.split("任务地址：")[1];
                    // if (orderAddress) {
                    //   location.href = orderAddress.split(",")[0] + "/" + orderId.split(",")[0];
                    // } else {
                    //   location.href = '../app-oc/index.html#/orderdetail/' + orderId.split(",")[0] + '/task/message';
                    // }
                  } else if (messageData.message.msgType == "ticket_maintenance_message") {//工单任务
                    // var orderId = str2.split("任务ID：")[1];
                    // location.href = '../app-oc/index.html#/deviceTask/' + orderId.split(",")[0] + '';
                  } else if (messageData.message.msgType == "payment_message") {
                    location.href = '../app-uc/index.html#/expenses';
                  } else if (messageData.message.msgType == "alert_message_insystem") {//设备告警
                    // location.href = '../app-oc/index.html#/configAlert/' + $.trim(messageData.message.content) + '/alert';
                  } else if (messageData.message.msgType == "maintenance_msg") {
                    location.href = '../app-oc/index.html#/maintenance/' + $.trim(messageData.message.content) + '';
                  }else{
                    location.href = '../app-uc/index.html#/messageDetail/' + messageData.message.messageId + '';
                  }
                }
              });
            }
          }
          var param = {};
          var operation = "register";
          SwSocket.register(uuid, operation, callback);
          //websocket发送请求
          SwSocket.send(uuid, operation, 'msg', param);
          var queryMessage = function() {
            psMessageService.queryMessageByStatusAndUserIDWithPage([0,{"start":0,"length":10,"sortType":"DESC","sort":"_id"}], function(obj) {
              if(obj.code == 0) {
                /* 前端加日期排序功能
                obj.data.sort(function(a, b) {
                  return a.message.insertTime < b.message.insertTime ? 1 : -1;
                });
                */
                taskShow(obj.data.data, 2,obj.data.total);
              }
            });
          };
          configList();
          //注销scope时注销方法heartBeat，回调函数callback
          $scope.$on("$destroy", function() {
            SwSocket.unregister(uuid);
          });
        }
      ]
    };
  });
  directives.directive("loading", ["$timeout", function(timeout) {
    return {
      replace: true,
      restrict: 'EA',
      link: function($scope, $element, attrs) {
        var htmlStr = '<div id="warpShow" class="modal-backdrop fade in display-none"   style="z-index: 1040;"></div>' +
          '<div id="loadingShow" class="modal bootstrap-dialog type-primary fade size-normal in display-none"  role="dialog" aria-hidden="true" id="ad822433-1650-4880-8b58-ed07a2bae88f"' +
          'aria-labelledby="ad822433-1650-4880-8b58-ed07a2bae88f_title"  tabindex="-1" style="z-index: 1050;  padding-left: 17px;  text-align: center;">' +

          '<img style="width: 200px;margin-top: 10%;" src="../app-editor/images/loading_spinner.gif">' +

          ' </div>';
        $element.append(htmlStr);

      },
      controller: ['$scope', '$location', 'SwSocket', 'growl', '$element', '$attrs', 'psMessageService',
        function($scope, $location, SwSocket, growl, $element, $attrs, psMessageService) {
          $scope.$watch("loadingShow", function(newVal, oldVal) {
            if (newVal) {
              if (newVal) {
                $("#warpShow").addClass("menu-open").removeClass("display-none");
                $("#loadingShow").addClass("menu-open").removeClass("display-none");
              } else {
                $("#warpShow").removeClass("menu-open").addClass("display-none");
                $("#loadingShow").removeClass("menu-open").addClass("display-none");
              }
            } else {
              if (newVal) {
                $("#warpShow").addClass("menu-open").removeClass("display-none");
                $("#loadingShow").addClass("menu-open").removeClass("display-none");
              } else {
                $("#warpShow").removeClass("menu-open").addClass("display-none");
                $("#loadingShow").removeClass("menu-open").addClass("display-none");
              }
            }
          });
        }
      ]
    };
  }]);
});
