
import mAxios from './mAxios';
import PascalPracticeService from '@/typing/service'
import { fail, ok } from '@/utils/response';
import { RespCode } from '@/constant/request';

const PathMap: Partial<Record<keyof PascalPracticeService, string>> = {
    getTags: '/app/v1/tags'
}

async function Request<M extends keyof PascalPracticeService>(
    data: {
        method: M,
        payload?: PascalPracticeService[M],
    }) {
    const { method, payload } = data;
    const url = PathMap[method]
    if (!url) {
        return fail(new Error(`Unexpected method name ${method}`));
    }
    type Response = Awaited<ReturnType<PascalPracticeService[M]>>
    const resp = await mAxios.post<Response>(url, payload)
    if (resp.data.code === RespCode.SUCCESS) {
        return ok(resp.data.data)
    }
    return fail(resp.data.msg)
}

export { Request }