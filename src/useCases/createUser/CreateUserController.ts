import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password } = request.body;
            const user = await this.createUserUseCase.execute({ name, email, password });
            return response.status(201).json(user);
        } catch (error) {
            throw new AppError("Server internal error", 500)
        }
    }
}