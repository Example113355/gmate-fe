import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PlayerPie = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const dataPie = {
      labels: ["Liên Minh Huyền Thoại", "Tâm Sự", "Khác"],
      datasets: [
        {
          label: "Số giờ thuê",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                family: "'Arial', sans-serif", // Font family
                size: 10, // Font size
                style: "italic", // Font style (optional)
              },
              color: "black", // Label text color
            },
          },
          tooltip: {
            bodyFont: {
              family: "'Arial', sans-serif", // Tooltip text font family
              size: 14, // Tooltip text font size
              weight: "normal", // Tooltip text font weight
            },
            titleFont: {
              family: "'Arial', sans-serif", // Tooltip title font family
              size: 16, // Tooltip title font size
              weight: "bold", // Tooltip title font weight
            },
          },
          title: {
            display: true, // Display the title
            text: "Game được thuê nhiều", // Title text
            font: {
              family: "'Arial', sans-serif", // Title font family
              size: 10, // Title font size
              weight: "bold", // Title font weight
            },
            color: "black", // Title text color
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        },
      },
    };

    // Destroy the existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, configPie);
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="border-2 border-solid border-black rounded-lg h-[74%] w-[100%]">
        <canvas ref={chartRef} className="w-64 h-64 p-1"></canvas>
    </div>
  );
};

export default PlayerPie;
