angular.module('myApp.controllers')
    .controller('loginCtrl', function ($scope, userList, $state) {
        /**
         * 状态总览
         */
        $scope.options = [
            {
                "title": {
                    "text": "宝山  5000"
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
                        "type": "3dbar",
                        "stack": '总量',
                        "data": [
                            4950
                        ]
                    }, {
                        "name": "警告台数",
                        "type": "3dbar",
                        "stack": '总量',
                        "data": [
                            15
                        ]
                    },
                    {
                        "name": "预警台数",
                        "type": "3dbar",
                        "stack": '总量',
                        "data": [
                            45
                        ]
                    }
                ]
            }, {
                "title": {
                    "text": "东山  2300"
                },
                "tooltip": {},
                "legend": {
                    "data": [15, 45, 4950]
                },
                "xAxis": {
                    show: false
                },
                "yAxis": {
                    show: false,
                },
                "series": [
                    {
                        "name": "正常台数",
                        "stack": '总量',
                        "type": "3dbar",
                        "data": [
                            490
                        ],
                    }, {
                        "name": "警告台数",
                        "stack": '总量',
                        "type": "3dbar",
                        "data": [
                            150
                        ],

                    },
                    {
                        "name": "预警台数",
                        "type": "3dbar",
                        "stack": '总量',
                        "data": [
                            450
                        ],
                    }
                ]
            }, {
                "title": {
                    "text": "青山  5000"
                },
                "tooltip": {},
                "legend": {
                    "data": [15, 45, 4950]
                },
                "xAxis": {
                    show: false
                },
                "yAxis": {
                    show: false,
                },
                "series": [
                    {
                        "name": "正常台数",
                        "stack": '总量',
                        "type": "3dbar",
                        "data": [
                            490
                        ],
                    }, {
                        "name": "警告台数",
                        "stack": '总量',
                        "type": "3dbar",
                        "data": [
                            150
                        ],

                    },
                    {
                        "name": "预警台数",
                        "type": "3dbar",
                        "stack": '总量',
                        "data": [
                            450
                        ],
                    }
                ]
            }, {
                "title": {
                    "text": "梅山  1500"
                },
                "tooltip": {},
                "legend": {
                    "data": [15, 45, 4950]
                },
                "xAxis": {
                    show: false
                },
                "yAxis": {
                    show: false,
                },
                "series": [
                    {
                        "name": "正常台数",
                        "stack": '总量',
                        "type": "3dbar",
                        "data": [
                            490
                        ],
                    }, {
                        "name": "警告台数",
                        "stack": '总量',
                        "type": "3dbar",
                        "data": [
                            1503
                        ],

                    },
                    {
                        "name": "预警台数",
                        "type": "3dbar",
                        "stack": '总量',
                        "data": [
                            4500
                        ]
                    }
                ]
            }

        ];




        /**
         * 当前报警事件追踪（一周内）
         */



        $scope.pieoptions = [
            {
                title: {
                    text: "东山",
                    textStyle: {
                        color: "#ffffff",
                        fontSize: '64',
                    },
                    left: "center",
                    bottom: "110"
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top: 'top'
                },
                legend: {
                    left: 'center',
                    bottom: '26',
                    itemWidth: 30,
                    itemHeight: 30,
                    orient: 'horizontal',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 30
                    },
                    icon: 'circle',
                    data: ['335', '310', '234'],
                },
                graphic: [
                    {
                        type: 'image',
                        id: 'logo',
                        right: "110",
                        top: "0",
                        bounding: 'raw',
                        style: {
                            image: 'images/circlebg.png',
                            width: 540,
                        }
                    }
                ],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center: ['50%', '38%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },

                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {
                                value: 335,
                                name: '335',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(5,193,255,1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(15,15,90,1)'
                                        }])
                                    }
                                }
                            },
                            {
                                value: 310,
                                name: '310',
                                itemStyle: {
                                    normal: {
                                        color: '#e74e54'
                                    }
                                }
                            },
                            {
                                value: 234,
                                name: '234',
                                itemStyle: {
                                    normal: {
                                        color: '#e8b609'
                                    }
                                }
                            }
                        ]
                    }, {
                        name: '完成处理',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: true,
                        radius: ['50', '50'],
                        center: ['50%', '38%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: [
                            {
                                label: {
                                    normal: {
                                        formatter: '879',
                                        textStyle: {
                                            color: '#000000',
                                            fontSize: 100,
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: {
                    text: "东山",
                    textStyle: {
                        color: "#ffffff",
                        fontSize: '64',
                    },
                    left: "center",
                    bottom: "110"
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top: 'top'
                },
                legend: {
                    left: 'center',
                    bottom: '26',
                    itemWidth: 30,
                    itemHeight: 30,
                    orient: 'horizontal',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 30,
                    },
                    icon: 'circle',
                    data: ['335', '310', '234'],
                },
                graphic: [
                    {
                        type: 'image',
                        id: 'logo',
                        right: "110",
                        top: "0",
                        bounding: 'raw',
                        style: {
                            image: 'images/circlebg.png',
                            width: 540,
                        }
                    }
                ],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center: ['50%', '38%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },

                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {
                                value: 335,
                                name: '335',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(5,193,255,1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(15,15,90,1)'
                                        }])
                                    }
                                }
                            },
                            {
                                value: 310,
                                name: '310',
                                itemStyle: {
                                    normal: {
                                        color: '#e74e54'
                                    }
                                }
                            },
                            {
                                value: 234,
                                name: '234',
                                itemStyle: {
                                    normal: {
                                        color: '#e8b609'
                                    }
                                }
                            }
                        ]
                    }, {
                        name: '完成处理',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: true,
                        radius: ['50', '50'],
                        center: ['50%', '38%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: [
                            {
                                label: {
                                    normal: {
                                        formatter: '879',
                                        textStyle: {
                                            color: '#000000',
                                            fontSize: 100,
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: {
                    text: "东山",
                    textStyle: {
                        color: "#ffffff",
                        fontSize: '64',
                    },
                    left: "center",
                    bottom: "110"
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top: 'top'
                },
                legend: {
                    left: 'center',
                    bottom: '26',
                    orient: 'horizontal',
                    itemWidth: 30,
                    itemHeight: 30,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 30,
                    },
                    icon: 'circle',
                    data: ['335', '310', '234'],
                },
                graphic: [
                    {
                        type: 'image',
                        id: 'logo',
                        right: "110",
                        top: "0",
                        bounding: 'raw',
                        style: {
                            image: 'images/circlebg.png',
                            width: 540,
                        }
                    }
                ],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center: ['50%', '38%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },

                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {
                                value: 335,
                                name: '335',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(5,193,255,1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(15,15,90,1)'
                                        }])
                                    }
                                }
                            },
                            {
                                value: 310,
                                name: '310',
                                itemStyle: {
                                    normal: {
                                        color: '#e74e54'
                                    }
                                }
                            },
                            {
                                value: 234,
                                name: '234',
                                itemStyle: {
                                    normal: {
                                        color: '#e8b609'
                                    }
                                }
                            }
                        ]
                    }, {
                        name: '完成处理',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: true,
                        radius: ['50', '50'],
                        center: ['50%', '38%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: [
                            {
                                label: {
                                    normal: {
                                        formatter: '879',
                                        textStyle: {
                                            color: '#000000',
                                            fontSize: 100,
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: {
                    text: "东山",
                    textStyle: {
                        color: "#ffffff",
                        fontSize: '64',
                    },
                    left: "center",
                    bottom: "110"
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top: 'top'
                },
                legend: {
                    left: 'center',
                    bottom: '26',
                    itemWidth: 30,
                    itemHeight: 30,
                    orient: 'horizontal',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 30,
                    },
                    icon: 'circle',
                    data: ['335', '310', '234'],
                },
                graphic: [
                    {
                        type: 'image',
                        id: 'logo',
                        right: "110",
                        top: "0",
                        bounding: 'raw',
                        style: {
                            image: 'images/circlebg.png',
                            width: 540,
                        }
                    }
                ],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center: ['50%', '38%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },

                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {
                                value: 335,
                                name: '335',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(5,193,255,1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(15,15,90,1)'
                                        }])
                                    }
                                }
                            },
                            {
                                value: 310,
                                name: '310',
                                itemStyle: {
                                    normal: {
                                        color: '#e74e54'
                                    }
                                }
                            },
                            {
                                value: 234,
                                name: '234',
                                itemStyle: {
                                    normal: {
                                        color: '#e8b609'
                                    }
                                }
                            }
                        ]
                    }, {
                        name: '完成处理',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: true,
                        radius: ['50', '50'],
                        center: ['50%', '38%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: [
                            {
                                label: {
                                    normal: {
                                        formatter: '879',
                                        textStyle: {
                                            color: '#000000',
                                            fontSize: 100,
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ];

        /**
         * 故障异常预报分类（2017年6月）
         */

        var values = (function () {
            var rs = [];
            for (var i = 0; i < 8; i++) {
                rs.push(parseInt(Math.random() * 30));
            }
            return rs;
        })();
        var legends = (function () {
            var rs = [];
            for (var i = 0; i < 8; i++) {
                rs.push("项目" + i);
            }
            return rs;
        })();
        var barOption = {
            title: {
                text: '故障异常预报分类（2017年6月）'
            },
            grid: {
                left: "5%",
                height: "80%",
                top: "5%",
                width: '90%'
            },
            legend: {
                data: ['销量']
            },
            xAxis: {
                show: true,
                base: {
                    show: true
                },
                data: legends,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 26,
                    color: "#eee"
                }
            },
            yAxis: {
                show: true,
                max: 30,
                splitNumber: 5,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(250,250,250,.3)"
                    }
                },
                axisTick: {
                    color: "#eee",
                    show: true
                },
                axisLabel: {
                    margin: 20,
                    color: "#eee"
                }
            },
            series: [{
                stack: "总量",
                name: '销量1',
                barwidth: .4,
                type: '3dbar',
                colors: values.map(function (elem) {
                    if (elem > 25) {
                        return "#fc6161";
                    } else if (elem > 12) {
                        return "#fcd661";
                    } else if (elem > 5) {
                        return "#048cff";
                    } else {
                        return "#79e4e4";
                    }
                }),
                data: values
            }]
        };
        svgcharts.init($("#3dbarEchart")[0], barOption);


        /**
         *设备种类统计
         */

        var deviceChart = echarts.init(document.getElementById('device'));
        var deviceOption = {
            title: {
                text: "设备种类统计",
                textStyle: {
                    color: "#CECECE",
                    fontSize: 90
                },
                left: "80",
                top: '100'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#e8b609', '#e74e54', '#29b4ec'],
            grid: {
                top: '26%',
                left: '3%',
                right: '4%',
                bottom: '14%',
                containLabel: true,

            },
            legend: {
                right: '20%',
                top: '20%',
                orient: 'vertical',
                textStyle: {
                    color: '#CECECE',
                    fontSize: 60,
                    verticalAlign: 'bottom'
                },
                itemWidth: 140,
                itemHeight: 226,
                icon: 'rect',
                data: ['335', '310', '234'],
                formatter: function (name) {
                    return "指标名称\n" + name;
                }
            },
            graphic: [
                {
                    type: 'image',
                    left: '184',
                    top: '272',
                    z: -10,
                    bounding: 'raw',
                    style: {
                        image: 'images/circle_equipment.png',
                        width: 660,
                    }
                }
            ],
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['30%', '60%'],
                    center: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 90,
                                fontWeight: 'bold',
                                color: '#CECECE'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: '335',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fcd661'
                                    }, {
                                        offset: 1,
                                        color: '#fca81f'
                                    }])
                                }
                            }

                        },
                        {
                            value: 310,
                            name: '310',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#48e4c1'
                                    }, {
                                        offset: 1,
                                        color: '#15aa97'
                                    }])
                                }
                            }
                        },
                        {
                            value: 234,
                            name: '234',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#2cc1ff'
                                    }, {
                                        offset: 1,
                                        color: '#148ccb'
                                    }])
                                }
                            }
                        }
                    ]
                }
            ]
        };
        deviceChart.setOption(deviceOption);

        /**
         * 系统公告
         */

        $scope.contents = [
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            },
            {
                text: '某某某某系某某某某统发布通知，注意生产流程已恢复完成',
                datetime: '2017-07-01 13:04:13'
            }
        ];
        $scope.showContent = function (e) {

            $(".content-text").each(function (index, ele) {
                var tdText = $(ele).html();
                if (ele.scrollWidth - ele.offsetWidth > 0) {
                    $(ele).attr("title", tdText);
                    $(ele).css("cursor", "pointer");
                }
            });
        };

        // 文字滚动
        function autoScroll(obj) {
            $(".content-box").animate({
                marginTop: "-20px"
            }, 4000,function () {
                $(this).animate({marginTop: "0px"},4000).find("ul:first").appendTo(this);
            })

        }
        $scope.sh = setInterval(autoScroll,1000);

        $scope.leaveContent = function () {

            $scope.sh  = setInterval(autoScroll,1000);
             

        };



        $scope.enterContent = function () {

             
            clearInterval($scope.sh);

        };













        /**
         * 设备总体健康报表
         */

        var lineEchart = echarts.init(document.getElementById('lineEchart'));
        var lineEchartOption = {
            title: {
                text: "设备总体健康报表",
                textStyle: {
                    color: "#CECECE",
                    fontSize: 90
                },
                left: "80",
                top: '100'
            },
            tooltip: {
                trigger: 'axis'
            },
            color: ['#e8b609', '#e74e54', '#79e4e4', '#29b4ec'],
            grid: {
                top: '26%',
                left: '3%',
                right: '4%',
                bottom: '14%',
                containLabel: true,
            },
            legend: {
                right: '60',
                top: '100',
                itemWidth: 126,
                itemHeight: 60,
                orient: 'horizontal',
                textStyle: {
                    color: '#CECECE',
                    fontSize: 60
                },
                icon: 'roundRect',
                data: ['宝山', '东山', '青山', '梅山']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                nameTextStyle: {
                    fontSize: '16'
                },
                axisLabel: {
                    height: '50',
                    textStyle: {
                        color: '#CECECE',
                        fontSize: 60
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#CECECE'
                    }
                },
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                type: 'value',
                axisLine: true,
                axisLabel: {
                    formatter: '{value} %',
                    textStyle: {
                        color: '#CECECE',
                        fontSize: 60
                    }
                }
            },
            series: [
                {
                    name: '宝山',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            width: 18
                        }
                    },
                    symbolSize: 25,
                    data: [30, 33, 34, 33, 42, 35, 34]
                },
                {
                    name: '东山',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            width: 18
                        }
                    },
                    symbolSize: 25,
                    data: [5, 2, 2, 5, 3, 2, 3],
                },
                {
                    name: '青山',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            width: 18
                        }
                    },
                    symbolSize: 25,
                    data: [20, 30, 15, 15, 22, 23, 34],
                },
                {
                    name: '梅山',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            width: 18
                        }
                    },
                    symbolSize: 25,
                    data: [33, 30, 42, 35, 43, 23, 32],
                }

            ],
            graphic: [
                {
                    type: 'image',
                    id: 'logo',
                    right: '56',
                    bottom: '21%',
                    z: 1000,
                    bounding: 'raw',
                    style: {
                        image: 'images/shadow.png',
                        width: 2950
                    }
                }
            ],
        };
        lineEchart.setOption(lineEchartOption);


        // 方法调用

        $scope.testBtn = function () {
             

            $scope.user = {
                page: 1,
                start: 0
            };
            userList.getList($scope.user).then(function (data) {
                 
            })
        }

        $scope.NextPage = function () {
            $state.go('nav', {
                name: 'login'
            })
        }
    });