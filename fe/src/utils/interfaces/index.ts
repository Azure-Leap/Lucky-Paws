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
export interface IBlog {
  _id?: string;
  title: string;
  img: string;
  description: string;
  publishedBy: string;
  date?: Date;
}
export interface IAnimal {
  _id: string;
  imgs: { src: String }[];
  age: number;
  size: string;
  gender: string;
  health: string;
  location: string;
}

export interface ICart {
  user_Id: string;
  products: any[];
}
export interface ICardContext {
  addProductToShoppingCart: ICart;
  setProductToShoppingCart: React.Dispatch<React.SetStateAction<ICart>>;
}
export interface IFavAnimal {
  user_Id: string | null;
  animals: any[];
}
export interface IFavAnimalContext {
  addAnimal: IFavAnimal;
  setAddAnimal: React.Dispatch<React.SetStateAction<IFavAnimal>>;
}

export interface IUser {
  name: String;
  email: String;
  password: String;
}
