import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useModal from "@hooks/modal-hook/useModal";

export const ErrorModal = ({error}: {error: string | null}) => {
	const { isOpen, setIsOpen } = useModal();
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10 focus:outline-none">
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4">
					<DialogPanel 
						transition 
						className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
					>
						<DialogTitle as="h3" className="text-base/7 font-medium text-white">
							Ocurri&oacute; un error
						</DialogTitle>
						<p className="mt-2 text-sm/6 text-white/50">{ error }</p>
						<div className="mt-4">
							<Button
								className="inline-flex items-center rounded-md bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-red-500 data-hover:bg-red-600 data-open:bg-red-700"
								onClick={() => setIsOpen(false)}
								>
									Cerrar
							</Button>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}