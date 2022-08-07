import { stringify } from './seriallzer';

export interface ResponseOk<T> {
    val: T;
    code: 0;
    ok: true;
    msg: string;
}

export interface ResponseFail {
    val: null;
    code: number;
    ok: false;
    msg: string;
}

export type Response<T> = ResponseOk<T> | ResponseFail;

export function ok(): ResponseOk<null>
export function ok<T>(data: T): ResponseOk<T>
export function ok<T>(data?: T): ResponseOk<T> {
    return {
        val: data || (null as any),
        msg: 'ok',
        code: 0,
        ok: true
    }
}

export function fail(errorOrMsg: unknown, code?: number): ResponseFail {
    return {
        val: null,
        ok: false,
        msg: (errorOrMsg as Error)?.message || stringify(errorOrMsg),
        code: (errorOrMsg as {code?: number}).code || code || -1
    }
}