import { LayerSpecification } from "maplibre-gl";

export const AddLayerMap = (): LayerSpecification => {
    return ({
        id: 'temperature-heatmap',
        type: 'heatmap',
        source: 'temperature',
        paint: {
            'heatmap-weight': ['get', 'type'],
            'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0, 0.5,
                9, 2
            ],
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)'
            ],
            'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0, 5,
                9, 15
            ],
        }
    });
}