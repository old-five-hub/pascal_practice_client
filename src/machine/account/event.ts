import { EnumAccountEventName } from './type';
import * as accountType from '@/typing/service/account';

export const loginAccount = (payload: accountType.AccountLoginRequest) => {
    return (
      { type: EnumAccountEventName.LOGIN, payload }
    )
  }