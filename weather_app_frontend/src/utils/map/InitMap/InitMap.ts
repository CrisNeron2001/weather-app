import maplibregl from "maplibre-gl";
import { ConvertCoordinatesToGeoJson } from "../CoordinatesGeojson/ConvertCoordinatesToGeoJson";
import { AddLayerMap } from "../LayerMap/AddLayerMap";
import { WeatherDTO } from "../../../core/classes/dto/WeatherDTO/WeatherDTO";
import { MapConfig } from "../ConfigMap/ConfigMap";

export const InitMap = (
    container: HTMLElement,
    apiKey: string,
    weatherData: WeatherDTO[],
    onMapLoad: (map: maplibregl.Map) => void
): maplibregl.Map => {
    const map = new maplibregl.Map({
        container,
        style: MapConfig.styleUrl(apiKey),
        center: MapConfig.center,
        zoom: MapConfig.zoom
    });

    map.on("load", () => {
        map.addSource("temperature", {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: ConvertCoordinatesToGeoJson(weatherData),
            },
        });
        map.addLayer(AddLayerMap());
        if (onMapLoad) {
            onMapLoad(map);
        }
    });
    return map;
}