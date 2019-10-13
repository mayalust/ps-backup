angular.module('myApp.controllers')
  .controller('tabCtrl', function ($scope, $state, $stateParams) {

    $scope.toolbars = [
      {
        id: "1",
        name: "工具1"
      },
      {
        id: "2",
        name: "工具2"
      },
      {
        id: "3",
        name: "工具3"
      },
      {
        id: "4",
        name: "工具4"
      },
      {
        id: "5",
        name: "工具5"
      }
    ];
    // add
    $scope.tabLabelLists = [
      {
        id: "0",
        name: "工作台"
      }
    ];
    $scope.toolbarHandler = function (id, name) {
      $scope.isShowContent = id;
      var item = {
        id: id,
        name: name
      };
      var flag = true;
      $scope.tabLabelLists.forEach(function (ele, index) {
        if (ele.id == id) {
          alert(ele.name + "已经存在");
          flag = false;
        }
      });
      if (flag) {
        $scope.tabLabelLists.push(item);
      }
    };
    // delete
    $scope.deleteItemTab = function ($index, name) {
      $scope.tabLabelLists.splice($index, 1);
      $scope.isShowContent=$scope.tabLabelLists[$index-1].id
    };
    //select
    $scope.isShowContent=0;
    $scope.selecItemTab = function (id, index) {
      $scope.isShowContent = id;
    }
  });

