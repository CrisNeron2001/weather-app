import BarChartIcon from "@mui/icons-material/BarChart";
import { IconChartSize } from "../../../styles/responsive_size/Icon/IconChartSize/IconChartSize";

export const IconChartCard = () => {
	return (
		<BarChartIcon
			sx={{
				color: "#0552b5",
				fontSize: {
					xs: IconChartSize.xs,
					sm: IconChartSize.sm,
					md: IconChartSize.md,
					lg: IconChartSize.lg,
					xl: IconChartSize.xl,
				},
				transition: "color 0.3s ease-in-out",
				"&:hover": {
					color: "#1a3775",
					cursor: "pointer"
				}
			}}
		/>
	);
}