import { ComboBoxChart } from "../../../../components/ComboBox/ComboBoxChart/ComboBoxChart";
import { useCallback, useState } from "react";
import { TempAndConditionPiePlot } from "../TempAndConditionPiePlot/TempAndConditionPiePlot";
import { HumidityForCitiesBarPlot } from "../HumidityForCitiesBarPlot/HumidityForCitiesBarPlot";
import { TempAndHumidityLinePlot } from "../TempAndHumidityLinePlot/TempAndHumidityLinePlot";

export const CoreCharts = () => {
    const [selectedCity, setSelectedCity] = useState<string[]>([]);
    const handleSelectCity = useCallback((city: string[]) => {
        return setSelectedCity(city);
    }, []);
    return (
		<section>
			<div className="flex flex-col justify-center px-4 py-4 max-w-full">
				<article className="flex flex-col xl:flex-row w-full gap-4 gap-y-4">
					<ComboBoxChart
						value={selectedCity || ""}
						onSelectCity={(city) => handleSelectCity(city || [])}
					/>
					<TempAndConditionPiePlot selectedCity={selectedCity} />
				</article>
				<article className="flex flex-col w-full mt-4 gap-4">
					<TempAndHumidityLinePlot selectedCity={selectedCity} />
					<HumidityForCitiesBarPlot selectedCity={selectedCity} />
				</article>
			</div>
		</section>
    );
}