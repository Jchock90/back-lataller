import Module from '../../models/Module.js';

export default async (req, res, next) => {
    try {
        let data = req.body
        let newModule = await Module.create(data)
        return res.status(201).json({
            success: true,
            message: 'module created',
            response: newModule._id
        })
    } catch (error) {
        next(error);
    }
}  