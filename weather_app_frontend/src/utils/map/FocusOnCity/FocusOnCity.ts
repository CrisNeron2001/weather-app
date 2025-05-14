import maplibregl from "maplibre-gl";

export const focusOnCity = (
    map: maplibregl.Map | null,
    coord: [number, number],
    zoomLevel: number = 12
) => {
    if (map && Array.isArray(coord)) {
        map.flyTo({
            center: coord,
            zoom: zoomLevel,
            essential: true,
        });
    }
};