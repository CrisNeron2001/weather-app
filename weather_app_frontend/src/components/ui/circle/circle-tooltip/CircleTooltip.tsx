import { locations } from "@data/locations-regions-data";
import useHandleClickCircle from "@hooks/handle-click-circle/useHandleClickCircle";
import { Circle, Tooltip } from "react-leaflet";
import { WeatherProp } from "src/types/weather-prop";

export const CircleTooltip = ({weatherData}: WeatherProp) => {
	const { eventHandler, tempInfo } = useHandleClickCircle({weatherData});

	if (!Array.isArray(weatherData)) return null;

	const weatherWithLocation = weatherData.map(weather => {
		const location = locations.find(loc => loc.name === weather.city)
		console.log("tempInfo: ", tempInfo);
		console.log("tipo de tempInfo:", typeof tempInfo);

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
			radius={700}
			fillColor="blue"
			eventHandlers={{
				...eventHandler,
				click(e){
					e.target.openTooltip();
				}
			}}
		>
			<Tooltip permanent>{ tempInfo }</Tooltip>	
		</Circle>
	))
}