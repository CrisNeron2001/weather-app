import { Card, CardProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { LineBarSizes } from "../../../responsive_size/Card/LineBarSizes/LineBarSizes";

export const LineCard: React.FC<CardProps> = ( props ) => {
    const { theme } = useTheme();

    return (
        <Card
			{...props}
            sx={{
				width: {
					xs: LineBarSizes.xs.width,
					sm: LineBarSizes.sm.width,
					md: LineBarSizes.md.width,
					lg: LineBarSizes.lg.width,
					xl: LineBarSizes.xl.width,
					xxl: LineBarSizes.xxl.width,
				},
				height: {
					xs: LineBarSizes.xs.height,
					sm: LineBarSizes.sm.height,
					md: LineBarSizes.md.height,
					lg: LineBarSizes.lg.height,
					xl: LineBarSizes.xl.height,
					xxl: LineBarSizes.xxl.height,
				},
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
                opacity: 0.8,
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