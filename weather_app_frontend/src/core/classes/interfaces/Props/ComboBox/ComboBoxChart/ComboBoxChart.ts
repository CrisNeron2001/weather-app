import { Props } from "../../Props/Props";

export interface ComboBoxChartProps extends Omit<Props, 'value'> {
    onSelectCity?: (city: string[] | null) => void;
    value?: string[];
}