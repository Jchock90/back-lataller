 import City from '../../models/City.js';

 export default async (req, res, next) => {
    try {
        let deletedCity = await City.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'city deleted',
            response: deletedCity.city
        })   
    } catch (error) {
        next(error);
    }
 }