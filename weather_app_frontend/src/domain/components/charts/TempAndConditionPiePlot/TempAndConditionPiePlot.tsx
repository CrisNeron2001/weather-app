import {
	Chart as ChartJS,
	ArcElement,
	Title,
	Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { UseWeatherData } from "../../../../hooks/UseWeatherData/UseWeatherData";
import { DataPie } from "../../../../utils/charts/Pie/DataPie/DataPie";
import { OptionPie } from "../../../../utils/charts/Pie/OptionPie/OptionPie";
import { FilteredDataByCity } from "../../../../utils/charts/FilteredData/FilteredDataByCity";
import { PieCard } from "../../../../styles/components/Card/PieCard/PieCard";
import { SelectedCityItem } from "../../../../core/classes/interfaces/ChartInterface/SelectedCityItem/SelectedCityItem";

ChartJS.register(
	ArcElement,
	Title,
	Legend
);

export const TempAndConditionPiePlot = ({ selectedCity }: SelectedCityItem) => {
	const {data: weatherData} = UseWeatherData();
	const filteredData = FilteredDataByCity(weatherData || [], selectedCity || []);
	const options = OptionPie;
	const dataPie = DataPie(filteredData);

	return (
		<div>
			<PieCard className="p-4">
				<Pie data={dataPie} options={options}/>
			</PieCard>
		</div>
	);
}