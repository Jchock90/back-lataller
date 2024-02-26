import Workshop from '../../models/Workshop.js';

export default async (req, res, next) => {
    try {
        let allWorkshops = await Workshop
            .find({}, 'workshop photo module') 
            .sort({fundation: 1})
            .limit(12)
        let count = await Workshop.countDocuments()
       
        return res.status(200).json({
            succes:true,
            message: 'workshops to show in carousel',
            data: allWorkshops,
            count
        })
    } catch (error) {
        next(error)
    }
}