import { products } from "utils";

export interface Options {
  [key: string]: any;
}

export enum Pages {
  Home = "/",
}

// enum api and keys
export enum Api {
  SignUp = "Users/signup",
}

export type PropsData = typeof products[0];

export interface TitleType {
  size: string;
  type: string;
  unit: string;
  detail: string;
  price: string;
  sale: string;
  totalPrice: string;
}
