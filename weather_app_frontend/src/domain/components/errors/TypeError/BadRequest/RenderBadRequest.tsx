import { BadRequest } from "../../../../../core/classes/class/BadRequest/BadRequest";
import { Typography } from "@mui/material";
import { HandlerError } from "../../../../../utils/handle/HandleError/HandleError";

export const RenderBadRequest = () => {
	try {
		throw new BadRequest("Bad Request");
	} catch (error) {
		const handleError = HandlerError(error as BadRequest);
		console.log(handleError?.status, handleError?.message);

		return (
			<>
				<Typography variant="h4" color="error">
					{handleError?.status == 400}
				</Typography>
				<Typography variant="h6" color="error">
					{handleError?.message}
				</Typography>
			</>
		);
	}
}