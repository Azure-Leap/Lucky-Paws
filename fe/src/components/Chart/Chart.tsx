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
  Filler
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

const labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

export default function Chart() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: "Cat",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor:"rgba(255, 99, 132,0.6)",
          lineTension:0.5,
          fill:{
            target:true,
            above:"rgba(255, 99, 132,0.2)",
          }
        },
        {
          label: "Dog",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor:"rgba(53, 162, 235,0.6)",
          lineTension:0.5,
          fill:{
            target:"origin",
            above:"rgba(53, 162, 235, 0.2)",
          },
        },
      ],
    });
    const chartOptions={
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Adopt Pets",
        }
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };
  }, []);

  return <div className="bg-green-300 relative col-span-6">
    <Line options={chartOptions} data={chartData}/>
  </div>;
}
