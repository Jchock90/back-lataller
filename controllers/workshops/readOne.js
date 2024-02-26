import Workshop from "../../models/Workshop.js";

export default async (req, res, next) => {
    try {
        let oneWorkshop = await Workshop
        .findById(req.params._id)
        .select('module workshop photo')

        if (oneWorkshop){
            return res.status(200).json({
                success: true,
                message: 'workshop found',
                response: oneWorkshop
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