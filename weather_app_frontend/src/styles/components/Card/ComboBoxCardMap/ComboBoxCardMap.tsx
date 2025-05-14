import { Card, CardProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { ComboBoxMapSizes } from "../../../responsive_size/Card/ComboBoxMapSizes/ComboBoxMapSizes";

export const ComboBoxCardMap: React.FC<CardProps> = ( props ) => {
    const { theme } = useTheme();

    return (
        <Card {...props}
            sx={{
                width: {
					xs: ComboBoxMapSizes.xs.width,
					sm: ComboBoxMapSizes.sm.width,
					md: ComboBoxMapSizes.md.width,
					lg: ComboBoxMapSizes.lg.width,
					xl: ComboBoxMapSizes.xl.width,
				},
                height: "140px",
                borderRadius: "10px",
                backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                boxShadow: "unset",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s ease-in-out",
            }}
        >
        </Card>
    );
};
