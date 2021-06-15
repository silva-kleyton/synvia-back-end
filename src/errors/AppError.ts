import { ValidationErrorItem } from 'joi'

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    public readonly details: ValidationErrorItem[] | undefined;

    constructor(message: string, statusCode = 400, details?: ValidationErrorItem[]) {
        this.message = message;
        this.statusCode = statusCode;
        this.details = details;
    }
}