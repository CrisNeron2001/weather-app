import { Weather } from "@models/class/weather-chile-class";
import { WeatherDTO } from "@models/dto/weather-chile-dto";

export class WeatherMapper {
	static fromDTOToDomain(weatherDTO: WeatherDTO): Weather {
		return {
			code: weatherDTO.code,
			city: weatherDTO.city,
			updated_at: weatherDTO.updated_at,
			temperature: weatherDTO.temperature,
			condition: weatherDTO.condition,
			humidity: weatherDTO.humidity
	 	};
	}
	static fromDomainToDTO(weather: Weather): WeatherDTO {
		return {
			code: weather.code,
			city: weather.city,
			updated_at: weather.updated_at,
			temperature: weather.temperature,
			condition: weather.condition,
			humidity: weather.humidity
		}
	}
}