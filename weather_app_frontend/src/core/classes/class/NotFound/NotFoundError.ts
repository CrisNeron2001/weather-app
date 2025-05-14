import { CustomError } from "../CustomError/CustomError";

export class NotFoundError extends CustomError {
	constructor(message: string) {
		super(message);
		this.name = "Not Found";
		this.message = message;
		this.stack = (new Error()).stack;
	}
}