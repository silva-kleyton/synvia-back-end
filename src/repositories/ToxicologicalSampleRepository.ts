import { IToxicologicalSampleDTO } from '../interfaces/repositories/IToxicologicalSampleRepository';
import { IToxicologicalAnalysisRepository } from '../interfaces/repositories/IToxicologicalSampleRepository';
import ToxicologicalSample, { IToxicologicalSample } from '../models/ToxicologicalSample';


export class ToxicologicalSampleRepository implements IToxicologicalAnalysisRepository {
    private repository: import("mongoose").Model<IToxicologicalSample, {}, {}>;

    constructor() {
        this.repository = ToxicologicalSample;
    }

    async create(data: IToxicologicalSampleDTO): Promise<IToxicologicalSample> {
        return await this.repository.create(data);
    }

}