import { Theme } from "../../enum/Theme/Theme";

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}