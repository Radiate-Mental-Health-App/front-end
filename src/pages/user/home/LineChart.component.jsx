import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  let terrible = new Image(15, 15);
  terrible.src = "https://emojiisland.com/cdn/shop/products/Confounded_Face_Emoji_large.png?v=1571606037";
  let bad = new Image(15, 15);
  bad.src = "https://emojiisland.com/cdn/shop/products/Very_Sad_Face_Emoji_Icon_ios10_large.png?v=1571606092";
  let okay = new Image(15, 15);
  okay.src = "https://emojiisland.com/cdn/shop/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1571606036";
  let good = new Image(15, 15);
  good.src = "https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_with_Blushed_Cheeks_large.png?v=1571606036";
  let wonderful = new Image(25, 25);
  wonderful.src = "https://emojiisland.com/cdn/shop/products/Heart_Eyes_Emoji_2_large.png?v=1571606090";
  const data = {
    labels: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04", "2023-10-05", "2023-10-06", "2023-10-07"],
    datasets: [
      {
        label: "mood entries chart",
        data: [3, 4, 2, 5, 4, 1, 5],
        borderColor: "#FFD18D",
        borderWidth: 2,
        pointStyle: [okay, good, bad, wonderful, good, terrible, wonderful],
        tension: 0.4,
        pointHoverRadius: 40,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 5.5,
        ticks: {
          stepSize: 1,
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <h1>Create Time Scale in Line Chart</h1>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;
