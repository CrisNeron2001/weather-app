import { locations } from "@data/locations-regions-data";
import useHandleClickCircle from "@hooks/handle-click-circle/useHandleClickCircle";
import { Circle, useMap } from "react-leaflet";
import { WeatherProp } from "@typing/weather-prop";

export const CircleTooltip = ({weatherData}: WeatherProp) => {
	const map = useMap();
	const { eventHandler } = useHandleClickCircle({weatherData});

	if (!Array.isArray(weatherData)) return null;

	const weatherWithLocation = weatherData.map(weather => {
		const location = locations.find(loc => loc.name === weather.city)
		return {
			...weather,
			lat: location?.lat,
			lon: location?.lon
		};
	});

	return weatherWithLocation.map(w => (
		<Circle
			key={w.code}
			center={[w.lat ?? 0, w.lon ?? 0]}
			radius={8303}
			fillColor="blue"
			eventHandlers={{
				...eventHandler,
				click(e){
					e.target.bindTooltip(
						`${w.city}: ${w.temperature}°C, ${w.condition}. Actualizado a las ${w.updated_at} hrs.`
					).openTooltip();
					map.flyTo([w.lat!, w.lon!], 10 , {
						duration: 1.2
					})
				}
			}}
		>
		</Circle>
	))
}