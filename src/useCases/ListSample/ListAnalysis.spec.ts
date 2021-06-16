import { IToxicologicalSampleDTO } from '../../interfaces/repositories/IToxicologicalSampleRepository';
import { IToxicologicalSample } from '../../models/ToxicologicalSample';
import { ToxicologicalSampleRepositoryInMemory } from '../../repositories/in-memory/ToxicologicalSampleRepository';
import { ListToxicologicalSampleUseCase } from "./ListToxicologicalSampleUseCase";
import { ToxicologicalAnalysisUseCase } from "../toxicologicalAnalysis/ToxicologicalAnalysisUseCase";


let listToxicologicalSampleUseCase: ListToxicologicalSampleUseCase;
let toxicologicalAnalysisUseCase: ToxicologicalAnalysisUseCase;
let toxicologicalSampleRepositoryInMemory: ToxicologicalSampleRepositoryInMemory;

describe("List Toxicological Analisys", () => {
    beforeEach(() => {
        toxicologicalSampleRepositoryInMemory = new ToxicologicalSampleRepositoryInMemory()
        listToxicologicalSampleUseCase = new ListToxicologicalSampleUseCase(toxicologicalSampleRepositoryInMemory)
        toxicologicalAnalysisUseCase = new ToxicologicalAnalysisUseCase(toxicologicalSampleRepositoryInMemory)
    });

    it("Testar lista de amostras", async () => {

        const sample: IToxicologicalSampleDTO = {
            codigo_amostra: "02383322",
            cocaina: 0.4,
            anfetamina: 0.19,
            metanfetamina: 0.19,
            mda: 0.19,
            mdma: 0.19,
            thc: 0.049,
            morfina: 0.1,
            codeina: 0.1,
            heroina: 0.019,
            benzoilecgonina: 0,
            cocaetileno: 0,
            norcocaina: 0
        }

        await toxicologicalAnalysisUseCase.execute(sample);

        const list: IToxicologicalSample[] = await listToxicologicalSampleUseCase.execute();

        expect(list.length).toEqual(1)
    });


    it("Testar se a lista de amostra possui 3 itens.", async () => {

        const sample1: IToxicologicalSampleDTO = {
            codigo_amostra: "02383322",
            cocaina: 0.4,
            anfetamina: 0.19,
            metanfetamina: 0.19,
            mda: 0.19,
            mdma: 0.19,
            thc: 0.049,
            morfina: 0.1,
            codeina: 0.1,
            heroina: 0.019,
            benzoilecgonina: 0,
            cocaetileno: 0,
            norcocaina: 0
        }

        const sample2: IToxicologicalSampleDTO = {
            ...sample1,
            codigo_amostra: "02383323",
        }

        const sample3: IToxicologicalSampleDTO = {
            ...sample1,
            codigo_amostra: "02383324",
        }

        await toxicologicalAnalysisUseCase.execute(sample1);
        await toxicologicalAnalysisUseCase.execute(sample2);
        await toxicologicalAnalysisUseCase.execute(sample3);

        const list: IToxicologicalSample[] = await listToxicologicalSampleUseCase.execute();

        expect(list.length).toEqual(3)
    });

});