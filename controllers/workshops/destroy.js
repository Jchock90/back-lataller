 import Workshop from '../../models/Workshop.js';

 export default async (req, res, next) => {
    try {
        let deletedWorkshop = await Workshop.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'workshop deleted',
            response: deletedWorkshop.workshop
        })   
    } catch (error) {
        next(error);
    }
 }