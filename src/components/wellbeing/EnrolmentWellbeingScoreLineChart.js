import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const generateSingleDatasetChartData = (labels, dataset, datasetLabel) => {
  return {
    labels,
    datasets: [
      {
        label: datasetLabel,
        data: dataset,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
};

const EnrolmentWellbeingScoreLineChart = (props) => {
  const labels = props.labels;
  const dataset = props.dataset;
  const datasetLabel = props.datasetLabel;

  return (
    <div
      style={{
        height: "70%",
        width: "70%",
        minWidth: "300px",
        minHeight: "300px",
        maxWidth: "600px",
        maxHeight: "600px",
      }}
    >
      <Line
        options={options}
        data={generateSingleDatasetChartData(labels, dataset, datasetLabel)}
      />
    </div>
  );
};

export default EnrolmentWellbeingScoreLineChart;
