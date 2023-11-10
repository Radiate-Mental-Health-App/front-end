import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { Bar } from "react-chartjs-2";

import terribleImage from "../../../assets/mood-icons/1_terrible.png";
import badImage from "../../../assets/mood-icons/2_bad.png";
import okayImage from "../../../assets/mood-icons/3_okay.png";
import goodImage from "../../../assets/mood-icons/4_good.png";
import wonderfulImage from "../../../assets/mood-icons/5_wonderful.png";

const BarChart = () => {
  const barChartData = {
    labels: ["Terrible", "Sad", "Okay", "Good", "Wonderful"],
    datasets: [
      {
        label: "mood count",
        data: [22, 12, 6, 9, 12],
        backgroundColor: ["rgba(255, 172, 49, 0.4)", "rgba(255, 172, 49, 0.5)", "rgba(255, 172, 49, 0.6)", "rgba(255, 172, 49, 0.7)", "rgba(255, 172, 49, 0.8)"],
        borderColor: ["rgba(255, 172, 49, 1)", "rgba(255, 172, 49, 1)", "rgba(255, 172, 49, 1)", "rgba(255, 172, 49, 1)", "rgba(255, 172, 49, 1)", "rgba(255, 172, 49, 1)"],
        borderWidth: 0,
        images: [terribleImage, badImage, okayImage, goodImage, wonderfulImage],
      },
    ],
  };

  const xScaleImage = {
    id: "xScaleImage",
    afterDraw(chart) {
      const { ctx, data, scales } = chart;
      const yScale = scales.y;
      const xScale = scales.x;

      ctx.save();

      data.datasets[0].images.forEach((image, index) => {
        const label = new Image();
        label.src = image;
        const imageSize = 30;
        const padding = 10;

        const xPos = xScale.getPixelForValue(index);
        const yPos = yScale.bottom + padding;

        ctx.drawImage(label, xPos - imageSize / 2, yPos, imageSize, imageSize);
      });

      ctx.restore();
    },
  };

  const barConfig = {
    type: "bar",
    data: barChartData,
    options: {
      scales: {
        x: {
          afterFit: (context) => {
            context.height += 40;
          },
          ticks: {
            callback: (value, index, values) => {
              return "";
            },
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
    plugins: [xScaleImage],
  };

  useEffect(() => {
    const barCtx = document.getElementById("bar");

    // Check if a Chart instance exists
    const existingChart = Chart.getChart(barCtx);

    // If an existing Chart instance is found, destroy it
    if (existingChart) {
      existingChart.destroy();
    }

    // Create a new Chart instance
    new Chart(barCtx, barConfig);

    // Clean up: Ensure the Chart is destroyed when the component unmounts
    return () => {
      const chartInstance = Chart.getChart(barCtx);
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [barConfig]);

  return (
    <div>
      <canvas id="bar" width="400" height="400"></canvas>
    </div>
  );
};

export default BarChart;
