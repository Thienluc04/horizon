import { ChangePass, Profile, Response, User } from 'models';
import axiosClient from './axiosClient';

const userApi = {
  getProfile(username: string): Promise<Response<Profile>> {
    const url = '/getProfile.php';
    return axiosClient({
      method: 'get',
      url,
      params: {
        username,
      },
    });
  },
  updateProfile(values: Profile): Promise<number> {
    const url = '/updateProfile.php';
    return axiosClient({
      method: 'post',
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
        'Content-Type': 'application/json',
      },
    });
  },

  changePass(value: ChangePass): Promise<Response<number>> {
    const url = '/changepass.php';
    return axiosClient.post(url, {
      username: value.username,
      oldPass: value.oldPass,
      newPass: value.newPass,
    });
  },

  getUsers(): Promise<Response<User[]>> {
    const url = '/getUser.php';
    return axiosClient.get(url);
  },

  searchUser(value: string): Promise<Response<User[]>> {
    const url = '/searchUser.php';
    return axiosClient({
      method: 'post',
      url,
      data: {
        username: value,
        fullname: value,
      },
    });
  },
  getUserWithGender(idGender: string): Promise<Response<User[]>> {
    const url = '/getUserWithGender.php';
    return axiosClient.get(url, {
      params: {
        idGender,
      },
    });
  },
  getUserWithRole(idRole: string): Promise<Response<User[]>> {
    const url = '/getUserWithRole.php';
    return axiosClient.get(url, {
      params: {
        idRole,
      },
    });
  },
};

export default userApi;
