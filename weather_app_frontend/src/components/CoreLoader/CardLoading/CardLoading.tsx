import { CardInfoWeatherStyle } from "../../../styles/components/Card/CardInfoWeather/CardInfoWeatherStyle";
import { IconLoader } from "../IconLoader/IconLoader";

export const CardLoading = () => {
	return (
		<CardInfoWeatherStyle>
			<IconLoader />
		</CardInfoWeatherStyle>
	);
}