import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef, useState } from "react";
import { UseWeatherData } from "../../../../hooks/UseWeatherData/UseWeatherData";
import { config } from "../../../../libs/config";
import { MapCard } from "../../../../styles/components/Card/MapCard/MapCard";
import { InitMap } from "../../../../utils/map/InitMap/InitMap";
import { MapDataProps } from "../../../../core/classes/interfaces/Props/ComboBox/MapDataProps/MapDataProps";
import { UpdateMapSource } from "../../../../utils/map/UpdateMap/UpdateMap";
import { focusOnCity } from "../../../../utils/map/FocusOnCity/FocusOnCity";

export const WeatherInfoMap = ({ onCitySelect }: MapDataProps) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<maplibregl.Map | null>(null as maplibregl.Map | null);
    const { data: weatherData } = UseWeatherData();
    const apiKey = config.apiKey;

    useEffect(() => {
        if (!mapContainer.current || map) {
            return;
        }
        InitMap(
            mapContainer.current,
            apiKey,
            weatherData || [],
            (loadedMap) => setMap(loadedMap)
        );
        if (map && weatherData) {
            UpdateMapSource(map, "temperature", weatherData);
        }
    }, [mapContainer, map, apiKey, weatherData]);

	useEffect(() => {
		if (onCitySelect && map) {
            onCitySelect((coord: [number, number], zoomLevel?: number) =>
                focusOnCity(map, coord, zoomLevel ?? 12)
			);
		} 
	}, [onCitySelect, map]);

    return (
        <MapCard className="p-3">
            <div id="map" ref={mapContainer} className="w-full h-full" />
        </MapCard>
    );
};