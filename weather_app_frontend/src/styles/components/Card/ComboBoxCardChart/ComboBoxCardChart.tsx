import { Card, CardProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { ComboBoxChartSizes } from "../../../responsive_size/Card/ComboBoxChartSizes/ComboBoxChartSizes";

export const ComboBoxCardChart: React.FC<CardProps> = ( props ) => {
	const { theme } = useTheme();

	return (
		<Card {...props}
			sx={{
				width: {
					xs: ComboBoxChartSizes.xs.width,
					sm: ComboBoxChartSizes.sm.width,
					md: ComboBoxChartSizes.md.width,
					lg: ComboBoxChartSizes.lg.width,
					xl: ComboBoxChartSizes.xl.width,
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
