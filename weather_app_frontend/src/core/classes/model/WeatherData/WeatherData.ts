export class WeatherData {
	constructor(
		public code: string,
		public city: string,
		public updated_at: string,
		public temperature: number,
		public condition: string,
		public humidity: number,
		public longitude: number,
		public latitude: number,
	) {}
}