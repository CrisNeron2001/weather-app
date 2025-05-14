import { Typography } from "@mui/material";
import { HandlerError } from "../../../../../utils/handle/HandleError/HandleError";
import { ErrorInternal } from "../../../../../core/classes/class/ErrorInternal/ErrorInternal";

export const RenderInternalError = () => {
	try {
		throw new ErrorInternal("Error interno del servidor");
	} catch (error) {
		const handleError = HandlerError(error as ErrorInternal);
		console.log(handleError?.status, handleError?.message);
		return (
			<>
				<Typography variant="h4" color="error">
					{handleError?.status == 500}
				</Typography>
				<Typography variant="h6" color="error">
					{handleError?.message}
				</Typography>
			</>
		);
	}
}