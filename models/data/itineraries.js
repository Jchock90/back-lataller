import 'dotenv/config.js'
import { connect } from 'mongoose'
import City from '../City.js'
import Itinerary from '../Itinerary.js'

const itineraries = [{
    name: 'Tecnicas',
    city_id: 'Moldería y medidas',
    price: 1000,
    duration: 2,
    tags: ['#fibrastextiles ', '#medidasbasicas ', '#ejesdelcuerpo '],
    photo: 'https://res.cloudinary.com/isda/image/upload/c_fill,h_315,w_600/v1/carreras/71540870-c15c-41e9-9a2f-4ad3f760f585',
    comments:'https://latallerbucket.s3.us-east-2.amazonaws.com/prueba.pdf',
    audio:'https://latallerbucket.s3.us-east-2.amazonaws.com/prueba.mp3',
    textAudio: 'Audio: introducción al taller'
}]

async function createItineraries(arrayItineraries) {
    try {
        await connect(process.env.LINK_DB)
        for (let itinerary of arrayItineraries) {
            let city = await City.findOne({ city:itinerary.city_id })
            let city_id = await city._id
            itinerary.city_id = city_id
            await Itinerary.create(itinerary)
        }
        console.log('done!');
    } catch (error) {
        console.log(error);
    }
}

createItineraries(itineraries)