import { RenderDataNotFound } from "../../TypeError/DataNotFound/RenderDataNotFound";
import { StyleComboBoxMap } from "../../../../../styles/components/ComboBox/StyleComboBoxMap/StyleComboBoxMap";
import { StyleMenuItem } from "../../../../../styles/components/ComboBox/StyleMenuItem/StyleMenuItem";

export const ComboBoxError = () => {
	return (
		<StyleComboBoxMap>
			<StyleMenuItem disabled>
				<RenderDataNotFound />
			</StyleMenuItem>
		</StyleComboBoxMap>
	);
};
