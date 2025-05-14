export const MapConfig = {
    styleUrl: (apiKey: string) => `https://api.maptiler.com/maps/basic/style.json?key=${apiKey}`,
    center: [-72.70294207079894, -38.40486560053907] as [number, number],
    zoom: 2,
}