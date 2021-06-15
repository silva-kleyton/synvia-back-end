import mongoose, { Schema, Document } from 'mongoose';

export interface IToxicologicalSample extends Document {
    _id?: string;
    code: number;
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

const UserSchema = new Schema<IToxicologicalSample>({
    codigo_amostra: { type: String, required: true },
    cocaina: Number,
    anfetamina: Number,
    metanfetamina: Number,
    mda: Number,
    mdma: Number,
    thc: Number,
    morfina: Number,
    codeina: Number,
    heroina: Number,
    benzoilecgonina: Number,
    cocaetileno: Number,
    norcocaina: Number
}, {
    timestamps: true
});

export default mongoose.model<IToxicologicalSample>("ToxicologicalSample", UserSchema);