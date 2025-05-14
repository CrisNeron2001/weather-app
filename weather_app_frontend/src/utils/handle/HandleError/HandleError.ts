import { NotFoundError } from "../../../core/classes/class/NotFound/NotFoundError";
import { BadRequest } from "../../../core/classes/class/BadRequest/BadRequest";
import { ErrorInternal } from "../../../core/classes/class/ErrorInternal/ErrorInternal";


export const HandlerError = (error: Error) => {
	if (error instanceof NotFoundError) {
		return {
			status: 404,
			message: error.message,
		};
	} else if (error instanceof BadRequest) {
		return {
			status: 400,
			message: error.message,
		};
	} else if (error instanceof ErrorInternal) {
		return {
			status: 500,
			message: error.message,
		};
	}
}