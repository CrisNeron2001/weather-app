import { FormGroup } from "@mui/material";
import { StyleComboBoxChart } from "../../../styles/components/ComboBox/StyleComboBoxChart/StyleComboBoxChart";
import { StyleCheckBox } from "../../../styles/components/ComboBox/StyleCheckBox/StyleCheckBox";
import { StyleMenuItem } from "../../../styles/components/ComboBox/StyleMenuItem/StyleMenuItem";
import { StyleLabel } from "../../../styles/components/ComboBox/StyleLabel/StyleLabel";
import { ComboBoxCardChart } from "../../../styles/components/Card/ComboBoxCardChart/ComboBoxCardChart";
import { UseWeatherData } from "../../../hooks/UseWeatherData/UseWeatherData";
import { useEffect, useState } from "react";
import { ComboBoxChartProps } from "../../../core/classes/interfaces/Props/ComboBox/ComboBoxChart/ComboBoxChart";
import { ComboBoxError } from "../../../domain/components/errors/CoreError/ComboBox/ComboBoxError";
import { MenuItemLoading } from "../../CoreLoader/MenuItemLoading/MenuItemLoading";
import { GroupedByCity } from "../../../utils/group/GroupedByCity/GroupedByCity";
import { HandleCityChange } from "../../../utils/handle/HandleChangeCity/HandleChangeCity";
import { HandleSelectAllCheckboxChange } from "../../../utils/handle/HandleSelectAllCheckboxChange/HandleSelectAllCheckboxChange";

export const ComboBoxChart = ({ onSelectCity = () => {} , value }: ComboBoxChartProps) => {
    const { data: weatherData, isLoading, error } = UseWeatherData();
	const groupedData = GroupedByCity(weatherData || []);
	const cities = Object.keys(groupedData);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
	const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        setSelectedCities(value ? value : []);
	}, [value]);

	useEffect(() => {
		setSelectAll(selectedCities.length === cities.length && cities.length > 0 );
	}, [ selectedCities, cities]);

    if (error) { return (<ComboBoxError /> ); }

    return (
		<div>
			<ComboBoxCardChart>
				<FormGroup>
					<StyleLabel>Seleccione una ciudad</StyleLabel>
					<StyleComboBoxChart multiple value={selectedCities}
						renderValue={(value: unknown) => (value as string[]).join(", ")}>
                        <StyleMenuItem onClick={(event) => event.stopPropagation()}>
                            <StyleCheckBox checked={selectAll} onChange={() => HandleSelectAllCheckboxChange(
								setSelectedCities,
								onSelectCity,
								cities,
								!selectAll)} />
                            Seleccionar todas
                        </StyleMenuItem>
						{isLoading ? ( <MenuItemLoading /> ) : (
							cities.map((city) => (
								<StyleMenuItem key={city} value={city}>
									<StyleCheckBox checked={selectedCities.includes(city)}
										onChange={(event) => HandleCityChange(event, city, { setSelectedCities, onSelectCity })}/>
									{city}
								</StyleMenuItem>
							)))}
					</StyleComboBoxChart>
				</FormGroup>
			</ComboBoxCardChart>
		</div>
    );
};