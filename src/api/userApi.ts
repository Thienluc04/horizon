import { ChangePass, User } from "models";
import axiosClient from "./axiosClient";

const userApi = {
  getProfile(id: number): Promise<User> {
    const url = "/auth/login";
    return axiosClient.post(url, {
      idUser: id,
    });
  },

  changePass(value: ChangePass): Promise<number> {
    const url = "/api/changepass";
    return axiosClient.post(url, {
      oldPass: value.oldPass,
      newPass: value.newPass,
      reNewPass: value.reNewPass,
    });
  },
};

export default userApi;
