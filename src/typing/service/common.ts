export interface BaseResponse {
    code: number;
    msg: string;
}

export type CommonResponse<T> = BaseResponse & {
    data: T
}

export type Pagination = {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
}