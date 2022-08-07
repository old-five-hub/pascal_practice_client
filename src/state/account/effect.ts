import { request } from '@/api/request';

import * as accountType from '@/typing/service/account';

export const accountLogin = async (payload: accountType.AccountLoginRequest) => {
    const res = await request({
        method: 'accountLogin',
        payload,
    })
    if (res.ok) {
        return res.val
    }
    return Promise.reject(res.msg);
}

export const getAccountInfo = async () => {
    const res = await request({
        method: 'accountInfo',
    })
    if (res.ok) {
        return res.val
    }
    return Promise.reject(res.msg);
}