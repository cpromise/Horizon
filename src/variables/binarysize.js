 
  // Total Spent Default
  const ipaSizeInfo = require('./appcenter_payload.json');
  const sliceSize = 7
  const sizes = ipaSizeInfo.slice(-sliceSize).map(item => item.size);
  const dates = ipaSizeInfo.slice(-sliceSize).map(item => item.date);
  export const lastSize = ipaSizeInfo[ipaSizeInfo.length - 1].size;
  export const recentBinaryInfo = ipaSizeInfo[ipaSizeInfo.length - 1];
  const comparisonSizeYOY = ipaSizeInfo.length >= 7 
  ? ipaSizeInfo[ipaSizeInfo.length - 7].size
  : ipaSizeInfo[0].size;
  export const compareYoYNumber = (lastSize - comparisonSizeYOY).toFixed(2);
  export const compareYoY = (compareYoYNumber > 0 ? '+' : '') + compareYoYNumber + 'mb';

  const comparisonSizeDoD = ipaSizeInfo.length >= 2
  ? ipaSizeInfo[ipaSizeInfo.length - 2].size
  : ipaSizeInfo[0].size;
  export const compareDoDNumber = (lastSize - comparisonSizeDoD).toFixed(2);
  export const compareDoD = (compareDoDNumber > 0 ? '+' : '') + compareDoDNumber + 'mb';

  export const lineChartDataTotalSpent = [
    {
      name: "ipa size",
      data: sizes,
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
  