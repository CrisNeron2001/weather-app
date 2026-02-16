export const Main = ({ children }: any) => {

	return (
		<main className="flex justify-center bg-white/5 backdrop-blur-2xl rounded-xl opacity-80 shadow-lg">
			<div className="gap-4">
				{ children }
			</div>
		</main>
	);
}