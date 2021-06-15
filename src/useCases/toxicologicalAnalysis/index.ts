import { ToxicologicalSampleRepository } from '../../repositories/implementations/ToxicologicalSampleRepository';
import { ToxicologicalAnalysisUseCase } from './ToxicologicalAnalysisUseCase';
import { ToxicologicalAnalysisController } from './ToxicologicalAnalysisController';

const toxicologicalSampleRepository = new ToxicologicalSampleRepository();
const toxicologicalSampleUseCase = new ToxicologicalAnalysisUseCase(toxicologicalSampleRepository);
const toxicologicalSampleController = new ToxicologicalAnalysisController(toxicologicalSampleUseCase);

export { toxicologicalSampleController }