let chartData = {
    labels: [],
    datasets: [{
        label: '# of Values',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(102, 102, 102, 0.5)',
            'rgba(255, 0, 0, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(0, 0, 255, 0.5)',
            'rgba(128, 0, 0, 0.5)',
            'rgba(0, 128, 0, 0.5)',
            'rgba(0, 0, 128, 0.5)',
            'rgba(128, 128, 0, 0.5)',
            'rgba(128, 0, 128, 0.5)',
            'rgba(0, 128, 128, 0.5)',
            'rgba(128, 128, 128, 0.5)',
            'rgba(220, 220, 220, 0.5)',
            'rgba(255, 215, 0, 0.5)',
            'rgba(144, 238, 144, 0.5)',
            'rgba(173, 216, 230, 0.5)',
            'rgba(135, 206, 235, 0.5)',
            'rgba(245, 245, 220, 0.5)',
            'rgba(240, 230, 140, 0.5)',
            'rgba(245, 222, 179, 0.5)',
            'rgba(250, 235, 215, 0.5)',
            'rgba(240, 255, 240, 0.5)',
            'rgba(245, 245, 245, 0.5)',
            'rgba(220, 255, 220, 0.5)',
            'rgba(230, 230, 250, 0.5)',
            'rgba(240, 240, 240, 0.5)',
            'rgba(245, 255, 245, 0.5)',
            'rgba(250, 250, 210, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(102, 102, 102, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(128, 0, 0, 1)',
            'rgba(0, 128, 0, 1)',
            'rgba(0, 0, 128, 1)',
            'rgba(128, 128, 0, 1)',
            'rgba(128, 0, 128, 1)',
            'rgba(0, 128, 128, 1)',
            'rgba(128, 128, 128, 1)',
            'rgba(220, 220, 220, 1)',
            'rgba(255, 215, 0, 1)',
            'rgba(144, 238, 144, 1)',
            'rgba(173, 216, 230, 1)',
            'rgba(135, 206, 235, 1)',
            'rgba(245, 245, 220, 1)',
            'rgba(240, 230, 140, 1)',
            'rgba(245, 222, 179, 1)',
            'rgba(250, 235, 215, 1)',
            'rgba(240, 255, 240, 1)',
            'rgba(245, 245, 245, 1)',
            'rgba(220, 255, 220, 1)',
            'rgba(230, 230, 250, 1)',
            'rgba(240, 240, 240, 1)',
            'rgba(245, 255, 245, 1)',
            'rgba(250, 250, 210, 1)'
        ],
        borderWidth: 1
    }]
};

function createChart(type, height = 400) {
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    canvasContainer.style.height = `${height}px`;

    const ctx = document.getElementById('myChart').getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    display: type === 'line' || type === 'bar'
                }
            },
            onClick: (event) => {}, // Do nothing on click
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

let myChart = createChart('bar'); // Create initial chart with default height = 400

function addData() {
    const labelInput = document.getElementById('labelInput');
    const dataInput = document.getElementById('dataInput');

    if (labelInput.value && dataInput.value) {
        chartData.labels.push(labelInput.value);
        chartData.datasets.forEach((dataset) => {
            dataset.data.push(dataInput.value);
        });
        myChart.update();
        labelInput.value = '';
        dataInput.value = '';
    }
}

function updateChartType() {
    const selectedType = document.getElementById('chartType').value;
    myChart.destroy(); // Destroy the old chart
    myChart = createChart(selectedType);
}

function removeData(datasetIndex, index) {
    // Do nothing
}

function clearChart() {
  chartData.labels = [];
  chartData.datasets.forEach(dataset => {
    dataset.data = [];
  });
  myChart.update();
}
