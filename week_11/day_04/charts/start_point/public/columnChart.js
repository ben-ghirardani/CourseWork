var ColumnChart = function(){
    var container = document.querySelector("#column-chart");

    var chart = new Highcharts.chart({
        chart: {
            type: "column",
            renderTo: container
        },
        title: {
            text: "Our Favourite Programming Languages"
        },
        series: [
            {
                name: "Cohort 11",
                data: [8,8,6,1,0]
            },
            {
                name: "Cohort 14",
                data: [6,11,3,0,1]
            }
        ],
        xAxis: {
            categories: ["JavaScript", "Java", "Ruby", "Python", "Basic"]
        },

    })
}