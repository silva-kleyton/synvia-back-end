import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";


export class ListUserController {
    constructor(private listUserUseCase: ListUserUseCase) { }

    async handle(request: Request, response: Response) {
        const users = await this.listUserUseCase.execute();
        return response.status(200).json(users);
    }
}