angular.module('myApp.controllers')
  .controller('navCtrl', function ($scope, $state, $stateParams) {
    //  
    //  
    // $scope.backPage = function () {
    //     $state.go('login')
    // }

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


  });