import IconMap from "@mui/icons-material/Map";
import { IconMapSize } from "../../../styles/responsive_size/Icon/IconMapSize/IconMapSize";

export const IconMapCard = () => {
	return (
		<IconMap
			sx={{
				color: "#0552b5",
				fontSize: {
					xs: IconMapSize.xs,
					sm: IconMapSize.sm,
					md: IconMapSize.md,
					lg: IconMapSize.lg,
					xl: IconMapSize.xl,
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