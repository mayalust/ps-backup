angular.module('myApp.directive')
  .directive('advanceTab', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/tab.html',
      replace: true,
      scope: {
        toolbars: '='
      },
      link: function (scope, element, attr) {
        // add
        scope.tabLabelLists = [
          {
            id: "0",
            name: "工作台"
          }
        ];
        scope.toolbarHandler = function (id, name) {
          scope.isShowContent = id;
          var item = {
            id: id,
            name: name
          };
          var flag = true;
          scope.tabLabelLists.forEach(function (ele, index) {
            if (ele.id == id) {
              // alert(ele.name + "已经存在");
              flag = false;
            }
          });
          if (flag) {
            scope.tabLabelLists.push(item);
          }
        };
        // delete
        scope.deleteItemTab = function ($index, name) {
          scope.tabLabelLists.splice($index, 1);
          scope.isShowContent=scope.tabLabelLists[$index-1].id
        };
        //select
        scope.isShowContent=0;
        scope.selecItemTab = function (id, index) {
          scope.isShowContent = id;
        }
      }

    }
  });