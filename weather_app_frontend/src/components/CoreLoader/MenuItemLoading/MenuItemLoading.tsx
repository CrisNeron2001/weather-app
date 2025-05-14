import { StyleMenuItem } from "../../../styles/components/ComboBox/StyleMenuItem/StyleMenuItem";
import { IconLoader } from "../IconLoader/IconLoader";

export const MenuItemLoading = () => {
	return (
		<StyleMenuItem disabled>
			<IconLoader />
		</StyleMenuItem>
	);
}