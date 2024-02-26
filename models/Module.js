import { model,Schema,Types } from "mongoose";

let collection = "modules"
let schema = new Schema({
    name: { type:String,required:true },
    workshop_id: { type:Types.ObjectId,ref:'workshops',required:true },
    price: { type:Number,required:true },
    duration: { type:Number,required:true },
    tags: [{ type:String,required:true }],
    photo: { type:String,required:true },
    comments: { type:String,required:false},
    audio: { type:String,required:false},
    textAudio: { type:String,required:true}
},{
    timestamps: true
})

let Module = model(collection,schema)
export default Module