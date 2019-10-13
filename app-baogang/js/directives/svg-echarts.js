angular.module('myApp.directive')
    .directive('svgEcharts', function () {
        return {
            restrict: 'E',
            template: '  <div class="col-md-3 svg-echarts">\n' +
            '                        <div class="title">\n' +
            '                            {{option.title.text}}\n' +
            '                        </div>\n' +
            '                        <div class="left">\n' +
            '                            <div class="sub-title" ng-repeat="serie in option.series">\n' +
            '                               <div class="sub-title">{{serie.name}}</div>\n' +
            '                               <div class="counts">{{serie.data[0]}}</div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="center">\n' +
            '                            <div class="legend-blue"></div>\n' +
            '                            <div class="legend-yellow"></div>\n' +
            '                            <div class="legend-red"></div>\n' +
            '                        </div>\n' +
            '                        <div class="right">\n' +
            '                            <div class="main" style=" width: 400px;height: 620px;"></div>\n' +
            '                        </div>\n' +
            '                    </div>',
            replace: true,
            scope: {
                option: '='
            },
            link: function (scope, element, attr) {
                scope.$watch("option", function (newVal) {
                    svgcharts.init($(element).find(".main")[0], scope.option);
                })
            }

        }
    });