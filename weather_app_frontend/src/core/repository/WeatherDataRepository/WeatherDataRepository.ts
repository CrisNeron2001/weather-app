import { getWeatherData } from "../../services/WeatherDataService/WeatherDataService";
import { WeatherDTO } from "../../classes/dto/WeatherDTO/WeatherDTO";

export async function getWeatherDataRepository(): Promise<WeatherDTO[]> {
	return await getWeatherData();
}