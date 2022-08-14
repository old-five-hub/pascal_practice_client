import { CommonResponse } from './common';

export interface AccountLoginRequest {
  username: string;
  password: string;
}

export interface AccountInfo {
  nickname: string;
  avatar: string;
  follow: number;
}

export type AccountLoginResponse = CommonResponse<AccountInfo>;
