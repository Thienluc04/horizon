import { Login, LoginResponse, Register } from "models";
import axiosClient from "./axiosClient";

const authApi = {
  login(value: Login): Promise<LoginResponse> {
    const url = "/auth/login.php";
    return axiosClient.post(url, {
      email: value.email,
      password: value.password,
    });
  },

  register(value: Register): Promise<number> {
    const url = "/auth/register.php";
    return axiosClient.post(url, {
      username: value.username,
      fullName: value.fullName,
      email: value.email,
      password: value.password,
    });
  },
};

export default authApi;
