import { IAnimal } from "./animal"
import { IProduct } from "./products"
import mongoose,{ Schema, model } from "mongoose";

export interface IItem{
    item: IAnimal | IProduct,
    count: number
}
export interface ICard {
    user_Id: {type:mongoose.Schema.Types.ObjectId},
    items: IItem[]
}

const cardSchema = new Schema({
   user_Id:{
   type:mongoose.Schema.Types.ObjectId,
   required:true,
   ref:"User"
   }
   
   });
   
   
   const Card = model("Card", cardSchema);
   
   export default Card;