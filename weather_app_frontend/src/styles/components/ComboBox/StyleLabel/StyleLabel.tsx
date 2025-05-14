import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { Props } from "../../../../core/classes/interfaces/Props/Props/Props";
import { FontLabelSizes } from "../../../responsive_size/Font/FontLabel/FontLabel";

export const StyleLabel: React.FC<Props> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <label
            style={{
                color: theme === Theme.dark ? "white" : "black",
                fontSize: FontLabelSizes.md,
                transition: "color 0.3s ease-in-out",
            }}
        >
            {children}
        </label>
    );
};