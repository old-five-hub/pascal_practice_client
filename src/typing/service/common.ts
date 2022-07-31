export interface BaseResponse {
    code: number;
    msg: string;
}

export type Response<T> = BaseResponse & {
    data: T
}

