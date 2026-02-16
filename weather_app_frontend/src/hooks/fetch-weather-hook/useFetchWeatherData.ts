import { Weather } from "@models/class/weather-chile-class";
import { getWeather } from "@services/weather-chile-service";
import { isArray } from "chart.js/helpers";
import { useEffect, useState } from "react"

export default function useFetchWeatherData() {

	const [weatherData, setWeatherData] = useState<Weather[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		async function fetchWeather() {
			setIsLoading(true);
			try {
				const data = await getWeather();
				console.log("Data from services: ", data);
				console.log("is array? anwser: ", isArray(data));
				console.log("tipo de dato en hook", typeof data);
				setWeatherData(data);
			} catch (error) {
				setError((error as Error)?.message ?? String(error));
			} finally {
				setIsLoading(false);
			}
		};
		fetchWeather();
	}, []);
	return {
		weatherData, isLoading, setIsLoading, error
	};
}