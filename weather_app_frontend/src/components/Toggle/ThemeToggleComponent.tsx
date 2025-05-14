import React from "react";
import { useTheme } from "../../states/UseTheme";
import { Theme } from "../../core/classes/enum/Theme/Theme";
import { StyleSwitch } from "../../styles/components/Switch/StyleSwitch";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="grid justify-items-center">
            <StyleSwitch
                checked={theme === Theme.dark}
                onChange={toggleTheme}
                color="default"
            />
        </div>
    );
};