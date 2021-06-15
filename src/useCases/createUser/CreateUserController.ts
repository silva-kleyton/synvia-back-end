import { Request, Response } from "express";
import { createUserValidation } from "../../validations/schema/User";
import { AppError } from "../../errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { error } = createUserValidation.validate(request.body);

        if (error) {
            throw new AppError("Error crate user.", 422, error.details);
        }

        const { name, email, password } = request.body;
        const user = await this.createUserUseCase.execute({ name, email, password });
        return response.status(201).json(user);
    }
}