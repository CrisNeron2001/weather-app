export interface WeatherDTO {
	code: string;
	city: string;
	updated_at: string;
	temperature: number;
	condition: string;
	humidity: number;
	longitude: number;
	latitude: number;
}