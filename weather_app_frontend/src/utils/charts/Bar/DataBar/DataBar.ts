import { WeatherDTO } from "../../../../core/classes/dto/WeatherDTO/WeatherDTO";
import { LabelBar } from "../LabelBar/LabelBar";

export const DataBar = (filteredData: WeatherDTO[]) => {
	const labels = LabelBar(filteredData);
	return {
		labels,
		datasets: [
			{
				label: "Humedad",
				data: filteredData.map((d) => d?.humidity),
				backgroundColor: "rgb(61, 248, 92)",
				borderColor: "rgba(54, 230, 1, 0.68)",
			}
		]
	};
};