import { Card } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { Props } from "../../../../core/classes/interfaces/Props/Props/Props";
import { CardInfoWeatherSizes } from "../../../responsive_size/Card/CardInfoWeatherSizes/CardInfoWeatherSizes";

export const CardInfoWeatherStyle: React.FC<Props> = ({ children }) => {
	const { theme } = useTheme();

	return (
		<Card
			sx={{
				width: {
					xs: CardInfoWeatherSizes.xs.width,
					sm: CardInfoWeatherSizes.sm.width,
					md: CardInfoWeatherSizes.md.width,
					lg: CardInfoWeatherSizes.lg.width,
					xl: CardInfoWeatherSizes.xl.width,
				},
				height: {
					xs: CardInfoWeatherSizes.xs.height,
					sm: CardInfoWeatherSizes.sm.height,
					md: CardInfoWeatherSizes.md.height,
					lg: CardInfoWeatherSizes.lg.height,
					xl: CardInfoWeatherSizes.xl.height,
				},
				borderRadius: "10px",
				backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
				boxShadow: "unset",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				transition: "background-color 0.3s ease-in-out",
				color: theme === Theme.dark ? "white" : "black",
			}}
		>
			{children}
		</Card>
	);
};
