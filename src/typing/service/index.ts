import * as common from './common';
import * as account from './account';
import * as tag from './tag';
import * as question from './question';
import * as like from './like';
import * as comment from './comment';

export default class PascalPracticeService {
  public accountLogin!: (
    params: account.AccountLoginRequest
  ) => account.AccountLoginResponse;
  public accountInfo!: () => account.AccountLoginResponse;
  public tagList!: () => tag.TagListResponse;
  public questionList!: (
    params: question.QuestionListRequest
  ) => question.QuestionListResponse;
  public questionInfo!: (
    params: question.QuestionInfoRequest
  ) => question.QuestionInfoResponse;
  public updateLike!: (
    params: like.UpdateLikeRequest
  ) => common.CommonResponse<null>;
  public questionComments!: (
    params: comment.QuestionCommentRequest
  ) => comment.QuestionCommentsResponse;
  public createComment!: (
    params: comment.CreateCommentRequest
  ) => common.CommonResponse<null>;
  public uploadFile!: (params: FormData) => common.CommonResponse<null>;
}
