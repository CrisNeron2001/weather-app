import { TableCell, TableCellProps } from "@mui/material";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { FontTableCellSizes } from "../../../responsive_size/Font/FontTableCellSizes/FontTableCellSizes";
import { TableCellSizes } from "../../../responsive_size/Table/TableCellSizes/TableCellSizes";

export const StyleTableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
	const { theme } = useTheme();

	return (
		<TableCell
			{...props}
			sx={{
				backgroundColor: theme === Theme.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
				color: theme === Theme.dark ? "white" : "black",
				transition: "color 0.3s ease-in-out",
				opacity: 1,
				fontSize:{
					xs: FontTableCellSizes.xs,
					sm: FontTableCellSizes.sm,
					md: FontTableCellSizes.md,
					lg: FontTableCellSizes.lg,
					xl: FontTableCellSizes.xl,
				},
				width: {
					xs: TableCellSizes.xs.width,
					sm: TableCellSizes.sm.width,
					md: TableCellSizes.md.width,
					lg: TableCellSizes.lg.width,
					xl: TableCellSizes.xl.width,
				},
				height: {
					xs: TableCellSizes.xs.height,
					sm: TableCellSizes.sm.height,
					md: TableCellSizes.md.height,
					lg: TableCellSizes.lg.height,
					xl: TableCellSizes.xl.height,
				},
			}}
		>
			{children}
		</TableCell>
	);
};