import { CustomError } from "../CustomError/CustomError";

export class BadRequest extends CustomError {
	constructor(message: string) {
		super(message);
		this.name = "Bad Request";
		this.message = message;
		this.stack = (new Error()).stack;
	}
}