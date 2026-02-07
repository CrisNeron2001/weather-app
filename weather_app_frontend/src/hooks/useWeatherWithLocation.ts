import { locations } from "@data/locations-regions-data";
import { WeatherWithLocation } from "@models/view-model/weather-location-view-model";
import { getWeather } from "@services/weather-chile-service";
import { useEffect, useState } from "react"

const useWeatherWithLocation = () => {
	const [weatherWithLocation, setWeatherWithLocation] = useState<WeatherWithLocation[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				setIsLoading(true);
				const weatherData = await getWeather();
				const weatherLocation: WeatherWithLocation[] = locations.map((loc) => ({
					location: loc,
					weather: weatherData.filter(weather => weather.city === loc.name)
				}));
				setWeatherWithLocation(weatherLocation);
			} catch (error) {
				setError((error as Error)?.message ?? String(error));
			} finally {
				setIsLoading(false);
			}
		}
		fetchWeather();
	}, []);
	return {
		weatherWithLocation, isLoading, error
	};
}

export default useWeatherWithLocation;