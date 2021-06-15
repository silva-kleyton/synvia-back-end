import { ToxicologicalSampleRepository } from '../../repositories/implementations/ToxicologicalSampleRepository';
import { ListToxicologicalSampleController } from './ListToxicologicalSampleController';
import { ListToxicologicalSampleUseCase } from './ListToxicologicalSampleUseCase';

const toxicologicalSampleRepository = new ToxicologicalSampleRepository();
const listToxicologicalSampleUseCase = new ListToxicologicalSampleUseCase(toxicologicalSampleRepository);
const listToxicologicalSampleController = new ListToxicologicalSampleController(listToxicologicalSampleUseCase);

export { listToxicologicalSampleController }