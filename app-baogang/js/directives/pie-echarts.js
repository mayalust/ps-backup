angular.module('myApp.directive')
    .directive('pieEcharts', function () {
        return {
            restrict: 'E',
            template: ' <div class="col-md-3" style="margin-top: 2%">\n' +
            '               <div class="pie" style="height: 700px"></div>\n' +
            '           </div>',
            replace: true,
            scope: {
                pieoption: '='
            },
            link: function (scope, element, attr) {
                scope.$watch("option", function (newVal) {
                    var myChart = echarts.init($(element).find(".pie")[0]);
                    myChart.setOption(scope.pieoption);
                })
            }

        }
    });