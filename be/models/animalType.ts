import mongoose, { Schema, SchemaType, model } from "mongoose";

export interface IAnimalType {
  title:String;
  img:String;
  detail:String;
}

const animalTypeSchema = new Schema<IAnimalType>({
  title: {
  type: String,
  required: true,
},
img: {
  type: String,
  required: true,
},
detail: {
  type: String,
  required: true
},
});


const AnimalType = model("Blog", animalTypeSchema);

export default AnimalType;