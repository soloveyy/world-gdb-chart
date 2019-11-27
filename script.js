let countries = ['Luxembourg', 'Switzerland', 'Macau', 'Norway', 'Ireland', 'Iceland', 'Quatar', 'Singapore', 'United States', 'Denmark', 'Australia', 'Ukraine'];
let data = [114.234, 82.950, 82.388, 81.695, 76.099, 74.278, 70.780, 64.041, 62.606, 60.692, 56.352, 2.963];
let colors = ['#49A9EA', '#46CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8', '#27ae60', '#e67e22', '#8e44ad', '#c0392b', '#f1c40f'];

let gdbChart = document.getElementById('chart').getContext('2d');
let chart = new Chart(gdbChart, {
    // The type of chart we create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: countries,
        datasets: [{
            backgroundColor: colors,
            data: data
        }]
    },

    // Configuration options go here
    options: {
        title: {
            text: "World GDB per capita (mln $)",
            display: true
        }
    }
});