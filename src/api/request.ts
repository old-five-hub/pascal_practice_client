
import mAxios from './mAxios';
import PascalPracticeService from '@/typing/service'
import { Arg0 } from '@/typing/helper/args';
import { fail, ok } from '@/utils/response';
import { RespCode } from '@/constant/request';

const PathMap: Partial<Record<keyof PascalPracticeService, string>> = {
    accountLogin: '/api/account/login',
    accountInfo: '/api/account/info',
    tagList: '/api/content/tag/list',
    questionList: '/api/content/question/list',
}

async function request<M extends keyof PascalPracticeService>(
    data: {
        method: M,
        payload?: Arg0<PascalPracticeService[M]>,
    }) {
    const { method, payload } = data;
    const url = PathMap[method]
    if (!url) {
        return fail(new Error(`Unexpected method name ${method}`));
    }
    type Response = Awaited<ReturnType<PascalPracticeService[M]>>
    const resp = await mAxios.post<Response>(url, payload)
    if (resp.data.code === RespCode.SUCCESS) {
        return ok(resp.data.data as Response['data'])
    }
    return fail(resp.data.msg)
}

export { request }