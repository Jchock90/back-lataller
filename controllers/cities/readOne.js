import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let oneCity = await City
        .findById(req.params._id)
        .select('country city photo')

        if (oneCity){
            return res.status(200).json({
                success: true,
                message: 'city found',
                response: oneCity
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