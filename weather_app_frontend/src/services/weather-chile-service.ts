import { Weather } from "@models/class/weather-chile-class";
import { WeatherDTO } from "@models/dto/weather-chile-dto";
import { WeatherMapper } from "@models/mapper/weather-chile-mapper";

export async function getWeather(): Promise<Weather[]> {
	const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
			method: 'GET',
			headers: {
				"Content-Type": `${import.meta.env.VITE_PARSE_HEADER}`
			}
		}); 
	const dataResponse: WeatherDTO[] = await response.json();
	return dataResponse.map((data) => {
		const domain = WeatherMapper.fromDTOToDomain(data);
		return WeatherMapper.fromDTOToDomain(domain);
	});
}