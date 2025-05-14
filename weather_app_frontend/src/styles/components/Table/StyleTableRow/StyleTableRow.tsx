import { TableRow, TableRowProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";

export const StyleTableRow: React.FC<TableRowProps> = ({ children, ...props}) => {
	const theme = useTheme();
	return (
		<TableRow
			{...props}
			sx={{
				backgroundColor: theme.theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
				transition: "color 0.3s ease-in-out",
				opacity: 1
			}}
		>
			{children}
		</TableRow>
	);
}