var PieChart = function(){
    var container = document.querySelector("#pie-chart");

    var chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: container
        },
        title: {
            text: "Pokemon Types I've Caught"
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: "Type",
                data: [
                    {
                        name: "Grass",
                        y: 74,
                        color: "#00ba2f"
                    },
                    {
                        name: "Water",
                        y: 25,
                        color: "#73b7ff",
                    },
                    {
                        name: "Fire",
                        y: 1,
                        color: "#ffac33",
                        sliced: true
                    }
                ]
            }
        ]
    });
}