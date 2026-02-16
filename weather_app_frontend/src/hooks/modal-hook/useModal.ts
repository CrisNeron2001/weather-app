import { useState } from "react"

export default function useModal() {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	return { isOpen, setIsOpen };
}