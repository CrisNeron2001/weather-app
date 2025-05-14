import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DataBar } from "../../../../utils/charts/Bar/DataBar/DataBar";
import { OptionBar } from "../../../../utils/charts/Bar/OptionBar/OptionBar";
import { SelectedCityItem } from "../../../../core/classes/interfaces/ChartInterface/SelectedCityItem/SelectedCityItem";
import { UseWeatherData } from "../../../../hooks/UseWeatherData/UseWeatherData";
import { FilteredDataByCity } from "../../../../utils/charts/FilteredData/FilteredDataByCity";
import { BarCard } from "../../../../styles/components/Card/BarCard/BarCard";


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip
);

export const HumidityForCitiesBarPlot = ({ selectedCity }: SelectedCityItem) => {
	const {data: weatherData} = UseWeatherData();
	const filteredData = FilteredDataByCity(weatherData || [], selectedCity || []);
	const options = OptionBar;
	const dataBar = DataBar(filteredData);

	return (
		<BarCard className="p-4">
			<Bar data={dataBar} options={options}/>
		</BarCard>
	);
}