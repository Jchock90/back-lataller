import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(30).messages({
        'string.min': "mail must have at least 8 characters please!",
        "string.max": "mail must be less than 21 characters please!",
        "any.required": "mail is required", //para cuando NO se envía el dato
        "string.empty": "mail is required"  //para cuando se envía VACÍO
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters please!",
        "string.max": "password must be less than 21 characters please!",
        "any.required": "password is required", //para cuando NO se envía el dato
        "string.empty": "password is required"  //para cuando se envía VACÍO
    }),
})

export default signinSchema