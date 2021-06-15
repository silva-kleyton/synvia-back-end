import Joi from "joi";

const authValidation = Joi.object({
    email: Joi.string().email().lowercase().required().messages({
        "string.empty": `email não pode estar vazio`,
        "any.required": `O campo email é obrigatório`
    }),
    password: Joi.string().min(6).messages({
        "string.min": `A senha deve possuir no minímo {#limit} digitos.`,
    })
});

export { authValidation };