import { IToxicologicalAnalysisRepository } from '../../interfaces/repositories/IToxicologicalSampleRepository';
import { IToxicologicalSample } from "../../models/ToxicologicalSample";

export class ListToxicologicalSampleUseCase {
    constructor(private toxicologicalAnalysisRepository: IToxicologicalAnalysisRepository) { }

    async execute(): Promise<IToxicologicalSample[]> {
        return await this.toxicologicalAnalysisRepository.list();
    }
}