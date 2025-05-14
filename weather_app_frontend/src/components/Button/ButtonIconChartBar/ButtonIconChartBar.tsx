import BarChartIcon from "@mui/icons-material/BarChart";
import { IconButton } from "@mui/material";
import { IconButtonSizes } from "../../../styles/responsive_size/Button/IconButtonSizes/IconButtonSizes";

export const ButtonIconChartBar = () => {
	return (
		<IconButton>
			<BarChartIcon
				sx={{
					color: "#0552b5",
					fontSize: {
						xs: IconButtonSizes.small,
						sm: IconButtonSizes.medium,
						md: IconButtonSizes.medium,
						lg: IconButtonSizes.large,
						xl: IconButtonSizes.large,
					},
					transition: "color 0.3s ease-in-out",
					"&:hover": {
						color: "#1a3775",
						cursor: "pointer"
					}
				}}
			/>
		</IconButton>
	);
}