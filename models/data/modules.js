import 'dotenv/config.js'
import { connect } from 'mongoose'
import Workshop from '../Workshop.js'
import Module from '../Module.js'

const modules = [{
    name: 'Tecnicas',
    workshop_id: 'Moldería y medidas',
    price: 1000,
    duration: 2,
    tags: ['#fibrastextiles ', '#medidasbasicas ', '#ejesdelcuerpo '],
    photo: 'https://res.cloudinary.com/isda/image/upload/c_fill,h_315,w_600/v1/carreras/71540870-c15c-41e9-9a2f-4ad3f760f585',
    comments:'https://latallerbucket.s3.us-east-2.amazonaws.com/prueba.pdf',
    audio:'https://latallerbucket.s3.us-east-2.amazonaws.com/prueba.mp3',
    textAudio: 'Audio: introducción al taller'
}]

async function createModules(arrayModules) {
    try {
        await connect(process.env.LINK_DB)
        for (let module of arrayModules) {
            let workshop = await Workshop.findOne({ workshop:module.workshop_id })
            let workshop_id = await workshop._id
            module.workshop_id = workshop_id
            await Module.create(module)
        }
        console.log('done!');
    } catch (error) {
        console.log(error);
    }
}

createModules(modules)