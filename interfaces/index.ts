import { products } from "utils";

export const url = "http://193.141.127.116/denaapi1/api/";
export const headers = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};

export interface Options {
  [key: string]: any;
}

export enum Pages {
  Home = "/",
}

// enum api and keys
export enum Api {
  SIGNUP = "http://193.141.127.116/denaapi1/api/Users/signup",
  LOGIN = "http://193.141.127.116/denaapi1/api/Users/login",
  CATEGORIES = "http://193.141.127.116/denaapi1/api/Categories",
  LOGOUT = "http://193.141.127.116/denaapi1/api/Users/logout",
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
