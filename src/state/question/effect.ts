import { request } from '@/api/request';
import * as question from '@/typing/service/question'

export const getTagList = async () => {
    const res = await request({
        method: 'tagList',
    })
    if (res.ok) {
        return res.val
    }
    return Promise.reject(res.msg);
}

export const getQuestionList = async (payload: question.QuestionListRequest) => {
    const res = await request({
        method: 'questionList',
        payload
    })
    if (res.ok) {
        return res.val
    }
    return Promise.reject(res.msg);
}