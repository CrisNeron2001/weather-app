import { Header } from '@layouts/header/Header';
import { Main } from '@layouts/main/Main';
import { WeatherInfoWithArticle } from '@components/wrappers/map/WeatherInfoWithArticle';
import { TempCityWithArticle } from '@components/wrappers/charts/line-chart/TempCityWithArticle';
import { HumidityCityWithArticle } from '@components/wrappers/charts/bar-chart/HumidityCityWithArticle';
import './App.css';
import { ErrorModal } from '@components/ui/common/modal/error-modal/ErrorModal';
import { LoadingModal } from '@components/ui/common/modal/loading-modal/LoadingModal';
import useFetchWeatherData from '@hooks/fetch-weather-hook/useFetchWeatherData';

const App: React.FC = () => {
	const { weatherData, isLoading, error } = useFetchWeatherData();

    return (
		<div className="flex flex-col row-auto gap-6">
			<Header/>
			<div className='flex justify-center'>
				{isLoading ? (
					<LoadingModal/>
				) : error ? (
					<ErrorModal error={error} />
				) : (
					<Main>
						<section>
							<WeatherInfoWithArticle weatherData={weatherData} />
						</section>
						<section>
							<TempCityWithArticle weatherData={weatherData} />
							<HumidityCityWithArticle  weatherData={weatherData}/>
						</section>
					</Main>
				)}
			</div>
		</div>
    );
};

export default App;