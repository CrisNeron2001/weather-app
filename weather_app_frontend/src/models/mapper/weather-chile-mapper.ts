import { WeatherApiResponse } from "@models/api-response/weather-chile-api-response";
import { Weather } from "@models/class/weather-chile-class";
import { WeatherDTO } from "@models/dto/weather-chile-dto";

export class WeatherMapper {
	static fromApiToDTO(apiResponse: WeatherApiResponse): WeatherDTO {
		return {
			code: apiResponse.code,
			city: apiResponse.city,
			updated_at: apiResponse.updated_at,
			temperature: apiResponse.temperature,
			condition: apiResponse.condition,
			humidity: apiResponse.humidity
	 	};
	}
	static fromDTOToDomain(weatherDTO: WeatherDTO): Weather {
		return new Weather(
			weatherDTO.code,
			weatherDTO.city,
			weatherDTO.updated_at,
			weatherDTO.temperature,
			weatherDTO.condition,
			weatherDTO.humidity
		);
	}
}