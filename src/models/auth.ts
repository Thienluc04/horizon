export interface Register {
  username: string;
  fullname: string;
  email: string;
  password: string;
  idGender: string;
  idRole: string;
  DateOfBirth: string;
  PhoneNumber: string;
  urlAvata: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface CurrentUser {
  idRole: string;
  username: string;
  urlAvata: string;
}

export interface LoginResponse {
  data: CurrentUser;
}

export interface RegisterResponse {
  data: number;
}
