import { WeatherData } from "../../model/WeatherData/WeatherData";
import { WeatherDTO } from "../../dto/WeatherDTO/WeatherDTO";

export class WeatherDataMapper {
	static fromApiToDTO(
		code: string,
		city: string,
		updated_at: string,
		temperature: number,
		condition: string,
		humidity: number,
		longitude: number,
		latitude: number,
	): WeatherDTO {
		return ({
			code,
			city,
			updated_at,
			temperature,
			condition,
			humidity,
			longitude,
			latitude,
		});
	}
	static fromDTOToDomain(weatherDTO: WeatherDTO): WeatherData {
		return new WeatherData(
			weatherDTO.code,
			weatherDTO.city,
			weatherDTO.updated_at,
			weatherDTO.temperature,
			weatherDTO.condition,
			weatherDTO.humidity,
			weatherDTO.longitude,
			weatherDTO.latitude,
		);
	}
}