import { CommonResponse } from './common';
import * as account from './account'

class PascalPracticeService {
    public accountLogin!: (params: account.AccountLoginRequest) => CommonResponse<account.AccountInfo>;
    public accountInfo!: () => CommonResponse<account.AccountInfo>
}

export default PascalPracticeService