import { WeatherDTO } from "../../../core/classes/dto/WeatherDTO/WeatherDTO";
import { GroupedByCityItem } from "../../../core/classes/interfaces/ChartInterface/GroupedByCityItem/GroupedByCityItem";

export const GroupedByCity = (weatherData: WeatherDTO[]): Record<string, GroupedByCityItem[]> => {
	return weatherData.reduce((acc, item) => {
		if (!acc[item.city]) {
			acc[item.city] = [];
		}
		acc[item.city].push({ city: item.city });
		return acc;
	}, {} as Record<string, GroupedByCityItem[]>);
};
