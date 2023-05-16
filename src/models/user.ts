export interface User {
  id: number;
  idRole: number;
  idGender: number;
  username: string;
  fullName: string;
  password: string;
  email: string;
  dateOfBith: string;
  phoneNumber: number;
  urlAvata: string;
}

export interface ChangePass {
  oldPass: string;
  newPass: string;
  reNewPass: string;
}

export interface Profile {
  idGender: number;
  username: string;
  fullname: string;
  email: string;
  DateOfBith: string;
  PhoneNumber: number;
  urlAvata: string;
}

export interface ProfileResponse {
  data: Profile;
}
