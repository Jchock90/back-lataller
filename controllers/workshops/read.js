import Workshop from '../../models/Workshop.js';

export default async (req, res, next) => {
    try {
        let search = {}
        let order = {}
        
        if (req.query.admin_id){
            search.admin_id = req.query.admin_id
        }
        
        if (req.query.sort){
            order.workshop = req.query.sort
        }

        if (req.query.workshop){
            search.workshop = new RegExp(req.query.workshop, 'i')
        }

        let allWorkshops = await Workshop
            .find(search, 'module workshop photo smalldescription admin_id')
            .populate('admin_id', 'photo mail name -_id')
            .sort(order)
        
        if (allWorkshops.length > 0){
            return res.status(200).json({
                succes: true,
                message: 'workshops found',
                response: allWorkshops
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