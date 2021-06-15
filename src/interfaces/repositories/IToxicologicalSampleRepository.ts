import { IToxicologicalSample } from "../../models/ToxicologicalSample";

export interface IToxicologicalSampleDTO {
    codigo_amostra: string;
    cocaina: number;
    anfetamina: number;
    metanfetamina: number;
    mda: number;
    mdma: number;
    thc: number;
    morfina: number;
    codeina: number;
    heroina: number;
    benzoilecgonina: number;
    cocaetileno: number;
    norcocaina: number;
}

export interface IToxicologicalAnalysisRepository {
    create(data: IToxicologicalSampleDTO): Promise<IToxicologicalSample>;
}