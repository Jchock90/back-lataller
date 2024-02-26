import Module from "../../models/Module.js";

export default async (req, res, next) => {
    try {
        let { id } = req.params
        let one = await Module.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: 'module deleted',
            response: one._id
        })
    } catch (error) {
        next(error)
    }
}