import React from "react";
import { Link } from "react-router-dom";
import { TreeNodeData } from "../../../../core/data/TreeNodeData/TreeNodeData";
import { ThemeToggle } from "../../../../components/Toggle/ThemeToggleComponent";
import { useTheme } from "../../../../states/UseTheme";
import { Theme } from "../../../../core/classes/enum/Theme/Theme";
import { SideBarProps } from "../../../../core/classes/interfaces/Props/SideBarProps/SideBarProps";

export const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
    const { theme } = useTheme();

	return isOpen ? (
		<aside
			className={`w-64 h-screen fixed top-0 transition-transform duration-300 z-40
				${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
				${theme === Theme.dark ? "bg-amber-700" : "bg-amber-200"} text-white`}>
			<div className="pt-16 pl-8">
				<ul>
					{TreeNodeData.map((node) => (
						<li key={node.path} className="p-4 flex items-center">
							{node.path ? (
								<Link to={node.path} className="flex-grow">
									<span className="ml-5">{node.icon}</span>
								</Link>
							) : (
								<span className="mr-2">{node.icon}</span>
							)}
						</li>
					))}
				</ul>
				<ThemeToggle />
			</div>
		</aside>
	) : null;
}