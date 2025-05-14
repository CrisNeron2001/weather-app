import { StyleMainCard } from "../../../../styles/components/Card/MainCard/StyleMainCard";
import { InfoMapCard } from "../../../../components/Card/InfoCard/InfoMapCard/InfoMapCard";
import { InfoChartCard } from "../../../../components/Card/InfoCard/InfoChartCard/InfoChartCard";
import { Typography } from "@mui/material";

export const Home = () => {
	return (
		<section>
			<div className="flex flex-col xl:justify-center px-4 py-4">
				<StyleMainCard>
					<div className="flex flex-col gap-4 w-full">
						<Typography variant="h4" component="div" className="text-center mb-6">
							Clima Chile
						</Typography>
					</div>
					<div className="h-6" />
					<div className="flex flex-col gap-2 w-full justify-center p-6">
						<Typography variant="h6" className="text-center">
							Bienvenido a tu centro de informaci&oacute;n
							clim&aacute;tica de Chile. Explora todos los datos
							actualizados y visualizaciones detalladas
							del tiempo en todo el pa&iacute;s.
						</Typography>
					</div>
					<div className="h-8" />
					<div className="flex flex-col xl:flex-row justify-center w-full gap-4">
						<InfoChartCard />
						<InfoMapCard />
					</div>
				</StyleMainCard>
			</div>
		</section>
	);
}