import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { ToxicologicalAnalysisUseCase } from "./ToxicologicalAnalysisUseCase";


export class ToxicologicalAnalysisController {
    constructor(private toxicologicalAnalysisUseCase: ToxicologicalAnalysisUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const data = request.body;
            const analysis = await this.toxicologicalAnalysisUseCase.execute(data)
            return response.status(201).json(analysis);
        } catch (error) {
            throw new AppError("Server internal error", 500)
        }
    }
}