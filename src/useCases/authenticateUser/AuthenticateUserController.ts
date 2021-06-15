import { AppError } from './../../errors/AppError';
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { authValidation } from '../../validations/schema/Auth';

export class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { error } = authValidation.validate(request.body);

        if (error) {
            throw new AppError("Error authentication", 422, error.details);
        }

        const { email, password } = request.body;
        const auth = await this.authenticateUserUseCase.execute({ email, password });
        return response.status(200).json(auth);
    }
}