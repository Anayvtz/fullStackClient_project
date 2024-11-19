import Joi from "joi";
const stockSchema = {
    yarnId: Joi.string().hex().required(),
    quantity: Joi.number().required(),
    imageurl: Joi.string().min(2).max(1024).allow(),
    imagealt: Joi.string().min(2).max(256).required(),

};

export default stockSchema;