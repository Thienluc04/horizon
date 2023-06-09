export interface Specifications {
  ID: string;
  idCategory: string;
  name: string;
}

export interface SpeInput {
  id?: string;
  name: string;
  idCategory: string;
}

export interface SpecificationsInput {
  IdCPUInput: string;
  IdRAMInput: string;
  IdDISKInput: string;
  IdVGAInput: string;
  IdSCREENInput: string;
  IdCOLORInput: string;
  IdOSInput: string;
}
