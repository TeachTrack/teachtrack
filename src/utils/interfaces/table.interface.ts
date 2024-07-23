export interface IRequestParam {
  limit: number;
  page: number;
  search?: string;
}

export interface ITableResponse<t> {
  totalData: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  data: t;
}
