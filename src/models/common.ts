export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface Response<T> {
  data: T;
  pagination: PaginationParams;
}

export interface ListParams {
  page: number;
  limit: number;
  idStatusProductInput?: number;

  keyWord?: string;
  nameTradeMarkInput?: string;
  nameCategoryInput?: string;
  nameCpuInput?: string;
  nameRamInput?: string;
  nameDiskInput?: string;
  nameVgaInput?: string;
  nameScreenInput?: string;
  nameColorInput?: string;
  nameOsInput?: string;

  idGender?: string;
  idRole?: string;
}

export interface OptionValues {
  optionId: string;
  categoryId: string;
  itemId: string;
  name: string;
}
