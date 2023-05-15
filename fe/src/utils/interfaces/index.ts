export interface IProduct {
  _id: String;
  title: String;
  price: number;
  imgList: { src: String }[];
  detail: String;
  quantity: Number;
}
export interface IStoreCategory {
  _id: String;
  title: String;
  description: String;
}

export interface IProductType {
  title: String;
  storeCategoryId: { type: String };
  storeCategory: { [key: string]: IStoreCategory };
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
  _id: string;
  imgs:{src:String}[];
  age:number;
  size:string;
  gender:string;
  health:string;
  location:string;
}

export interface ICard {
  userId: string,
  items: any[]
}
