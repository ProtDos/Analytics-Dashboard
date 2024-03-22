async function get_data() {
    return Array.from({length: Math.floor(Math.random() * 11) + 20}, () => Math.floor(Math.random() * 100) + 1);
}


function formatDate(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `Today ${formattedHours}:${formattedMinutes} ${ampm}`;
}



document.addEventListener("DOMContentLoaded", async function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';

    const data = await get_data();
    const sum = data.reduce((acc, curr) => acc + curr, 0);

    document.getElementById("totalViews").textContent = sum;
    document.getElementById("24hViews").textContent = Math.floor(sum / 3);
    document.getElementById("currentTime").textContent = formatDate(new Date());

    $(function() {

        var chart,
            categories = ["Test"],
            serie2 = data,
            $aapls;

        $(document).ready(function() {

            chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'graph',
                    type: 'column',
                    backgroundColor: 'transparent',
                    height: 151,
                    marginLeft: 3,
                    marginRight: 3,
                    marginBottom: 0,
                    marginTop: 0
                },
                title: {
                    text: ''
                },
                xAxis: {
                    lineWidth: 0,
                    tickWidth: 0,
                    labels: {
                        enabled: true
                    },
                    categories: categories
                },
                yAxis: {
                    labels: {
                        enabled: true
                    },
                    gridLineWidth: 0,
                    title: {
                        text: null,
                    },
                },
                series: [{
                    name: 'Views',
                    color: '#fff',
                    type: 'line',
                    data: serie2
                }],
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        borderWidth: 0,
                        color: '#3d9e68',
                        shadow: false
                    },
                    line: {
                        marker: {
                            enabled: false
                        },
                        lineWidth: 3
                    }
                },
                tooltip: {
                    enabled: true
                },
                accessibility: {
                    enabled: false
                }
            });

        });

    });


});