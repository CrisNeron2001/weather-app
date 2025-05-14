import { MenuItem, MenuItemProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { Props } from "../../../../core/classes/interfaces/Props/Props/Props";
import { FontMenuItemSizes } from "../../../responsive_size/Font/FontMenuItemSizes/FontMenuItemSizes";

export const StyleMenuItem: React.FC<Props & MenuItemProps> = ({ children, ...props }) => {
    
    const { theme } = useTheme();

    return (
        <MenuItem
            {...props}
            sx={{
                color: theme === Theme.dark ? "white" : "black",
                backgroundColor: theme === Theme.dark ? "#333" : "#fff",
				fontSize: {
					xs: FontMenuItemSizes.xs,
					sm: FontMenuItemSizes.sm,
					md: FontMenuItemSizes.md,
					lg: FontMenuItemSizes.lg,
					xl: FontMenuItemSizes.xl
				},
                transition: "color 0.3s ease-in-out",
				"&:hover": {
					backgroundColor: theme === Theme.dark ? "#444" : "#f0f0f0",
					color: theme === Theme.dark ? "white" : "black",
				},
				"&.Mui-selected": {
					backgroundColor: theme === Theme.dark ? "#555" : "#e0e0e0",
					color: theme === Theme.dark ? "white" : "black",
				},
				"&.Mui-selected:hover": {
					backgroundColor: theme === Theme.dark ? "#666" : "#d0d0d0",
					color: theme === Theme.dark ? "white" : "black",
				},
                ...props.sx,
            }}
        >
            {children}
        </MenuItem>
    );
};