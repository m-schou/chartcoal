(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);


// CHART JS -start


var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
};
var $this = $(window)
$this.resize(function(){

    //
    if($this.width()<500 ){ // && $("#lineChart").height() < 120

        if($("#lineChart").height()<500){
            $("#lineChart").height(500)
        }
        console.log($("#lineChart").height());
    }

});


function randomScalingFactor() {
    return Math.round(Math.random() * 100);
}
var lineData = lineData();
var ctx = document.getElementById("lineChart").getContext("2d");
var	myNewChartA = new Chart(ctx, lineData);


function lineData() {
    return {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                label: "My First dataset",
                borderColor: chartColors.red,
                // backgroundColor: chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: "My Second dataset",
                borderColor: chartColors.blue,
                // backgroundColor: chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }

            //     {
            //     label: "My Third dataset",
            //     borderColor: chartColors.green,
            //     backgroundColor: chartColors.green,
            //     data: [
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor()
            //     ],
            // }, {
            //     label: "My Third dataset",
            //     borderColor: chartColors.yellow,
            //     backgroundColor: chartColors.yellow,
            //     data: [
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor(),
            //         randomScalingFactor()
            //     ],
            // }

            ]
        },
        options: {
            maintainAspectRation:false,
            responsive: true,
            title: {
                display: true,
                // text: "Line Chart - Stacked Area"
            },
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        // labelString: 'Month'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        // labelString: 'Value'
                    }
                }]
            }
        }
    };
}

// CHART JS -end