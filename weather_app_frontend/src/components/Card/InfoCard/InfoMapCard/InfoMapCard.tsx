import {
	CardActionArea,
	CardContent,
	Typography
} from "@mui/material";
import { StyleInfoCard } from "../../../../styles/components/Card/InfoCard/StyleInfoCard";
import { IconMapCard } from "../../../Icon/IconMap/IconMap";
import { Link } from "react-router-dom";

export const InfoMapCard = () => {
	return (
		<StyleInfoCard>
			<CardActionArea>
				<Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
					<IconMapCard />
					<CardContent>
						<Typography variant="h6" component="div">
							Mapa de Chile
						</Typography>
						<Typography variant="body2">
							Este mapa interactivo de Chile permite
							visualizar datos clim&aacute;ticos en tiempo
							real, facilitando la comprensi&oacute;n de las 
							condiciones meteorol&oacute;gicas en
							diferentes regiones del pa&iacute;s.
						</Typography>
					</CardContent>
				</Link>
			</CardActionArea>
		</StyleInfoCard>
	);
};