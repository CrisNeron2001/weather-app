import { TreeNode } from "../../classes/interfaces/TreeNode/TreeNode";
import { ButtonIconChartBar } from "../../../components/Button/ButtonIconChartBar/ButtonIconChartBar";
import { ButtonIconMap } from "../../../components/Button/ButtonIconMap/ButtonIconMap";
import { ButtonIconHome } from "../../../components/Button/ButtonIconHome/ButtonIconHome";

export const TreeNodeData: TreeNode[] = [
	{
		path: "/",
		icon: <ButtonIconHome />
	},
	{
		path: "/map",
		icon: <ButtonIconMap />
	},
	{
		path: "/charts",
		icon: <ButtonIconChartBar />
	}
];
