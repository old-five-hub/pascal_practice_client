import * as account from './account';
import * as tag from './tag';
import * as question from './question';

class PascalPracticeService {
    public accountLogin!: (params: account.AccountLoginRequest) => account.AccountLoginResponse
    public accountInfo!: () => account.AccountLoginResponse
    public tagList!: () => tag.TagListResponse
    public questionList!: (params: question.QuestionListRequest) => question.QuestionListResponse
}

export default PascalPracticeService