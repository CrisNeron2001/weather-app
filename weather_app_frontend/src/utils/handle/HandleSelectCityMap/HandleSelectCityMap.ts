import { SelectChangeEvent } from "@mui/material";
import { WeatherDTO } from "../../../core/classes/dto/WeatherDTO/WeatherDTO";

export const HandleSelectCityMap = (
    event: SelectChangeEvent<string[]>,
    setSelectedCity: React.Dispatch<React.SetStateAction<string[]>>,
    onSelectCity: (coord: [longitude: number, latitude: number], cityName: string[]) => void,
    weatherDTO: WeatherDTO[] = []
) => {
    const {
        target: { value },
    } = event;

    setSelectedCity(typeof value === 'string' ? [value] : value);

    const selectedCityData = weatherDTO.find((item) => item.city === value);
    if (selectedCityData) {
        onSelectCity([selectedCityData?.longitude ?? 0, selectedCityData?.latitude ?? 0], Array.isArray(value) ? [value[0]] : [value]);
    }
};