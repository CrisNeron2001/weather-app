import { Checkbox, CheckboxProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";

export const StyleCheckBox: React.FC<CheckboxProps> = (props) => {
    const { theme } = useTheme();

    return (
        <Checkbox
            {...props}
            sx={{
                color: theme === Theme.dark ? "white" : "black",
                "&.Mui-checked": {
                    color: theme === Theme.dark ? "white" : "black",
                },
            }}
        />
    );
};