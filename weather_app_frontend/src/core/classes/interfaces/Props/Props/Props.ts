import { SelectChangeEvent } from "@mui/material";

export interface Props {
    children?: React.ReactNode;
    onChange?: (event: SelectChangeEvent<unknown>) => void;
    valueProps?: string;
}