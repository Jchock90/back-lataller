import {model, Schema, Types} from "mongoose";

let collection = 'cities';

let schema = new Schema({
    country: {type: String, required: true},
    photo: {type:String, required: true},
    city: {type:String, required: true},
    featuredlocation: {type: String, default: 'edit'},
    description: {type: String, default: 'edit'},
    smalldescription: {type: String, default: 'edit'},
    admin_id:{type: Types.ObjectId, required:true, ref: 'users'}
}, {
    timestamps: true,
})

let City = model(collection, schema);

export default City;
