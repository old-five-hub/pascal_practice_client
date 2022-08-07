import { atom } from 'recoil';
import { AccountInfo } from '@/typing/service/account';

export * from './effect';

export const AccountState = atom<AccountInfo | null>({
    key: 'accountState',
    default: null
})

export const loginModalVisibleState = atom<boolean>({
    key: 'loginModalVisibleState',
    default: false
})
