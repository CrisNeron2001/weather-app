export interface WeatherApiResponse {
	code: string;
	city: string;
	updated_at: string;
	temperature: number;
	condition: string;
	humidity: number;
}