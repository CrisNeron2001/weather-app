import { Card } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { Props } from "../../../../core/classes/interfaces/Props/Props/Props";
import { TitleCardMapSizes } from "../../../responsive_size/Card/TitleCardMapSizes/TitleCardMapSizes";
import { TitleMapSizes } from "../../../responsive_size/Font/TitleMapSizes/TitleMapSizes";

export const TitleMapCardStyle: React.FC<Props> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <Card
            sx={{
                borderRadius: "10px",
                backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                boxShadow: "unset",
                transition: "background-color 0.3s ease-in-out",
				display: "flex",
				justifyContent: "center",
				color: theme === Theme.dark ? "white" : "black",
				width: {
					xs: TitleCardMapSizes.xs.width,
					sm: TitleCardMapSizes.sm.width,
					md: TitleCardMapSizes.md.width,
					lg: TitleCardMapSizes.lg.width,
					xl: TitleCardMapSizes.xl.width,
				},
				fontSize: {
					xs: TitleMapSizes.xs,
					sm: TitleMapSizes.sm,
					md: TitleMapSizes.md,
					lg: TitleMapSizes.lg,
					xl: TitleMapSizes.xl
				},
				fontStyle: "bold"
            }}
        >
            {children}
        </Card>
    );
}