import City from '../../models/City.js';

export default async (req, res, next) => {
    try {
        let allCities = await City
            .find({}, 'city photo country') 
            .sort({fundation: 1})
            .limit(12)
        let count = await City.countDocuments()
       
        return res.status(200).json({
            succes:true,
            message: 'cities to show in carousel',
            data: allCities,
            count
        })
    } catch (error) {
        next(error)
    }
}