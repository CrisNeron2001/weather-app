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
import useWeatherWithLocation from "@hooks/useWeatherWithLocation";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const weatherWithLocation = useWeatherWithLocation().weatherWithLocation;
const isLoading = useWeatherWithLocation().isLoading;
const error = useWeatherWithLocation().error;

const options = {
	indexAxis: 'y' as const,
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: 'right' as const,
		},
		title: {
			display: true,
			text: 'Humedad por Condiciones'
		},
	},
};

const conditions = weatherWithLocation.map((weather) => {
	weather.weather.filter(w => w.condition);
});

const weatherData = weatherWithLocation;

const labels = [conditions];

const data = {
	labels,
	datasets: [
		{
			label: 'Temperatura',
			data: weatherData.map(data => data.weather.filter(w => w.humidity)),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)'
		}
	]
}

const alertError = alert(error);

export function HumidityConditionBarChart() {
	if (!data || data.datasets.length === 0) {
		return alertError;
	} else if (isLoading) {
		return <h1>Cargando...</h1>
	} else {
		return <Bar options={options} data={data} />
	}
}