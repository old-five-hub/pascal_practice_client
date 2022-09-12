import { request } from '@/api/request';
import * as question from '@/typing/service/question';
import * as like from '@/typing/service/like';
import * as comment from '@/typing/service/comment';
import * as tag from '@/typing/service/tag';

export const getTagList = async () => {
  const res = await request({
    method: 'tagList',
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const createTag = async (payload: tag.CreateTagRequest) => {
  const res = await request({
    method: 'createTag',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const updateTag = async (payload: tag.UpdateTagRequest) => {
  const res = await request({
    method: 'updateTag',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};

export const deleteTag = async (payload: tag.DeleteTagRequest) => {
  const res = await request({
    method: 'deleteTag',
    payload,
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

export const createComment = async (payload: comment.CreateCommentRequest) => {
  const res = await request({
    method: 'createComment',
    payload,
  });
  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};
