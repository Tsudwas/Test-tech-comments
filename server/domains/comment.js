import Joi from "joi";

export const comment = Joi.object({
    commentId: Joi.id(),
    mediaId: Joi.id(),
    author: Joi.string(),
    comment: Joi.string(),
    replies: Joi.array().items(Joi.object({
        author: Joi.string(),
        text:  Joi.string()
    })),
    rating: Joi.number()
});