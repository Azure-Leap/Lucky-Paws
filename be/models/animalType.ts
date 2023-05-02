import mongoose, { Schema, SchemaType, model } from "mongoose";

export interface IAnimalType {
  title:String;
}

const animalTypeSchema = new Schema<IAnimalType>({
  title: {
  type: String,
  required: true,
}
});


const AnimalType = model("AnimalType", animalTypeSchema);
export default AnimalType;