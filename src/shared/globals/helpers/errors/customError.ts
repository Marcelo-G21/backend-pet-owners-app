import { IError } from './error.interface';

// Design Pattern Facade
export abstract class CustomError extends Error {
	abstract statusCode: number;
	abstract status: string;

	constructor(message: string) {
		super(message);
	}

	serializeErrors(): IError {
		return {
			message: this.message,
			status: this.status,
			statusCode: this.statusCode
		};
	}
}
