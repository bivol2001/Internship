import axios, { AxiosBasicCredentials } from "axios";
import { userInterface } from "../page/RegisterPage";
import { userLoginInterface } from "../page/LoginPage";
import { forgoutPasswordInterface } from "../page/ForgotPassword";

export const newUser = ({ email, password }: userInterface) => {
  return axios
    .post("https://reqres.in/api/register", { email, password })
    .then((response) => {
      console.log("Registration successful", response.data);
    })
    .catch((error) => {
      alert("Registration error");
      throw error;
    });
};

export const login = ({ username, password }: userLoginInterface) => {
  return axios
    .post("https://reqres.in/api/login", { username, password })
    .then((response) => response.data)
    .catch((error) => {
      alert("error");
      throw error;
    });
};

export const forgot = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.patch("https://reqres.in/api/users/2", {
      username,
      password,
    });
    console.log("User updated", response.data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
