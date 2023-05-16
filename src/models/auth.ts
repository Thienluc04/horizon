export interface Register {
  username: string;
  fullname: string;
  email: string;
  password: string;
  idGender: string;
  DateOfBirth: string;
  PhoneNumber: string;
  urlAvata: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface CurrentUser {
  idRole: number;
  username: string;
  urlAvata: string;
}

export interface LoginResponse {
  data: CurrentUser;
}

export interface RegisterResponse {
  data: number;
}
