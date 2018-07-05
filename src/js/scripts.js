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
            pointBorderWidth: 6,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 3,
            data: [5000, 7000, 15000, 10000, 11000, 20000, 14000, 18000]
        },
        {
            label: "Previous Week",
            borderDash: [16, 8],
            borderColor: chartColors.lightgrey,
            pointBorderColor: chartColors.lightgrey,
            pointBackgroundColor: chartColors.lightgrey,
            pointHoverBackgroundColor: chartColors.lightgrey,
            pointHoverBorderColor: chartColors.lightgrey,
            pointBorderWidth: 6,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 3,
            data: [7000, 15000, 16000, 7000, 8000, 13000, 9000, 7000]
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.3)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 30
                }
                // ,
                // gridLines: {
                //     drawTicks: false,
                //     display: false
                // }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 30,
                    fontColor: "rgba(0,0,0,0.3)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});