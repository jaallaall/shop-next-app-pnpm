import { Api } from "interfaces";
import { formData } from "utils";
import instance from "../fetchClient";

export const authenticate = async (body: {
  phone: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}) => {
  const { data } = await instance.post(Api.SignUp, {
    Phone: body.phone,
    Password: body.password,
    ConfirmPassword: body.confirmPassword,
    FirstName: body.firstName,
    LastName: body.lastName,
  });
  return data;
};
