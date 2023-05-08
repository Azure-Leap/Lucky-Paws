import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const labels: any = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dd: any = [
  {
    label: "Cat",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132,0.6)",
    lineTension: 0.5,
    fill: {
      target: true,
      above: "rgba(255, 99, 132,0.2)",
    },
  },
  {
    label: "Dog",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235,0.6)",
    lineTension: 0.5,
    fill: {
      target: "origin",
      above: "rgba(53, 162, 235, 0.2)",
    },
  },
];

export default function Chart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Adopt Pets",
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
        },
        title: {
          display: true,
        },
      },
    },
  });

  useEffect(() => {
    setChartData({
      labels,
      datasets: dd,
    });
    // const chartOptions = ;
  }, []);

  return (
    <div className="relative col-span-6 border-2 border-gray-300 rounded-3xl ">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}
