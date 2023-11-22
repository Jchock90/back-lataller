import 'dotenv/config.js';
import { connect } from 'mongoose';
import City from '../City.js';
import User from '../User.js';


const cities = [{
    country: "Modulo 1",
    photo: "https://i0.wp.com/entremediosweb.com/wp-content/uploads/2019/09/cropped-o_1569338884.jpg?fit=1278%2C718&ssl=1",
    city: "Moldería y medidas",
    featuredlocation: "Costura de prendas de punto en máquina",
    description: "En esta subcategoría, los participantes aprenderán a utilizar máquinas de coser de manera efectiva para crear prendas y proyectos de costura de forma más rápida y precisa.",
    smalldescription: "En esta subcategoría, los participantes aprenderán a utilizar máquinas de coser de manera efectiva para crear prendas y proyectos de costura de forma más rápida y precisa.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 2",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Patrones y diseño de moda",
    featuredlocation: "Diseño de patrones de alta costura",
    description: "Los asistentes se sumergirán en el mundo del diseño de moda, aprendiendo a crear y modificar patrones para confeccionar prendas únicas y personalizadas.",
    smalldescription: "Los asistentes se sumergirán en el mundo del diseño de moda, aprendiendo a crear y modificar patrones para confeccionar prendas únicas y personalizadas.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 3",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Reparación y ajuste de ropa",
    featuredlocation: "Restauración de ropa vintage",
    description: "Esta subcategoría se enfoca en las habilidades necesarias para reparar y ajustar prendas, desde coser un botón hasta modificar tallas de ropa existente.",
    smalldescription: "Esta subcategoría se enfoca en las habilidades necesarias para reparar y ajustar prendas, desde coser un botón hasta modificar tallas de ropa existente.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 4",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Bordado y aplicaciones",
    featuredlocation: "Bordado a mano",
    description: "Los participantes aprenderán técnicas de bordado para decorar prendas y crear diseños personalizados, así como aplicar adornos y detalles atractivos.",
    smalldescription: "Los participantes aprenderán técnicas de bordado para decorar prendas y crear diseños personalizados, así como aplicar adornos y detalles atractivos.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 5",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Confección de ropa infantil",
    featuredlocation: "Ropa de bebé hecha a medida",
    description: "Este taller se centra en la creación de ropa adorable y funcional para niños, cubriendo desde bodies para bebés hasta prendas para niños mayores.",
    smalldescription: "Este taller se centra en la creación de ropa adorable y funcional para niños, cubriendo desde bodies para bebés hasta prendas para niños mayores.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 6",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Técnicas de costura a mano",
    featuredlocation: "Técnicas de costura artesanal",
    description: "En esta subcategoría, los asistentes perfeccionarán las habilidades de costura a mano, incluyendo puntos básicos y avanzados para reparaciones y proyectos de costura detallados.",
    smalldescription: "En esta subcategoría, los asistentes perfeccionarán las habilidades de costura a mano, incluyendo puntos básicos y avanzados para reparaciones y proyectos de costura detallados.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 7",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Reciclaje de textiles",
    featuredlocation: "Upcycling de ropa usada",
    description: "Los participantes aprenderán a reutilizar y reciclar prendas y telas existentes para crear nuevas prendas y accesorios de moda sostenibles.",
    smalldescription: "Los participantes aprenderán a reutilizar y reciclar prendas y telas existentes para crear nuevas prendas y accesorios de moda sostenibles.",
    admin_id: "jesus@mh.com"
},{
    country: "Modulo 8",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    city: "Decoración y accesorios textiles",
    featuredlocation: "Creación de cortinas personalizadas",
    description: "En esta subcategoría, se explorarán técnicas de costura para crear decoraciones para el hogar, como cojines, cortinas y accesorios como bolsos y bufandas.",
    smalldescription: "En esta subcategoría, se explorarán técnicas de costura para crear decoraciones para el hogar, como cojines, cortinas y accesorios como bolsos y bufandas.",
    admin_id: "jesus@mh.com"
}]

async function createCities(arrayCities) {
    try {
        await connect(process.env.LINK_DB)
        for (let city of arrayCities) {
            let user = await User.findOne( {mail:city.admin_id} )   //busco el usuario que conincida el mail del objeto
            let admin_id = await user._id                           //SOLO necesito el id de ese usuario
            city.admin_id = admin_id                                //reasigno el valor del admin_id de cada ciudad para cambiar el mail que viene por default POR LO QUE CORRESPONDE (QUE SERIA EL ID)
            await City.create(city)
        }
        console.log('done!');
    } catch (error) {
        console.log(error);
    }
}

createCities(cities)