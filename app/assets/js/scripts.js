/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);


// CHART JS -start

//
// var chartColors = {
//     red: 'rgb(255, 99, 132)',
//     orange: 'rgb(255, 159, 64)',
//     yellow: 'rgb(255, 205, 86)',
//     green: 'rgb(75, 192, 192)',
//     blue: 'rgb(54, 162, 235)',
//     lightblue: 'rgb(186, 206, 255)',
//     lightgrey: 'rgb(242, 242, 242)',
//     purple: 'rgb(153, 102, 255)',
//     grey: 'rgb(231,233,237)',
//     transparent: 'rgba(231,233,37,0)'
// };
// var $this = $(window)
// $this.resize(function(){
//
//     //
//     if($this.width()<500 ){ // && $("#lineChart").height() < 120
//
//         if($("#lineChart").height()<500){
//             $("#lineChart").height(500)
//         }
//         console.log($("#lineChart").height());
//     }
//
// });
//
//
// function randomScalingFactor() {
//     return Math.round(Math.random() * 100);
// }
// var lineData = lineData();
// var ctx = document.getElementById("lineChart").getContext("2d");
//
//
// var	myNewChartA = new Chart(ctx, lineData);
//
// function lineData() {
//     return {
//         type: 'line',
//         data: {
//             labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
//             datasets: [{
//                 label: "Current week",
//                 borderColor: chartColors.blue,
//                 backgroundColor: chartColors.transparent,
//                 // backgroundColor: chartColors.red,
//                 data: [
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor()
//                 ],
//             }, {
//                 label: "Previous week",
//                 borderColor: chartColors.lightgrey,
//                 backgroundColor: chartColors.transparent,
//                 borderDash: [16, 8],
//                 // backgroundColor: chartColors.blue,
//                 data: [
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor(),
//                     randomScalingFactor()
//                 ]
//             }
//
//             //     {
//             //     label: "My Third dataset",
//             //     borderColor: chartColors.green,
//             //     backgroundColor: chartColors.green,
//             //     data: [
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor()
//             //     ],
//             // }, {
//             //     label: "My Third dataset",
//             //     borderColor: chartColors.yellow,
//             //     backgroundColor: chartColors.yellow,
//             //     data: [
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor(),
//             //         randomScalingFactor()
//             //     ],
//             // }
//
//             ]
//         },
//
//
//         options: {
//             legend: {
//                 display: false
//             },
//             maintainAspectRation:false,
//             responsive: true,
//             title: {
//                 display: true,
//                 // text: "Line Chart - Stacked Area"
//             },
//             tooltips: {
//                 mode: 'index',
//                 titleMarginBottom: 8,
//                 bodySpacing: 8,
//                 xPadding: 15,
//                 yPadding: 10,
//                 cornerRadius: 2,
//                 bodyFontStyle: "bold",
//                 backgroundColor: "#fafafa",
//                 titleFontColor: "#3a3938",
//                 bodyFontColor: "#3a3938",
//                 callbacks: {
//                     label: function(tooltipItem) {
//                         return tooltipItem.yLabel;
//                     }
//                 },
//             },
//             hover: {
//                 mode: 'index'
//             },
//             scales: {
//                 xAxes: [{
//                     scaleLabel: {
//                         display: true,
//                         // labelString: 'Month'
//                     }
//                 }],
//                 yAxes: [{
//                     ticks: {
//                         stepSize: 35
//                     },
//                     stacked: true,
//                     scaleLabel: {
//                         display: true
//                         // labelString: 'Value'
//                     }
//                 }]
//             }
//         }
//     };
// }

// CHART JS -end

function randomScalingFactor() {
    return Math.round(Math.random() * 2 * 10000);
}

var ctx = document.getElementById('myChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#4f7ef6');
gradientStroke.addColorStop(1, '#4dd5ff');

var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    lightblue: 'rgb(186, 206, 255)',
    lightgrey: 'rgb(242, 242, 242)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)',
    transparent: 'rgba(231,233,37,0)'
};

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
        datasets: [{
            label: "Current Week",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            // pointBorderWidth: 6,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 3,
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            // data: [randomScalingFactor(), 7000, 15000, 10000, 11000, 20000, 14000, randomScalingFactor()]
        },
        {
            label: "Previous Week",
            borderDash: [16, 8],
            borderColor: chartColors.lightgrey,
            pointBorderColor: chartColors.lightgrey,
            pointBackgroundColor: chartColors.lightgrey,
            pointHoverBackgroundColor: chartColors.lightgrey,
            pointHoverBorderColor: chartColors.lightgrey,
            // pointBorderWidth: 6,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 3,
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            // data: [randomScalingFactor(), 15000, 16000, 7000, 8000, 13000, 9000, randomScalingFactor()]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
            // position: "bottom"
        },
        scales: {
            yAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    // responsive: true,
                    // maintainAspectRatio: false,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "normal",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 30
                }


            }],
            xAxes: [{
                // responsive: true,
                // maintainAspectRatio: false,
                gridLines: {
                    zeroLineColor: "transparent",
                    display: false
                },
                ticks: {
                    padding: 30,
                    fontColor: "rgba(0,0,0,0.2)",
                    fontStyle: "normal"
                }
            }]
        },
        tooltips: {
            // mode: 'index',
            titleMarginBottom: 12,
            bodySpacing: 8,
            xPadding: 15,
            yPadding: 15
            // cornerRadius: 2,
            // bodyFontStyle: "bold",
            // backgroundColor: "#f0f0f0",
            // borderColor: "#3a3938",
            // borderWidth: 1
            // titleFontColor: "#3a3938",
            // bodyFontColor: "#3a3938",
            // callbacks: {
            //     label: function (tooltipItem) {
            //         return tooltipItem.yLabel;
            //     }
            // }
        }
    }
});




// CHARTIST JS

var lineChart = new Chartist.Line('.slaChart', {
    labels: ['January', '', 'February', '', 'March'],
    series: [
        // [0, 5, 8, 10, 7, 6, 5, 5, 4],
        [0, 50, 35, 70, 50, 90],
        [0 , 45, 25, 55, 35, 70]
    ]
}, {
    low: 0,
    high: 100,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    plugins: [
        // Chartist.plugins.lineSelector()
    ],
    axisY: {
        onlyInteger: true,
        offset: 20
    },
    axisX: { showGrid: false }
});





// CHARTIST JS 2

new Chartist.Bar('.ct-chart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
    ]
}, {
    stackBars: true,
    axisY: {
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
        }
    }
}).on('draw', function(data) {
    if(data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 30px'
        });
    }
});