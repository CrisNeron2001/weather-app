import { FormControl, SelectChangeEvent } from "@mui/material";
import { ComboBoxCardMap } from "../../../styles/components/Card/ComboBoxCardMap/ComboBoxCardMap";
import { StyleComboBoxMap } from "../../../styles/components/ComboBox/StyleComboBoxMap/StyleComboBoxMap";
import { UseWeatherData } from "../../../hooks/UseWeatherData/UseWeatherData";
import { MapDataProps } from "../../../core/classes/interfaces/Props/ComboBox/MapDataProps/MapDataProps";
import { useState, useEffect } from "react";
import { HandleSelectCityMap } from "../../../utils/handle/HandleSelectCityMap/HandleSelectCityMap";
import { StyleLabel } from "../../../styles/components/ComboBox/StyleLabel/StyleLabel";
import { StyleMenuItem } from "../../../styles/components/ComboBox/StyleMenuItem/StyleMenuItem";
import { GroupedByCity } from "../../../utils/group/GroupedByCity/GroupedByCity";
import { ComboBoxError } from "../../../domain/components/errors/CoreError/ComboBox/ComboBoxError";
import { MenuItemLoading } from "../../CoreLoader/MenuItemLoading/MenuItemLoading";

export const ComboBoxMap = ({ onSelectCity = () => {}, value }: MapDataProps) => {
    const { data: weatherData, isLoading, error } = UseWeatherData();
    const [selectedCity, setSelectedCity] = useState<string[]>([]);
	const groupedData = GroupedByCity(weatherData || []);
	const cities = Object.keys(groupedData);

    useEffect(() => {
        setSelectedCity(value || []);
    }, [value]);

    if (error) { return ( <ComboBoxError /> ); }

    return (
		<div>
			<ComboBoxCardMap>
				<FormControl>
					<StyleLabel>Seleccione una ciudad</StyleLabel>
					<StyleComboBoxMap
						value={selectedCity}
						onChange={(event: SelectChangeEvent<unknown>) =>
							HandleSelectCityMap(
								event as SelectChangeEvent<string[]>,
								setSelectedCity,
								onSelectCity,
								weatherData)}>
						{isLoading ? ( <MenuItemLoading/> ) : (
						cities.map((city) => (
							<StyleMenuItem key={city} value={city}>
								{city}
							</StyleMenuItem>
						)))}
					</StyleComboBoxMap>
				</FormControl>
			</ComboBoxCardMap>
		</div>
    );
};