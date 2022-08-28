import { AccountInfo } from './account';
import { CommonResponse } from './common';

export interface Comment {
  id: number;
  content: string;
  author: AccountInfo;
  parentId: number;
  likeCount: number;
  liked: boolean;
}

export type QuestionCommentRequest = {
  questionId: number;
};

export type QuestionCommentsResponse = CommonResponse<{
  comments: Comment[];
}>;
