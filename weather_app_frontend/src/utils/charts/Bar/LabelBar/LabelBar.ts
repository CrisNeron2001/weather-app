import { WeatherDTO } from "../../../../core/classes/dto/WeatherDTO/WeatherDTO";

export function LabelBar(filteredData: WeatherDTO[]) {
	const labelBar = (filteredData || []).map(d => [d?.city]);
	return labelBar;
}