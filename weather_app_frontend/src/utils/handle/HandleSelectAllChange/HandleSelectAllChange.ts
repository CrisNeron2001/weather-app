import { SelectAllChangeProps } from "../../../core/classes/interfaces/Props/Handle/SelectAllChangeProps/SelectAllChangeProps";

export const HandleSelectAllChange = (
    {
        checked,
        setSelectedCities,
        onSelectCity,
        allCities,
		isSelectAll
    }: SelectAllChangeProps
) => {
	if (isSelectAll) {
		setSelectedCities(checked ? allCities : []);
		onSelectCity(checked ? allCities : []);
		return;
	} else {
		setSelectedCities([]);
		onSelectCity([]);
		return;
	}
};