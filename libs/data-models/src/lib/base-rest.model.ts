export interface BaseRestModel<T> {
  meta: {
    code: any;
    error?: boolean;
    message?: any;
    count?: number;
    hasMore?: boolean;
    limit?: number;
    offset?: number;
  };
  data?: T;
}
