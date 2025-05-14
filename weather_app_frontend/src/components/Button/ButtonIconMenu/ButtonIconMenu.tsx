import { Divide as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

export const ButtonIconMenu = ({ isOpen, setIsOpen }: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
	return (
		<div
			style={{
				marginLeft: 10,
				cursor: "pointer",
				transition: "color 0.3s ease-in-out",
			}}
		>
			<Hamburger
				toggled={isOpen}
				toggle={setIsOpen}
				color="#0552b5"
				size={30}
				duration={0.5}
				easing="ease-in-out"
				label="Show menu"
			/>
		</div>
	);
}