import { Table, Typography } from "@mui/material";
import { UseWeatherData } from "../../../hooks/UseWeatherData/UseWeatherData";
import { InfoWeatherProps } from "../../../core/classes/interfaces/Props/InfoWeather/InfoWeatherProps";
import { SelectedCityCard } from "../../Card/SelectedCityCard/SelectedCityCard";
import { CardLoading } from "../../CoreLoader/CardLoading/CardLoading";
import { InfoWeatherError } from "../../../domain/components/errors/CoreError/InfoCardTempError/InfoCardTempError";
import { StyleTableHeader } from "../../../styles/components/Table/StyleTableHeader/StyleTableHeader";
import { StyleTableRow } from "../../../styles/components/Table/StyleTableRow/StyleTableRow";
import { StyleTableCell } from "../../../styles/components/Table/StyleTableCell/StyleTableCell";
import { StyleTableBody } from "../../../styles/components/Table/StyleTableBody/StyleTableBody";
import { StyleTableContainer } from "../../../styles/components/Table/StyleTableContainer/StyleTableContainer";

export const TableInfoWeather = ({ selectedCity }: InfoWeatherProps) => {
	const { data: weatherData, isLoading, error } = UseWeatherData();
    const filteredTemps = weatherData?.filter(item => selectedCity && selectedCity.includes(item.city));
	const currentData = filteredTemps?.[0];

	if (!selectedCity) { return ( <SelectedCityCard /> ); }
	if (isLoading) { return <CardLoading />; }
	if (error) { return <InfoWeatherError />; }
	if (!currentData) { return <InfoWeatherError />; }

	return (
		<StyleTableContainer>
			<Table>
				<StyleTableHeader>
					<StyleTableRow>
						<StyleTableCell>
							<Typography/>Temperatura
						</StyleTableCell>
						<StyleTableCell>
							<Typography/>Nivel de humedad
						</StyleTableCell>
						<StyleTableCell>
							<Typography/>Condici&oacute;n Clim&aacute;tica
						</StyleTableCell>
						<StyleTableCell>
							<Typography/>&Uacute;ltima hora actualizada
						</StyleTableCell>
					</StyleTableRow>
				</StyleTableHeader>
				<StyleTableBody>
					<StyleTableRow>
						<StyleTableCell>
							<Typography/>{currentData.temperature}°C
						</StyleTableCell>
						<StyleTableCell>
							<Typography/>{currentData.humidity}%
						</StyleTableCell>
						<StyleTableCell>
							<Typography/>{currentData.condition}
						</StyleTableCell>
						<StyleTableCell>
							<Typography/>{currentData.updated_at}
						</StyleTableCell>
					</StyleTableRow>
				</StyleTableBody>
			</Table>
		</StyleTableContainer>
	);
}