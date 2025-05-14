import { ButtonIconMenu } from "../../../../components/Button/ButtonIconMenu/ButtonIconMenu";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";

export const NavBar = ({ isSidebarOpen, setIsSidebarOpen }: {
	isSidebarOpen: boolean;
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { theme } = useTheme();

	return (
        <nav className={`w-full h-16 fixed top-0 transition-transform duration-300 z-50
            ${theme === Theme.dark ? "bg-amber-700" : "bg-amber-200"}
        `}>
            <div className="flex items-center h-full px-4">
                <ButtonIconMenu
                    isOpen={isSidebarOpen}
                    setIsOpen={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </div>
        </nav>
	)
}