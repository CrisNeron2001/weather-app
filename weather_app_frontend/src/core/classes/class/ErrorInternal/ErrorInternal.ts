import { CustomError } from "../CustomError/CustomError";

export class ErrorInternal extends CustomError {
	constructor(message: string) {
		super(message);
		this.name = "Internal Server Error";
		this.message = message;
		this.stack = (new Error()).stack;
	}
}