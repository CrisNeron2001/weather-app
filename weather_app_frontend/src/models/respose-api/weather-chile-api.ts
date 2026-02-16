import { Weather } from "@models/class/weather-chile-class";

export interface WeatherApiResponse {
	data: Weather[];
	status: string;
}