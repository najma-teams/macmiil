import Joi from "joi";


//making subcategory Create Schema

export const subCreateSchema = Joi.object({
    name : Joi.string().min(4).required(),
    description : Joi.string().min(7).optional(),
    catId : Joi.number().required() 
})

// export const proSchema = Joi.object({
//     name : Joi.string().min(4).message('waa inuu ka weynaada 4 xaraf').required(),
//     price : Joi.number().min(1).message('yuuna k ayaraan 1').required(),
//     // image : Joi.string().required(),
//     stock : Joi.number().min(1).message('yuuna k ayaraan 1').required(),
//     catId : Joi.number().required()
// })

//update Product

export const proupdateSchema = Joi.object({
    name : Joi.string().min(4).message('waa inuu ka weynaada 4 xaraf').optional(),
    price : Joi.number().min(1).message('yuuna ka yaraan 1').optional(),
    image : Joi.string().optional(),
    stock : Joi.number().min(1).message('yuuna ka yaraan 1').optional(),
})