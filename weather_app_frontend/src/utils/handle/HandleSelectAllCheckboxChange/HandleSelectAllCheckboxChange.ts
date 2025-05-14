import { HandleSelectAllChange } from "../HandleSelectAllChange/HandleSelectAllChange";

export const HandleSelectAllCheckboxChange = (
	setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>,
	onSelectCity: (cities: string[]) => void,
	allCities: string[],
	checked: boolean
) => {
	HandleSelectAllChange({
		checked,
		setSelectedCities,
		onSelectCity,
		allCities,
		isSelectAll: checked
	});
}