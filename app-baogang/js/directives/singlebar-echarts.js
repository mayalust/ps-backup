angular.module('myApp.directive')
    .directive('singlebarEcharts', function () {
        return {
            restrict: 'E',
            template: ' <div class="main" style=" width:140px;height: 400px;background: #2a3a57"></div>',
            replace: true,
            scope: {
                option: '='
            },
            link: function (scope, element, attr) {

                var options = {
                    "title": {
                        "text": "宝山  5000"
                    },
                    "grid": {
                        width: "140",
                        height: "400",
                        left:"",
                        top:""
                    },

                    "tooltip": {},
                    "legend": {
                        "data": [15, 45, 4950]
                    },
                    "xAxis": {
                        show: false
                    },
                    "yAxis": {
                        show: false
                    },
                    "series": [
                        {
                            "name": "正常台数",
                            "type": "singleBar",
                            "max": 5000,
                            "data": 2330,
                            "itemStyle": {
                                normal: {
                                    color: "#e4c154",
                                    // color: "#7be464"
                                }
                            }
                        }
                    ]
                }

                svgcharts.init($(".main")[0], options);
                // scope.$watch("option", function (newVal) {
                //
                // })
            }

        }
    });