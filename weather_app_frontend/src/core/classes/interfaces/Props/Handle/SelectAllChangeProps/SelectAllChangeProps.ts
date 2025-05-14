export interface SelectAllChangeProps {
	checked: boolean;
    setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
    onSelectCity: (cities: string[]) => void;
    allCities: string[];
	isSelectAll: boolean;
}