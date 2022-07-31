export interface BaseResponse {
    code: number;
    msg: string;
}

export type CommonResponse<T> = BaseResponse & {
    data: T
}

