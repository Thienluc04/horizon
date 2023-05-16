import { ChangePass, Profile, ProfileResponse } from "models";
import axiosClient from "./axiosClient";

const userApi = {
  getProfile(username: string): Promise<ProfileResponse> {
    const url = "/getProfile.php";
    return axiosClient({
      method: "get",
      url,
      params: {
        username,
      },
    });
  },
  updateProfile(values: Profile): Promise<number> {
    const url = "/updateProfile.php";
    return axiosClient({
      method: "post",
      url,
      data: {
        username: values.username,
        fullname: values.fullname,
        email: values.email,
        idGender: values.idGender,
        DateOfBirth: values.DateOfBith,
        PhoneNumber: values.PhoneNumber,
        urlAvata: values.urlAvata,
      },
      headers: {
        "Content-Type": "application/json",
      },
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
