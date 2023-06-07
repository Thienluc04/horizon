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
  idStatusProductInput: number;
}
