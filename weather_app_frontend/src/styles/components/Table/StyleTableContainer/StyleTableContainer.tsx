import { TableContainer, TableContainerProps } from "@mui/material";
import { TableContainerSizes } from "../../../responsive_size/Table/TableContainerSizes/TableContainerSizes";

export const StyleTableContainer: React.FC<TableContainerProps> = ({ children, ...props }) => {
	return (
		<TableContainer
			{...props}
			sx={{
				borderRadius: "10px",
				width: {
					xs: TableContainerSizes.xs.width,
					sm: TableContainerSizes.sm.width,
					md: TableContainerSizes.md.width,
					lg: TableContainerSizes.lg.width,
					xl: TableContainerSizes.xl.width,
				},
				height: {
					xs: TableContainerSizes.xs.height,
					sm: TableContainerSizes.sm.height,
					md: TableContainerSizes.md.height,
					lg: TableContainerSizes.lg.height,
					xl: TableContainerSizes.xl.height,
				}
			}}
		>
			{children}
		</TableContainer>
	);
}