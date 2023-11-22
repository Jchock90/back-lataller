import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('name photo mail')
        return res.status(200).json({
            success: true,
            message: 'user updated',
            response: updatedUser
             })
        
    } catch (error) {
        next(error);
    }
}

