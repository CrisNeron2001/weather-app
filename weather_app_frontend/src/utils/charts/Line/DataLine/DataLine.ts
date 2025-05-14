import { WeatherDTO } from "../../../../core/classes/dto/WeatherDTO/WeatherDTO";
import { LabelLine } from "../LabelLine/LabelLine";

export const DataLine = (filteredData: WeatherDTO[]) => {
	const labels = LabelLine(filteredData);
	return {
		labels,
		datasets: [
			{
				label: "Temperatura",
				data: filteredData.map((item) => item.temperature),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				yAxisID: "y"
			}, {
				label: "Humedad",
				data: filteredData.map((item) => item.humidity),
				borderColor: "rgb(54, 162, 235)",
				backgroundColor: "rgba(54, 162, 235, 0.5)",
				yAxisID: "y1"
			}
		]
	}
};