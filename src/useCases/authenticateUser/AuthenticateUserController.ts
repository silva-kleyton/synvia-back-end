import { AppError } from './../../errors/AppError';
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body;
            const auth = await this.authenticateUserUseCase.execute({ email, password });
            return response.status(200).json(auth);
        } catch (error) {
            throw new AppError("Server internal error", 500)
        }
    }
}