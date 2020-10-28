let myChart = echarts.init(document.getElementById('main'));

//测试数据
let data = [
    ['2020-05-19', 9],
    ['2020-06-02', 3],
    ['2020-08-22', 5],
    ['2020-10-23', 8],
    ['2020-10-24', 2],
    ['2020-10-25', 3],
    ['2020-10-26', 7],
    ['2020-10-27', 1],
    ['2020-10-28', 6],
    ['2020-10-29', 3],
    ['2020-10-30', 6] 
];

let option = {
    title: {
        top: 30,
        left: 'center',
        text: 'contributions in the last year'
    },
    tooltip: {},
    visualMap: {
        min: 0,
        max: 24,
        type: 'piecewise',  // piecewise分段型 continuous连续型
        orient: 'horizontal',
        left: 'center',
        top: 65,
        color: ['#216E29', '#30A14E', '#40C463', '#9BE9A8'],
        textStyle: {
            color: '#000'
        },
        pieces: [ // 分段范围可根据查到的贡献频率设置
            {gt: 7},
            {gt: 5, lte: 7},
            {gt: 2, lte: 5},
            {gte: 1, lte: 2},
        ]
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: [12, 12],
        range: ['2019-10-30', '2020-10-31'],
        itemStyle: {
            borderWidth: 0.5,
            borderType: 'solid',
            opacity: 1
        },
        yearLabel: {
            show: true
        },
        monthLabel:{
            show: true
        },
        dayLabel:{
            show: true
        }
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: data
    }
};

myChart.setOption(option);