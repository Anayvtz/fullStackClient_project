import Joi from "joi";
const yarnSchema = {
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    yarnSize: Joi.number().required(),
    quantityInStock: Joi.number().required(),

    imageurl: Joi.string().min(2).max(1024).allow(),
    imagealt: Joi.string().min(2).max(256).required(),

    price: Joi.number().required(),

};

export default yarnSchema;