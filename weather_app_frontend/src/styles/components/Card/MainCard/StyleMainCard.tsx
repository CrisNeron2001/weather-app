import { Card, CardProps } from "@mui/material";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { useTheme } from "../../../../states/UseTheme";
import { CardMainSizes } from "../../../responsive_size/Card/CardMainSizes/CardMainSizes";

export const StyleMainCard = (props: CardProps) => {
	const { theme } = useTheme();

	return (
		<Card
			{...props}
			sx={{
				opacity: 0.8,
				width: {
					xs: CardMainSizes.xs.width,
					sm: CardMainSizes.sm.width,
					md: CardMainSizes.md.width,
					lg: CardMainSizes.lg.width,
					xl: CardMainSizes.xl.width,
				},
				height: "auto",
				borderRadius: 2,
				backgroundColor:
					theme === Theme.dark ? "#000000" : "#ffffff",
				boxShadow: 3,
				transition: "background-color 0.3s ease",
				color: theme === Theme.dark ? "white" : "black",
				padding: "16px"
			}}
		>
		</Card>
	);
};