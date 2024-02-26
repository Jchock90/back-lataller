import Workshop from '../../models/Workshop.js';

export default async (req, res, next) => {
    try {
        let newWorkshop = await Workshop.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'workshop created',
            response: newWorkshop._id
        })
    } catch (error) {
        next(error);
    }
}