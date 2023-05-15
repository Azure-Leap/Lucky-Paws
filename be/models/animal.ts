import mongoose, { Schema, SchemaType, model } from "mongoose";
import {IAnimalType} from "./animalType"
interface IAnimal {
  name:String;
  imgs:[{src:String}];
  age:number;
  size:string;
  gender:string;
  health:string;
  location:string;
  date:Date;
  publishedBy:{type:mongoose.Schema.Types.ObjectId},
  animalTypeId:{type: mongoose.Schema.Types.ObjectId},
  animaltype:{[key:string]:IAnimalType}
}

const animalSchema = new Schema({
 name:{
    type:String,
    required:true,
  },
imgs: [{
    src: {type:String, required:true}
  }],
age:{type:Number,
required:true},
size:{
type:String,
required:true,
},
gender:{
    type:String,
    enum:["Female","Male"],

},
health:{
type:String,
required:true,
},
location:{
    type:String,
    required:true,
},
publishedBy:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:"User"
},
date:{
    type: Date,
    default: Date.now, 
    required: true,
},
animaltype:{
  type:mongoose.Schema.Types.ObjectId,
  required:true,
  ref:"AnimalType"
  },

});


const Animal = model("Animal", animalSchema);

export default Animal;