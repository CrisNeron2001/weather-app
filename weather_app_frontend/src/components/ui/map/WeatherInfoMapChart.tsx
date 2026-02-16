import { 
	MapContainer,
	TileLayer
} from "react-leaflet";
import { CircleTooltip } from "../circle/circle-tooltip/CircleTooltip";
import { WeatherProp } from "@typing/weather-prop";

export const WeatherInfoMapChart = ({weatherData}: WeatherProp) => {
	return (
		<MapContainer 
			className="h-100 w-full"
			center={[-33.45, -70.66]} 
			zoom={3} 
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