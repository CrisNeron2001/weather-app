import { WeatherProp } from "@typing/weather-prop";
import { 
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
 } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const HumidityCityBarChart = ({weatherData}: WeatherProp) => {
	const options = {
		indexAxis: 'y' as const,
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
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
				text: 'Promedio de Humedad por Regiones',
				color: "white"
			},
		},
	};

	const labels = weatherData.map(w => w.city);

	const data = {
		labels,
		datasets: [
			{
				label: 'Humedad',
				data: weatherData.map(w => w.humidity),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	}

	return ( 
		<Bar options={options} data={data} />
	);
}