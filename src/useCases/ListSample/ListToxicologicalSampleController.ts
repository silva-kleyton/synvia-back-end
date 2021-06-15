import { Request, Response } from "express";
import { ListToxicologicalSampleUseCase } from "./ListToxicologicalSampleUseCase";

export class ListToxicologicalSampleController {
    constructor(private listAnalysisUseCase: ListToxicologicalSampleUseCase) { }

    async handle(request: Request, response: Response) {
        const users = await this.listAnalysisUseCase.execute();
        return response.status(200).json(users);
    }
}