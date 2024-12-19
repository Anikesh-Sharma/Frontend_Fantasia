import { useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = () => {
  const [selectedOption, setSelectedOption] = useState("Protein");

  // Example data for charts
  const chartData = {
    Protein: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Protein Intake (g)",
          data: [70, 80, 75, 90],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
        },
      ],
    },
    Weight: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Weight (kg)",
          data: [68, 67.5, 67, 66.8],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
        },
      ],
    },
    Carbs: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Carb Intake (g)",
          data: [200, 210, 190, 180],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
        },
      ],
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${selectedOption} Chart`,
      },
    },
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Fitness Progress Charts
      </h2>
      <div className="flex justify-center mb-6">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-emerald-500"
        >
          <option value="Protein">Protein</option>
          <option value="Weight">Weight</option>
          <option value="Carbs">Carbs</option>
        </select>
      </div>
      <div className="flex justify-center">
        {selectedOption === "Protein" && (
          <Line data={chartData.Protein} options={chartOptions} />
        )}
        {selectedOption === "Weight" && (
          <Bar data={chartData.Weight} options={chartOptions} />
        )}
        {selectedOption === "Carbs" && (
          <Doughnut data={chartData.Carbs} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default Charts;
