import { Select, SelectProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { FontComboBoxMapSizes } from "../../../responsive_size/Font/FontComboBoxMap/FontComboBoxMap";

export const StyleComboBoxMap: React.FC<SelectProps> = (props) => {
    const { theme } = useTheme();

    return (
        <Select
        {...props}
            sx={{
                width: "200px",
                height: "100%",
                backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                display: "flex",
                color: theme === Theme.dark ? "white" : "black",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s ease-in-out",
                "& .MuiSelect-icon": {
                    color: theme === Theme.dark ? "white" : "black",
                },
				fontSize: {
					xs: FontComboBoxMapSizes.xs,
					sm: FontComboBoxMapSizes.sm,
					md: FontComboBoxMapSizes.md,
					lg: FontComboBoxMapSizes.lg,
					xl: FontComboBoxMapSizes.xl
				},
            }}
            id="grouped-select"
        >
        </Select>
    );
};