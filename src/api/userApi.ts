import { ChangePass, Profile, ProfileResponse, Response } from "models";
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

  changePass(value: ChangePass): Promise<Response<number>> {
    const url = "/changepass.php";
    return axiosClient.post(url, {
      username: value.username,
      oldPass: value.oldPass,
      newPass: value.newPass,
    });
  },
};

export default userApi;
