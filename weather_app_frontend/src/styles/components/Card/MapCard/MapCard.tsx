import { Card, CardProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { MapSizes } from "../../../responsive_size/Card/MapSizes/MapSizes";

export const MapCard= (props: CardProps) => {
    const { theme } = useTheme();

    return (
        <Card
            {...props}
            sx={{
                width: {
					xs: MapSizes.xs.width,
					sm: MapSizes.sm.width,
					md: MapSizes.md.width,
					lg: MapSizes.lg.width,
					xl: MapSizes.xl.width,
				},
                height: {
					xs: MapSizes.xs.height,
					sm: MapSizes.sm.height,
					md: MapSizes.md.height,
					lg: MapSizes.lg.height,
					xl: MapSizes.xl.height
				},
                borderRadius: "10px",
				display: "flex",
				justifyContent: "center",
                backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                boxShadow: "unset",
                transition: "background-color 0.3s ease-in-out",
            }}>
        </Card>
    );
};
