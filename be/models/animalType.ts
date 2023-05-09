import mongoose, { Schema, SchemaType, model } from "mongoose";

export interface IAnimalType {
  title:String;

}

const animalTypeSchema = new Schema({
  title: {
  type: String,
  enum:["Dog", "Cat"],
  required: true
}
});


const animalType = model("AnimalType", animalTypeSchema);
export default animalType;