import { WeatherApiResponse } from "@models/api-response/weather-chile-api-response";
import { WeatherDTO } from "@models/dto/weather-chile-dto";
import { WeatherMapper } from "@models/mapper/weather-chile-mapper";

export async function getWeather(): Promise<WeatherDTO[]> {
	const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
			}
		}); 
	const dataResponse = await response.json();
	const data = dataResponse.data;
	return data.map((apiResponse: WeatherApiResponse) => {
		const domain = WeatherMapper.fromApiToDTO(apiResponse);
		return WeatherMapper.fromDTOToDomain(domain);
	});
}