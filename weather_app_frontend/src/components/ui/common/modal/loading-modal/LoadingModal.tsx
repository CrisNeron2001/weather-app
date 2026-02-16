import { Dialog, DialogPanel } from '@headlessui/react';
import useFetchWeatherWithLocation from "@hooks/fetch-weather-hook/useFetchWeatherData";
import "@styles/loading-style.css";

export const LoadingModal = () => {

	const { isLoading, setIsLoading } = useFetchWeatherWithLocation();

	if (isLoading) {
		return (
			<Dialog className="relative z-10 focus:outline-none" open={isLoading} onClose={() => setIsLoading(false)}>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel 
							transition 
							className="flex w-full items-center justify-center max-w-md rounded-xl bg-white/5 p-25 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 i}"
						>
							<span className='loader'></span>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		);
	}
}