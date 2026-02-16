import { 
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
 } from "chart.js";
import { Line } from "react-chartjs-2";
import { WeatherProp } from "@typing/weather-prop";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const TempCityLineChart = ({weatherData}: WeatherProp) => {
	const options = {
		responsive: true,
		scales: {
			x: {
				ticks: {
					color: "white"
				},
				grid: {
					color: "white"
				}
			},
			y: {
				ticks: {
					color: "white"
				},
				grid: {
					color: "white"
				}
			}
		},
		plugins: {
			legend: {
				position: 'right' as const,
				labels: {
					color: "white"
				}
			},
			title: {
				display: true,
				text: 'N° de Temperatura (C°) por Regiones',
				color: "white"
			},
		},
	};

	const labels = weatherData.map(w => w.city);

	const data = {
		labels,
		datasets: [
			{
				label: 'Temperatura',
				data: weatherData.map(w => w.temperature),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			}
		]
	}

	return (
		<Line options={options} data={data} />	
	);
}