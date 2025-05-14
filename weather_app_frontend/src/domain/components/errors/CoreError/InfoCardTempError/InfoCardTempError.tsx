import { CardInfoWeatherStyle } from "../../../../../styles/components/Card/CardInfoWeather/CardInfoWeatherStyle";
import { RenderDataNotFound } from "../../TypeError/DataNotFound/RenderDataNotFound";

export const InfoWeatherError = () => {
	return (
		<CardInfoWeatherStyle>
			<RenderDataNotFound />
		</CardInfoWeatherStyle>
	);
}