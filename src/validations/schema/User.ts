import Joi from "joi";

const createUSer = Joi.object({
    email: Joi.string().email().lowercase().required().messages({
        "string.empty": `email não pode estar vazio`,
        "any.required": `O campo email é obrigatório`
    }),
    password: Joi.string().required()
});

export { createUSer };