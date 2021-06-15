import Joi from "joi";

const toxicologicalAnalysisValidation = Joi.object({
    codigo_amostra: Joi.string().required().max(8).messages({
        "string.empty": `"codigo_amostra" não pode estar vazio`,
        "any.required": `O campo "codigo_amostra" é obrigatório`,
        "string.max": `O código deve possui noi máximo 8 caracteres`
    }),
    cocaina: Joi.number().required().messages({
        "string.empty": `atributo "cocaina" não pode estar vazio`,
        "any.required": `O campo "cocaina" é obrigatório`,
    }),
    anfetamina: Joi.number().required().messages({
        "string.empty": `atributo "anfetamina" não pode estar vazio`,
        "any.required": `O campo "anfetamina" é obrigatório`,
    }),
    metanfetamina: Joi.number().required().messages({
        "string.empty": `atributo "metanfetamina" não pode estar vazio`,
        "any.required": `O campo "metanfetamina" é obrigatório`,
    }),
    mda: Joi.number().required().messages({
        "string.empty": `atributo "mda" não pode estar vazio`,
        "any.required": `O campo "mda" é obrigatório`,
    }),
    mdma: Joi.number().required().messages({
        "string.empty": `atributo "mdma" não pode estar vazio`,
        "any.required": `O campo "mdma" é obrigatório`,
    }),
    thc: Joi.number().required().messages({
        "string.empty": `atributo "thc" não pode estar vazio`,
        "any.required": `O campo "thc" é obrigatório`,
    }),
    morfina: Joi.number().required().messages({
        "string.empty": `atributo "morfina" não pode estar vazio`,
        "any.required": `O campo "morfina" é obrigatório`,
    }),
    codeina: Joi.number().required().messages({
        "string.empty": `atributo "codeina" não pode estar vazio`,
        "any.required": `O campo "codeina" é obrigatório`,
    }),
    heroina: Joi.number().required().messages({
        "string.empty": `atributo "heroina" não pode estar vazio`,
        "any.required": `O campo "heroina" é obrigatório`,
    }),
    benzoilecgonina: Joi.number().required().messages({
        "string.empty": `atributo "benzoilecgonina" não pode estar vazio`,
        "any.required": `O campo "benzoilecgonina" é obrigatório`,
    }),
    cocaetileno: Joi.number().required().messages({
        "string.empty": `atributo "cocaetileno" não pode estar vazio`,
        "any.required": `O campo "cocaetileno" é obrigatório`,
    }),
    norcocaina: Joi.number().required().messages({
        "string.empty": `atributo "norcocaina" não pode estar vazio`,
        "any.required": `O campo "norcocaina" é obrigatório`,
    }),
});

export { toxicologicalAnalysisValidation }