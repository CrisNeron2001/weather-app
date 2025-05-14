import { WeatherDTO } from "../../../../core/classes/dto/WeatherDTO/WeatherDTO";
import { ConditionCount } from "../ConditionCount/ConditionCount";

export const DataPie = (filteredData: WeatherDTO[]) => {
	const conditionCount = ConditionCount(filteredData);
	const labels = Object.keys(conditionCount);
	const data = Object.values(conditionCount);
	
	return {
		labels,
		datasets: [
			{
				label: "Ciudades registradas",
				data: data,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(99, 115, 255, 0.2)",
					"rgba(99, 255, 99, 0.2)",
					"rgba(235, 54, 211, 0.2)",
					"rgba(255, 99, 99, 0.2)"
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
					"rgba(99, 115, 255, 1)",
					"rgba(99, 255, 99, 1)",
					"rgba(235, 54, 211, 1)",
					"rgba(255, 99, 99, 1)"
				],
				borderWidth: 1
			}
		]
	}
}