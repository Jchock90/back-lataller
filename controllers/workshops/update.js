 import Workshop from "../../models/Workshop.js";

 export default async (req, res, next) => {
    try {
        let updatedWorkshop = await Workshop.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('module workshop smalldescription description')
        return res.status(200).json({
            success: true,
            message: 'workshop updated',
            response: updatedWorkshop
        })
    } catch (error) {
        next(error);
    }
 }