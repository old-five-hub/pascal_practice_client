import { request } from '@/api/request';
import * as question from '@/typing/service/question';
import * as like from '@/typing/service/like';
import * as comment from '@/typing/service/comment';

export const getTagList = async () => {
  const res = await request({
    method: 'tagList',
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const getQuestionList = async (
  payload: question.QuestionListRequest
) => {
  const res = await request({
    method: 'questionList',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const getQuestionInfo = async (
  payload: question.QuestionInfoRequest
) => {
  const res = await request({
    method: 'questionInfo',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const updateLike = async (payload: like.UpdateLikeRequest) => {
  const res = await request({
    method: 'updateLike',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const questionComments = async (
  payload: comment.QuestionCommentRequest
) => {
  const res = await request({
    method: 'questionComments',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};
