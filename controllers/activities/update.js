import Activity from '../../models/Activity.js';

export default async(req, res, next) => {
    try {
        let updatedActivity = await Activity.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true}
        ).select('name')
        res.status(200).json({
            success: true,
            message: 'activity updated',
            response: updatedActivity
        })
    } catch (error) {
        next(error)
    }
}