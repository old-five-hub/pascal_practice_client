import { CommonResponse } from './common';
import { Tag } from './tag';

export interface QuestionListRequest {
  tagIds: number[];
  page: number;
  limit: number;
}

export interface QuestionInfoRequest {
  id: number;
}

export type QuestionListResponse = CommonResponse<{
  list: Question[];
  limit: number;
  page: number;
  total: number;
  hasMore: boolean;
}>;

export type QuestionInfoResponse = CommonResponse<Question>;

export interface Question {
  id: number;
  name: string;
  hot: number;
  tags: Tag[];
  answer: string;
}
