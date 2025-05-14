import { Theme } from "../../core/classes/enum/Theme/Theme";
import { AppRoutes } from "../../routes/AppRoutes";
import { useTheme } from "../../states/UseTheme";

export const ContentWrapper: React.FC = () => {
	const { theme } = useTheme();

	return (
		<div
		className={`content flex-1 p-1 w-full h-full overflow-y-auto bg-center bg-contain bg-no-repeat ${
			theme === Theme.dark ? "dark-mode" : "light-mode"}`}>
			<AppRoutes/>
		</div>
	);
};