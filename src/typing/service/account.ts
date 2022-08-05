export interface AccountLoginRequest {
    username: string;
    password: string;
}

export interface AccountLoginResponse {
    token: string
}

export interface AccountInfo {
    nickname: string;
    avatar: string;
    follow: number
}