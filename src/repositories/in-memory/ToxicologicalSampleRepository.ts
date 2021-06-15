import { IToxicologicalSampleDTO } from '../../interfaces/repositories/IToxicologicalSampleRepository';
import { IToxicologicalAnalysisRepository } from '../../interfaces/repositories/IToxicologicalSampleRepository';
import ToxicologicalSample, { IToxicologicalSample } from '../../models/ToxicologicalSample';

export class ToxicologicalSampleRepositoryInMemory implements IToxicologicalAnalysisRepository {

    private repository: IToxicologicalSample[] = [];

    async create(data: IToxicologicalSampleDTO): Promise<IToxicologicalSample> {
        const analisys = new ToxicologicalSample()

        Object.assign(analisys, data);

        await this.repository.push(analisys);
        return analisys
    }

    async list(): Promise<IToxicologicalSample[]> {
        return this.repository
    }

}