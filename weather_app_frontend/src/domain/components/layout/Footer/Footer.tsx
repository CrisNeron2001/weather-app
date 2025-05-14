import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
	const { theme } = useTheme();

    return (
        <footer
            className={`w-full flex justify-center items-center p-2 ${
                theme === Theme.light ? "bg-amber-200 text-blue-800" : "bg-amber-800 text-blue-300"
            }`}>
            <p className="text-sm flex items-center">
                <CopyrightIcon className="mr-1" /> 2025 Clima Chile App. All rights reserved.
            </p>
            <p className="text-xs ml-4">
                Powered by Boostr
            </p>
        </footer>
    );
}