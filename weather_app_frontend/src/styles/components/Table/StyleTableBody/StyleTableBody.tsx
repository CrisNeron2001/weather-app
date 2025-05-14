import { TableBody, TableBodyProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";

export const StyleTableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
	const { theme } = useTheme();

	return (
		<TableBody
			{...props}
			sx={{
				backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
				color: theme === Theme.dark ? "white" : "black",
				transition: "color 0.3s ease-in-out",
				opacity: 0.8
			}}
		>
			{children}
		</TableBody>
	);
};