import { 
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";
import { StyleInfoCard } from "../../../../styles/components/Card/InfoCard/StyleInfoCard";
import { IconChartCard } from "../../../Icon/IconChart/IconChart";
import { Link } from "react-router-dom";

export const InfoChartCard = () => {
	return (
		<StyleInfoCard>
			<CardActionArea>
				<Link to="/charts" style={{ textDecoration: "none", color: "inherit" }}>
					<IconChartCard />
					<CardContent>
						<Typography variant="h6" component="div">
							Panel de control clim&aacute;tico
						</Typography>
						<Typography variant="body2">
							Este dashboard presenta informaci&oacute;n 
							sobre las condiciones clim&aacute;ticas en 
							Chile, mostrando datos de humedad y 
							temperaturas. Una herramienta clave 
							para comprender el ambiente a nivel 
							nacional.
						</Typography>
					</CardContent>
				</Link>
			</CardActionArea>
		</StyleInfoCard>
	);
}