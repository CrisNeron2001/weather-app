import { locations } from "@data/locations-regions-data";
import { LeafletEventHandlerFnMap } from "leaflet";
import { useMemo, useState } from "react";
import { WeatherProp } from "src/types/weather-prop";

export default function useHandleClickCircle({weatherData}: WeatherProp) {
	const [tempInfo, setTempInfo] = useState<string>("");
	const eventHandler: LeafletEventHandlerFnMap = useMemo(
		() => ({
			click(e): void {
				const lat = e.latlng.lat;
				const lon = e.latlng.lng;

				const weather = weatherData.find(w => {
					const locationName = locations.find(loc => loc.name === w.city);
					return locationName?.lat === lat && locationName?.lon === lon;
				})
				if (weather) {
					setTempInfo(`${weather?.city}: ${weather?.temperature}°C ${weather?.condition}`);
				}
			}
		}), [weatherData],
	);
	return {
		eventHandler, tempInfo
	};
};