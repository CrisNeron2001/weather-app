import { Card, CardProps } from "@mui/material";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { useTheme } from "../../../../states/UseTheme";
import { CardInfoSizes } from "../../../responsive_size/Card/CardInfoSizes/CardInfoSizes";

export const StyleInfoCard = (props: CardProps) => {
	const { theme } = useTheme();

	return (
		<Card
			{...props}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				opacity: 0.8,
				width: {
					xs: CardInfoSizes.xs.width,
					sm: CardInfoSizes.sm.width,
					md: CardInfoSizes.md.width,
					lg: CardInfoSizes.lg.width,
					xl: CardInfoSizes.xl.width,
				},
				height: "auto",
				borderRadius: 2,
				backgroundColor:
					theme === Theme.dark ? "#000000" : "#ffffff",
				boxShadow: 3,
				transition: "background-color 0.3s ease",
				padding: "16px",
				color: theme === Theme.dark ? "white" : "black",
			}}
		>
		</Card>
	);
};