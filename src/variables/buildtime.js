 
  // Total Spent Default
  const buildTimeInfo = require('./buildtime.json');
  const sliceSize = 7
  const times = buildTimeInfo.slice(-sliceSize).map(item => item.time);
  const dates = buildTimeInfo.slice(-sliceSize).map(item => item.date);
  export const lastTime = buildTimeInfo[buildTimeInfo.length - 1].time;
  export const recentBuildInfo = buildTimeInfo[buildTimeInfo.length - 1];
  const comparisonSizeYOY = buildTimeInfo.length >= 7 
  ? buildTimeInfo[buildTimeInfo.length - 7].time
  : buildTimeInfo[0].time;
  export const compareYoYNumber = (lastTime - comparisonSizeYOY).toFixed(2);
  export const compareYoY = (compareYoYNumber > 0 ? '+' : '') + compareYoYNumber + 'sec';

  const comparisonSizeDoD = buildTimeInfo.length >= 2
  ? buildTimeInfo[buildTimeInfo.length - 2].time
  : buildTimeInfo[0].time;
  export const compareDoDNumber = (lastTime - comparisonSizeDoD).toFixed(2);
  export const compareDoD = (compareDoDNumber > 0 ? '+' : '') + compareDoDNumber + 'sec';

  export const lineChartDataTotalSpent = [
    {
      name: "build time",
      data: times,
    },
  ];
  
  export const lineChartOptionsTotalSpent = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: ["#FDBF29", "#39B8FF"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#FDBF29",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
    },
    xaxis: {
      type: "numeric",
      categories: dates,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      column: {
        color: ["#7551FF", "#39B8FF"],
        opacity: 0.5,
      },
    },
  };
  