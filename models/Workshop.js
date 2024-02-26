import {model, Schema, Types} from "mongoose";

let collection = 'workshops';

let schema = new Schema({
    module: {type: String, required: true},
    photo: {type:String, required: true},
    workshop: {type:String, required: true},
    featuredlocation: {type: String, default: 'edit'},
    description: {type: String, default: 'edit'},
    smalldescription: {type: String, default: 'edit'},
    admin_id:{type: Types.ObjectId, required:true, ref: 'users'}
}, {
    timestamps: true,
})

let Workshop = model(collection, schema);

export default Workshop;
