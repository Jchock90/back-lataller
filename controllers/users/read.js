import User from '../../models/User.js'

export default async (req, res, next) =>{
    try {
    
        let allUsers = await User.find()

        if (allUsers.length > 0) {
            return res.status(200).json({
                succes: true,
                message: 'users found',
                response: allUsers
            })
        } else{
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error);
    }
}