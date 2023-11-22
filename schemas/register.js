import joi from "joi"



let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must have at least 3 characters please",
        'string.max':"name must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "name can not be empty",
        'any.required':"name is required"

    }),
    mail: joi.string().required().min(5).max(30).messages({
        'string.min': "mail must have at least 3 characters please",
        'string.max':"mail must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "mail can not be empty",
        'any.required':"mail is required"
    }),
    password: joi.string()
    .required()
    .min(6)
    .max(15)
    .messages({
        'string.min': "password must have at least 6 characters please",
        'string.max':"password must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "password can not be empty",
        'any.required':"password is required"
    }),
    country: joi.string().required().min(3).max(20).messages({
        'string.min': "country must have at least 3 characters please",
        'string.max':"country must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "country can not be empty",
        'any.required':"country is required"
    }),
    lastName: joi.string().min(3).max(20).empty('').messages({
        'string.min': "last name must have at least 3 characters please",
        'string.max':"last name must have less less than 20 characters or be equal to 20 characters please!"
    }),
    photo: joi.string().min(3).max(200).empty('').messages({
        'string.min': "photo must have at least 3 characters please",
        'string.max':"photo must have less less than 20 characters or be equal to 20 characters please!"
    })

})

export default registerSchema