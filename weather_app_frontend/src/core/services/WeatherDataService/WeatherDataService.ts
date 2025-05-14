import { WeatherDTO } from "../../classes/dto/WeatherDTO/WeatherDTO";
import { WeatherDataMapper } from "../../classes/mapper/WeatherDataMapper/WeatherDataMapper";
import { config } from "../../../libs/config";

export async function getWeatherData(): Promise<WeatherDTO[]> {
	try {
		const response = await fetch(`${config.backendUrl}/api/weather_data/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch weather data");
		}
		const dataResponse = await response.json();
		const data = dataResponse.data;
		return data.map((item: any) => {
			const {
				code,
				city,
				updated_at,
				temperature,
				condition,
				humidity,
				longitude,
				latitude,

			} = item;
			const domain = WeatherDataMapper.fromApiToDTO(
				code,
				city,
				updated_at,
				temperature,
				condition,
				humidity,
				longitude,
				latitude,
			);
			return WeatherDataMapper.fromDTOToDomain(domain);
		});
		
	} catch (error) {
		console.error("Failed to fetch weather data", error);
		return [];
	}
}