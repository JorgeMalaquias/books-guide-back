import joi from "joi";

export const titleSchema = joi.object({
    name: joi.string().required(),
    imageUrl: joi.string().uri().required(),
    publisher: joi.string().required(),
    author: joi.string().required(),
    description: joi.string().required()
});