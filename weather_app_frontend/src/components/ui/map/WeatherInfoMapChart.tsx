import { 
	MapContainer,
	TileLayer
} from "react-leaflet";
import { CircleTooltip } from "../circle/circle-tooltip/CircleTooltip";
import { WeatherProp } from "src/types/weather-prop";

export const WeatherInfoMapChart = ({weatherData}: WeatherProp) => {

	console.log("componente del circulo con tooltip: ", CircleTooltip);
	console.log("componente del mapa: ", MapContainer);
	console.log("el tilelayer: ", TileLayer);
	return (
		<MapContainer 
			className="h-100 w-full"
			center={[-33.45, -70.66]} 
			zoom={13} 
			scrollWheelZoom={false}
		>
			<TileLayer 
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<CircleTooltip weatherData={weatherData} />
		</MapContainer>
	);
}