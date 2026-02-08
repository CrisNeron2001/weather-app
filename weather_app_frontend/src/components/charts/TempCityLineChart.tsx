import { 
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend
 } from "chart.js";
import { Line } from "react-chartjs-2";
import useWeatherWithLocation from "@hooks/useWeatherWithLocation";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend
);

const weatherWithLocation = useWeatherWithLocation().weatherWithLocation;
const isLoading = useWeatherWithLocation().isLoading;
const error = useWeatherWithLocation().error;
const alertError = alert(error);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'right' as const,
		},
		title: {
			display: true,
			text: 'Temperatura por Ciudades'
		},
	},
};

const cities = weatherWithLocation.map((weather) => {
	weather.weather.filter(w => w.city);
});

const weatherData = weatherWithLocation;

const labels = [cities];

const data = {
	labels,
	datasets: [
		{
			label: 'Temperatura',
			data: weatherData.map(data => data.weather.filter(w => w.temperature)),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)'
		}
	]
}

export function TempCityLineChart() {
	if (!data || data.datasets.length === 0) {
		return alertError;
	} else if (isLoading) {
		return <h1>Cargando...</h1>
	} else {
		return <Line options={options} data={data} />
	}
}