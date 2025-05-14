export class CustomError extends Error {
	constructor(message: string){
		super(message);
		this.name = 'Custom Error';
		this.message = message;
		this.stack = (new Error()).stack;
	}
}