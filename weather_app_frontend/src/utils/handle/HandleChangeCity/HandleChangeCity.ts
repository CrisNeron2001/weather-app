import { ChangeEvent } from "react";

export const HandleCityChange = (
    event: ChangeEvent<HTMLInputElement>,
    cityValue: string,
    { setSelectedCities, onSelectCity }: {
        setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
        onSelectCity: (newCities: string[]) => void;
    }
) => {
    const { checked } = event.target;
    setSelectedCities((prev) => {
        const updatedCities = checked ? [...prev, cityValue] : prev.filter((city) => city !== cityValue);
        onSelectCity(updatedCities);
        return updatedCities;
    });
};