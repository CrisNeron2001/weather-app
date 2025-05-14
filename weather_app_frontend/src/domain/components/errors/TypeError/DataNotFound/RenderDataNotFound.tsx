import { Typography } from "@mui/material";
import { HandlerError } from "../../../../../utils/handle/HandleError/HandleError";
import { NotFoundError } from "../../../../../core/classes/class/NotFound/NotFoundError";

export const RenderDataNotFound = () => {
	try {
		throw new NotFoundError("No se encontraron datos");
	} catch (error) {
		const handleError = HandlerError(error as NotFoundError);
		console.log(handleError?.status, handleError?.message);

		return (
			<>
				<Typography variant="h4" color="error">
					{handleError?.status == 404}
				</Typography>
				<Typography variant="h6" color="error">
					{handleError?.message}
				</Typography>
			</>
		);
	}
}