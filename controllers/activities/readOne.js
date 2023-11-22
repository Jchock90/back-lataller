import Activity from '../../models/Activity.js';

export default async(req, res, next) => {
    try {
        let oneActivity = await Activity
        .findById(req.params._id)
        .select('name')

        if (oneActivity) {
            return res.status(200).json({
                succes: true,
                message: 'activity found',
                response: oneActivity
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