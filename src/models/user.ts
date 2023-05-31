export interface User {
  idRole: string;
  idGender: string;
  username: string;
  fullname: string;
  password: string;
  email: string;
  DateOfBirth: string;
  PhoneNumber: string;
}

export interface ChangePass {
  username: string;
  oldPass: string;
  newPass: string;
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

export interface Gender {
  id: number;
  name: string;
}

export interface Role {
  id: number;
  name: string;
}
