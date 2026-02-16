import { locations } from "@data/locations-regions-data";
import { LeafletEventHandlerFnMap } from "leaflet";
import { useMemo, useState } from "react";
import { WeatherProp } from "@typing/weather-prop";

export default function useHandleClickCircle({weatherData}: WeatherProp) {
	const [ selectedLocation, setSelectedLocation ] = useState();
	const eventHandler: LeafletEventHandlerFnMap = useMemo(
		() => ({
			click(e): void {
				const lat = e.latlng.lat;
				const lon = e.latlng.lng;

				const weather = weatherData.find(w => {
					const locationName = locations.find(loc => loc.name === w.city);
					if (!locationName) return false;
					const isSameLocation = (Math.abs(locationName.lat - lat) < 0.01 && Math.abs(locationName.lon - lon) < 0.01);
					return isSameLocation;
				});
				weather;
			}
		}), [weatherData],
	);
	return {
		eventHandler, selectedLocation, setSelectedLocation
	};
};