import { WeatherDTO } from "../../../../core/classes/dto/WeatherDTO/WeatherDTO";

export function ConditionCount(filteredData: WeatherDTO[]) {
	const conditionCount = filteredData.reduce((acc: { [key: string]: number }, item) => {
		acc[item.condition] = (acc[item.condition] || 0) + 1;
		return acc;
	}, {});
	return conditionCount;
}