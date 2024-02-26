import 'dotenv/config.js'
import {connect} from 'mongoose';
import User from '../User.js'

const users = [{
    name: "Jesús",
    lastName: "Mansilla",
    mail: "jesus@qv.com",
    photo: "https://cdn.pixabay.com/photo/2018/03/06/20/45/the-flower-more-beautiful-3204548_1280.jpg",
    password: "Hola1234",
    module: "Argentina"
},{
    name: "Jesica",
    lastName: "Orcellet",
    mail: "jesi@qv.com",
    photo: "https://cdn.pixabay.com/photo/2018/03/06/20/45/the-flower-more-beautiful-3204548_1280.jpg",
    password: "Hola1234",
    module: "Argentina"
}]

connect(process.env.LINK_DB)
    .then(()=>{
        User.insertMany(users)
        console.log('done!');
    })
    .catch(err=>console.log(err))