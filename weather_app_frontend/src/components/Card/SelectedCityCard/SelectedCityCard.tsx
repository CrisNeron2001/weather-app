import { CardContent } from "@mui/material";
import { CardInfoWeatherStyle } from "../../../styles/components/Card/CardInfoWeather/CardInfoWeatherStyle";
import { Typography } from "@mui/material";

export const SelectedCityCard = () => {
	return (
		<CardInfoWeatherStyle>
			<CardContent>
				<Typography>
					Seleccione una ciudad
				</Typography>
			</CardContent>
		</CardInfoWeatherStyle>
	);
}