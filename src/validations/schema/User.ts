import Joi from "joi";

const createUserValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required().messages({
        "string.empty": `email não pode estar vazio`,
        "any.required": `O campo email é obrigatório`
    }),
    password: Joi.string().required()
});

export { createUserValidation };