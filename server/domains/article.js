import Joi from "joi";

export const article = Joi.object({
    articleId: Joi.id(),
    author: Joi.string(),
    content: Joi.string(),
    headline: Joi.string()
});