import { WeatherDTO } from "../../../core/classes/dto/WeatherDTO/WeatherDTO";

export function FilteredDataByCity(weatherData: WeatherDTO[], selectedCity: string[]) {
	const filteredDataByCity = weatherData.filter((d) => {
		return selectedCity.includes(d?.city);
	});
	return filteredDataByCity;
}