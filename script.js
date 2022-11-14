const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Q1 - 2022', 'Q2 - 2022', 'Q3 - 2022', 'Q4 - 2022'],
    datasets: [
      {
        label: 'الفعلي',
        backgroundColor: '#00665E',
        barThickness: 70,
        data: [20, 40, 60, 80],
      },
      {
        label: 'المخطط',
        backgroundColor: '#E4E4E4',
        barThickness: 70,
        data: [80, 60, 40, 20],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          boxHeight: 12,

        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'Black',
          font: {
            family: 'ITC-Bold',
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (value, index, ticks) {
            return value + '%';
          },
          font: {
            family: 'ITC',
            size: 10,
          },
        },
      },
    },
  },
});
