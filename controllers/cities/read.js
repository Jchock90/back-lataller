import City from '../../models/City.js';

export default async (req, res, next) => {
    try {
        let search = {}
        let order = {}
        
        if (req.query.admin_id){
            search.admin_id = req.query.admin_id
        }
        
        if (req.query.sort){
            order.city = req.query.sort
        }

        if (req.query.city){
            search.city = new RegExp(req.query.city, 'i')
        }

        let allCities = await City
            .find(search, 'country city photo smalldescription admin_id')
            .populate('admin_id', 'photo mail name -_id')
            .sort(order)
        
        if (allCities.length > 0){
            return res.status(200).json({
                succes: true,
                message: 'cities found',
                response: allCities
            })
        } else {
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