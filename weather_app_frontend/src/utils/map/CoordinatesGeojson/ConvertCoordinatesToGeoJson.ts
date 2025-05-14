import { Feature, Geometry, GeoJsonProperties } from 'geojson';
import { WeatherDTO } from '../../../core/classes/dto/WeatherDTO/WeatherDTO';

export const ConvertCoordinatesToGeoJson = (coord: WeatherDTO[]): Feature<Geometry, GeoJsonProperties>[] => {
    return coord.map(item => ({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [item.longitude, item.latitude]
        },
        properties: {
            type: 'coordinate'
        }
    }));
};