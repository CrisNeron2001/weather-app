import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DataLine } from "../../../../utils/charts/Line/DataLine/DataLine";
import { OptionLine } from "../../../../utils/charts/Line/OptionLine/OptionLine";
import { UseWeatherData } from "../../../../hooks/UseWeatherData/UseWeatherData";
import { FilteredDataByCity } from "../../../../utils/charts/FilteredData/FilteredDataByCity";
import { LineCard } from "../../../../styles/components/Card/LineCard/LineCard";
import { SelectedCityItem } from "../../../../core/classes/interfaces/ChartInterface/SelectedCityItem/SelectedCityItem";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip
);

export const TempAndHumidityLinePlot = ({ selectedCity }: SelectedCityItem) => {
	const {data: weatherData} = UseWeatherData();
	const filteredData = FilteredDataByCity(weatherData || [], selectedCity || []);
	const options = OptionLine;
	const dataLine = DataLine(filteredData);

	return (
		<LineCard className="p-4">
			<Line data={dataLine} options={options} />
		</LineCard>
	);
}