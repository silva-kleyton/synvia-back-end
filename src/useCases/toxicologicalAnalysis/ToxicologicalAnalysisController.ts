import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { toxicologicalAnalysisValidation } from "../../validations/schema/ToxicologicalAnalysis";
import { ToxicologicalAnalysisUseCase } from "./ToxicologicalAnalysisUseCase";

export class ToxicologicalAnalysisController {
    constructor(private toxicologicalAnalysisUseCase: ToxicologicalAnalysisUseCase) { }

    async handle(request: Request, response: Response) {
        const data = request.body;

        const { error } = toxicologicalAnalysisValidation.validate(data);

        if (error) {
            throw new AppError("Error analysis", 422, error.details);
        }

        const analysis = await this.toxicologicalAnalysisUseCase.execute(data)
        return response.status(201).json(analysis);
    }
}