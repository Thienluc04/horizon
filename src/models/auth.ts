export interface Register {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  fullname: string;
}

export interface LoginResponse {
  data: CurrentUser;
}

export interface ChangePass {
  oldPass: string;
  newPass: string;
  reNewPass: string;
}
