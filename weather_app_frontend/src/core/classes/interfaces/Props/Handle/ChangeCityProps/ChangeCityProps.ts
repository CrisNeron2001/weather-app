export interface ChangeCityProps {
	city: string;
    selectedCities: string[];
    setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
    onSelectCity: (cities: string[]) => void;
    allCities: string[];
}