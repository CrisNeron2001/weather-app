import { Card, CardProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { PieSizes } from "../../../responsive_size/Card/PieSizes/PieSizes";

export const PieCard: React.FC<CardProps> = ( props ) => {
    const { theme } = useTheme();

    return (
        <Card
			{...props}
            sx={{
				width: {
					xs: PieSizes.xs.width,
					sm: PieSizes.sm.width,
					md: PieSizes.md.width,
					lg: PieSizes.lg.width,
					xl: PieSizes.xl.width
				},
				height: {
					xs: PieSizes.xs.height,
					sm: PieSizes.sm.height,
					md: PieSizes.md.height,
					lg: PieSizes.lg.height,
					xl: PieSizes.xl.height
				},
				display: "flex",
				justifyContent: "center",
                opacity: 0.9,
                backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                color: theme === Theme.dark ? "white" : "black",
                fontSize: 16,
                transition: "color 0.3s ease-in-out",
                borderRadius: 2,
                boxShadow: theme === Theme.dark ? "0px 0px 10px rgba(255, 255, 255, 0.1)" : "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
        </Card>
    );
}