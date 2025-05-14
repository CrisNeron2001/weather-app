import maplibregl from "maplibre-gl";
import { ConvertCoordinatesToGeoJson } from "../CoordinatesGeojson/ConvertCoordinatesToGeoJson";
import { AddLayerMap } from "../LayerMap/AddLayerMap";
import { WeatherDTO } from "../../../core/classes/dto/WeatherDTO/WeatherDTO";
export const UpdateMapSource = (
    map: maplibregl.Map,
    sourceId: string,
    weatherData: WeatherDTO[]
) => {
    const source = map.getSource(sourceId) as maplibregl.GeoJSONSource;
    
    if (source) {
        source.setData({
            type: "FeatureCollection",
            features: ConvertCoordinatesToGeoJson(weatherData),
        });
        map.triggerRepaint();
    } else {
        map.addSource(sourceId, {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: ConvertCoordinatesToGeoJson(weatherData),
            },
        });
        map.addLayer(AddLayerMap());
    }
}