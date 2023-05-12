export interface IProduct {
  _id: string;
  title: String;
  price: number;
  imgList: { src: String }[];
  detail: String;
  quantity: Number;
}
export interface Iblog {
  _id: string;
  title: string;
  imgList: string;
  description: string;
  publishedBy: string;
  date: Date;
}
export interface IAnimal {
  imgs:{src:String}[];
  age:number;
  size:string;
  gender:string;
  health:string;
  location:string;
  date:Date;
}