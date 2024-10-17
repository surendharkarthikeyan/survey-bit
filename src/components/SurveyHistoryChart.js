import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the components required for the pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const SurveyHistoryChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'March'],
    datasets: [
      {
        label: 'Surveys Given',
        data: [3, 1, 1], // Adjust data to match the image
        backgroundColor: ['#000', '#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#000', '#FF6384', '#36A2EB'],
        borderColor: ['#fff', '#fff', '#fff'], // White borders
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 16,
            family: "'Comic Sans MS', cursive",
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SurveyHistoryChart;
