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
}

export interface ChangePass {
  oldPass: string;
  newPass: string;
  reNewPass: string;
}
