export const Main = ({ children }: any) => {

	return (
		<main className="flex justify-center bg-white rounded-xl opacity-80 shadow-lg">
			<div className="gap-3">
				{ children }
			</div>
		</main>
	);
}