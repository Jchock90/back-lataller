import Module from "../../models/Module.js";

export default async (req, res, next) => {
    try {

        let oneModule = await Module
        .findById(req.params._id)
        .select('name price duration')

        if (oneModule){
            return res.status(200).json({
                success: true,
                message: 'module found',
                response: oneModule
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }    
    } catch (error) {
        next(error)
    }
}