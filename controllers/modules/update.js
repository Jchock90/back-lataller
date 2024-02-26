import Module from "../../models/Module.js";

export default async (req, res, next) => {
    try {
        let { id } = req.params
        let data = req.body
        let one = await Module.findOneAndUpdate(
            { _id:id },
            data,
            { new:true }
        )
        if (one) {
            return res.status(200).json({
                succes: true,
                message: 'module found',
                response: one._id
            })
        } else {
            return res.status(200).json({
                succes: false,
                message: 'module not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}