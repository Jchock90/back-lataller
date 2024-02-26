import 'dotenv/config.js';
import { connect } from 'mongoose';
import Workshop from '../Workshop.js';
import User from '../User.js';


const workshops = [{
    module: "Clínica",
    photo: "https://i0.wp.com/entremediosweb.com/wp-content/uploads/2019/09/cropped-o_1569338884.jpg?fit=1278%2C718&ssl=1",
    workshop: "de Blazer",
    featuredlocation: "Costura de prendas de punto en máquina",
    description: "En esta subcategoría, los participantes aprenderán a utilizar máquinas de coser de manera efectiva para crear prendas y proyectos de costura de forma más rápida y precisa.",
    smalldescription: "En esta subcategoría, los participantes aprenderán a utilizar máquinas de coser de manera efectiva para crear prendas y proyectos de costura de forma más rápida y precisa.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 2",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Patrones y diseño de moda",
    featuredlocation: "Diseño de patrones de alta costura",
    description: "Los asistentes se sumergirán en el mundo del diseño de moda, aprendiendo a crear y modificar patrones para confeccionar prendas únicas y personalizadas.",
    smalldescription: "Los asistentes se sumergirán en el mundo del diseño de moda, aprendiendo a crear y modificar patrones para confeccionar prendas únicas y personalizadas.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 3",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Reparación y ajuste de ropa",
    featuredlocation: "Restauración de ropa vintage",
    description: "Esta subcategoría se enfoca en las habilidades necesarias para reparar y ajustar prendas, desde coser un botón hasta modificar tallas de ropa existente.",
    smalldescription: "Esta subcategoría se enfoca en las habilidades necesarias para reparar y ajustar prendas, desde coser un botón hasta modificar tallas de ropa existente.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 4",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Bordado y aplicaciones",
    featuredlocation: "Bordado a mano",
    description: "Los participantes aprenderán técnicas de bordado para decorar prendas y crear diseños personalizados, así como aplicar adornos y detalles atractivos.",
    smalldescription: "Los participantes aprenderán técnicas de bordado para decorar prendas y crear diseños personalizados, así como aplicar adornos y detalles atractivos.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 5",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Confección de ropa infantil",
    featuredlocation: "Ropa de bebé hecha a medida",
    description: "Este taller se centra en la creación de ropa adorable y funcional para niños, cubriendo desde bodies para bebés hasta prendas para niños mayores.",
    smalldescription: "Este taller se centra en la creación de ropa adorable y funcional para niños, cubriendo desde bodies para bebés hasta prendas para niños mayores.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 6",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Técnicas de costura a mano",
    featuredlocation: "Técnicas de costura artesanal",
    description: "En esta subcategoría, los asistentes perfeccionarán las habilidades de costura a mano, incluyendo puntos básicos y avanzados para reparaciones y proyectos de costura detallados.",
    smalldescription: "En esta subcategoría, los asistentes perfeccionarán las habilidades de costura a mano, incluyendo puntos básicos y avanzados para reparaciones y proyectos de costura detallados.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 7",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Reciclaje de textiles",
    featuredlocation: "Upcycling de ropa usada",
    description: "Los participantes aprenderán a reutilizar y reciclar prendas y telas existentes para crear nuevas prendas y accesorios de moda sostenibles.",
    smalldescription: "Los participantes aprenderán a reutilizar y reciclar prendas y telas existentes para crear nuevas prendas y accesorios de moda sostenibles.",
    admin_id: "jesus@mh.com"
},{
    module: "Modulo 8",
    photo: "https://i.im.ge/2023/09/19/6HUHOp.ejemplo-taller-1.jpg",
    workshop: "Decoración y accesorios textiles",
    featuredlocation: "Creación de cortinas personalizadas",
    description: "En esta subcategoría, se explorarán técnicas de costura para crear decoraciones para el hogar, como cojines, cortinas y accesorios como bolsos y bufandas.",
    smalldescription: "En esta subcategoría, se explorarán técnicas de costura para crear decoraciones para el hogar, como cojines, cortinas y accesorios como bolsos y bufandas.",
    admin_id: "jesus@mh.com"
}]

async function createWorkshops(arrayWorkshops) {
    try {
        await connect(process.env.LINK_DB)
        for (let workshop of arrayWorkshops) {
            let user = await User.findOne( {mail:workshop.admin_id} )   //busco el usuario que conincida el mail del objeto
            let admin_id = await user._id                           //SOLO necesito el id de ese usuario
            workshop.admin_id = admin_id                                //reasigno el valor del admin_id de cada ciudad para cambiar el mail que viene por default POR LO QUE CORRESPONDE (QUE SERIA EL ID)
            await Workshop.create(workshop)
        }
        console.log('done!');
    } catch (error) {
        console.log(error);
    }
}

createWorkshops(workshops)