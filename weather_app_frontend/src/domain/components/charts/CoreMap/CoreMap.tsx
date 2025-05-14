import { WeatherInfoMap } from "../WeatherInfoMap/WeatherInfoMap";
import { ComboBoxMap } from "../../../../components/ComboBox/ComboBoxMap/ComboBoxMap";
import { TableInfoWeather } from "../../../../components/Table/TableInfoWeather/TableInfoWeather";
import { TitleMapCard } from "../../../../components/Card/TitleMapCard/TitleMapCard";
import { useCallback, useState } from "react";

export const CoreMap = () => {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [focusOnCity, setFocusOnCity] = useState<(coord: [number, number]) => void>();
    const handleSelectCity =  useCallback((coord: [number, number], cityName: string) => {
        setSelectedCity(cityName);
        if (focusOnCity) {
            focusOnCity(coord);
        }
    }, [focusOnCity]);

    return (
		<section>
			<div className="flex flex-col xl:justify-center w-full px-4 py-4">
				<article className="pb-4 flex flex-col xl:flex-row w-full gap-2">
					<TitleMapCard />
				</article>
				<article className="flex flex-col xl:flex-row gap-4 w-full">
					<WeatherInfoMap onCitySelect={(callback) => setFocusOnCity(() => callback)} />
					<div className="xl:basis-1/2 flex flex-col gap-4">
						<ComboBoxMap
						value={selectedCity ? [selectedCity] : []}
						onSelectCity={(coord, cityName) => handleSelectCity(
							coord,
							Array.isArray(cityName) ? cityName[0] : cityName
						)}/>
						<TableInfoWeather selectedCity={selectedCity} />
					</div>
				</article>
			</div>
		</section>
    );
};