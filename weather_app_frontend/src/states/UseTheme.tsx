import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../core/classes/enum/Theme/Theme";
import { ThemeContextType } from "../core/classes/interfaces/ThemeContext/ThemeContext";
import { ReactNode } from "react";

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.light,
    toggleTheme: () => {},
});


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem("theme") as Theme) || Theme.light;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === Theme.dark);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.light ? Theme.dark : Theme.light));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    return useContext(ThemeContext);
}