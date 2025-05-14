import { WeatherDTO } from "../../../../core/classes/dto/WeatherDTO/WeatherDTO";

export function LabelLine(filteredData: WeatherDTO[]) {
	const labelLine = (filteredData || []).map(d => [d?.city]);
	return labelLine;
}