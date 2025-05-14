import { getWeatherDataRepository } from "../../core/repository/WeatherDataRepository/WeatherDataRepository";
import { WeatherDTO } from "../../core/classes/dto/WeatherDTO/WeatherDTO";
import { useQuery } from "@tanstack/react-query";

export function UseWeatherData() {
	return useQuery<WeatherDTO[]>({
		queryKey: ["weatherData"],
		queryFn: getWeatherDataRepository
	});
}