import { Props } from "../../Props/Props";

export interface MapDataProps extends Props {
    onSelectCity?: (coord: [longitude: number, latitude: number], value: string[]) => void;
    onCitySelect?: (focusOnCity: (coord: [number, number], zoomLevel?: number) => void) => void;
    value?: string[];
}