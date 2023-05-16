import { Login, LoginResponse, Register } from "models";
import axiosClient from "./axiosClient";

const authApi = {
  login(value: Login): Promise<LoginResponse> {
    const url = "/login.php";
    return axiosClient.post(url, {
      username: value.username,
      password: value.password,
    });
  },

  register(value: Register): Promise<number> {
    const url = "/register.php";
    return axiosClient.post(url, {
      username: value.username,
      fullname: value.fullname,
      email: value.email,
      password: value.password,
      idGender: value.idGender,
      DateOfBirth: value.DateOfBirth,
      PhoneNumber: value.PhoneNumber,
      urlAvata: value.urlAvata,
    });
  },
};

export default authApi;
