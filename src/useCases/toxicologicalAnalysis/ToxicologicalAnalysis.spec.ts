import { IToxicologicalSampleDTO } from './../../interfaces/repositories/IToxicologicalSampleRepository';
import { AppError } from '../../errors/AppError';
import { ToxicologicalSampleRepositoryInMemory } from './../../repositories/in-memory/ToxicologicalSampleRepository';
import { ToxicologicalAnalysisUseCase } from "./ToxicologicalAnalysisUseCase";

let toxicologicalAnalysisUseCase: ToxicologicalAnalysisUseCase;
let toxicologicalSampleRepositoryInMemory: ToxicologicalSampleRepositoryInMemory;

const dataProperties: IToxicologicalSampleDTO = {
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


describe("Toxicological Analisys", () => {
    beforeEach(() => {
        toxicologicalSampleRepositoryInMemory = new ToxicologicalSampleRepositoryInMemory()
        toxicologicalAnalysisUseCase = new ToxicologicalAnalysisUseCase(toxicologicalSampleRepositoryInMemory)
    });

    it("Resultado deve retornar falso", async () => {
        const analysis = await toxicologicalAnalysisUseCase.execute(dataProperties);
        expect(analysis.result).toBe(false)
    });


    it("Resultado deve retornar true. Cocaína igual ou acima do valor de corte e Benzoilecgonina é acima do valor esperado.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            cocaina: 0.5,
            benzoilecgonina: 0.06
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Cocaína igual ou acima do valor de corte e Cocaetileno é acima do valor esperado.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            cocaina: 0.5,
            cocaetileno: 0.06
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Cocaína igual ou acima do valor de corte e Norcocaína é acima do valor esperado.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            cocaina: 0.5,
            norcocaina: 0.06
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Cocaína igual ou acima do valor de corte e Norcocaína e Cocaetileno é acima do valor esperado.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            cocaina: 0.5,
            norcocaina: 0.06,
            cocaetileno: 0.06
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar false. Cocaína igual ou acima do valor de corte, porém Benzoilecgonina, Norcocaína e Cocaetileno é abaixo do valor esperado.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            cocaina: 0.5,
            benzoilecgonina: 0.04,
            norcocaina: 0.03,
            cocaetileno: 0.035
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(false)
    });

    it("Resultado deve retornar true. Anfetamina igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            anfetamina: 0.2
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Metanfetamina igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            metanfetamina: 0.2
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. MDA igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            mda: 0.2
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. MDMA igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            mdma: 0.2
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. THC igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            thc: 0.06
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Morfina igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            morfina: 0.3
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Codeína igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            codeina: 0.3
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });

    it("Resultado deve retornar true. Heroína igual ou acima do valor de corte.", async () => {
        const data: IToxicologicalSampleDTO = {
            ...dataProperties,
            heroina: 0.2
        }

        const analysis = await toxicologicalAnalysisUseCase.execute(data);
        expect(analysis.result).toBe(true)
    });
});