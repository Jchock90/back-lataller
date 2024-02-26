import Module from '../../models/Module.js'

export default async (req,res,next)=> {
    try {
        let queries = {}
        if (req.query.workshop_id) {
            queries.workshop_id = req.query.workshop_id
        }
        let all = await Module
            .find(queries,'-__v -createdAt -updatedAt')
            .populate({
                path: "workshop_id",
                select: "workshop photo admin_id",
                populate: {
                    path: "admin_id",
                    select: "name photo"
                }
            })
        return res.status(200).json({
            success: true,
            message: 'modules found',
            response: all
        })
    } catch (error) {
        next(error)
    }
}