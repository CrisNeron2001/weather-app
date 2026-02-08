import { 
	MapContainer, 
	Circle,
	Tooltip,
	TileLayer
} from "react-leaflet";
import useWeatherWithLocation from "@hooks/useWeatherWithLocation";
import { LatLng } from "leaflet";

const weatherInfoMapChart = () => {
	const weatherLocationData = useWeatherWithLocation().weatherWithLocation;
	const isLoading = useWeatherWithLocation().isLoading;
	const error = useWeatherWithLocation().error;
	const eventHandle = useWeatherWithLocation().eventHandle;
	const alertError = alert(error);

	const lat = weatherLocationData.map(locations => {
		return locations.location.lat;
	})[0];

	const lon = weatherLocationData.map(locations => {
		return locations.location.lon;
	})[0];

	const center = new LatLng(lat, lon);

	const cities = weatherLocationData.map(locations => {
		locations.location.name
	});

	const temperatures = weatherLocationData.map(weather => {
		weather.weather.filter(w => w.temperature);
	});

	const infoWeather: string = `${cities} - ${temperatures}`

	const TooltipCircle = () => {
		if (!infoWeather || !center) return null;
		return (
			<Circle 
				center={center}
				eventHandlers={eventHandle}
				pathOptions={{ fillColor: 'blue' }}
				radius={200}
			>
				<Tooltip>
					{infoWeather}
				</Tooltip>
			</Circle>
		);
	}

	if (!TooltipCircle) {
		return alertError;
	} else if (isLoading) {
		return <h1>Cargando...</h1>
	} else {
		return (
			<MapContainer 
				center={center} 
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer 
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<TooltipCircle/>
			</MapContainer>
		);
	}
}

export default weatherInfoMapChart;