import { IToxicologicalAnalysisRepository } from '../../interfaces/repositories/IToxicologicalSampleRepository';
import { IToxicologicalSample } from "../../models/ToxicologicalSample";

interface IRequest {
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

interface IResponse {
    codigo_amostra: string;
    sample: boolean;
}

export class ToxicologicalAnalysisUseCase {
    constructor(private toxicologicalSampleRepository: IToxicologicalAnalysisRepository) { }

    async execute(data: IRequest): Promise<IResponse> {
        const { codigo_amostra } = data;

        if (this.analisys(data)) {
            return { codigo_amostra, sample: true }
        }

        return { codigo_amostra, sample: false }
    }


    private analisys(data: IRequest): boolean {
        switch (true) {
            case data.cocaina >= 0.5
                && (data.benzoilecgonina < 0.05 || data.cocaetileno < 0.05 || data.norcocaina < 0.05):
                return true;
            case data.anfetamina >= 0.2:
                return true;
            case data.metanfetamina >= 0.2:
                return true;
            case data.mda >= 0.2:
                return true;
            case data.mdma >= 0.2:
                return true;
            case data.thc >= 0.05:
                return true;
            case data.morfina >= 0.2:
                return true;
            case data.codeina >= 0.02:
                return true;
            case data.heroina >= 0.02:
                return true;
            default:
                return false;
        }
    }
}