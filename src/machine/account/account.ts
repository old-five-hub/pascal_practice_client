import { createMachine, assign } from 'xstate';
import * as accountType from '@/typing/service/account';
import { accountLogin } from './effect';
import { EnumAccountEventName } from './type';

type AccountState = {
    account: accountType.AccountInfo | null
    loginInfo: {
        username: string,
        password: string,
    }
}

type AccountNull = {
    account: null
}

type AccountSuccess = {
    account: accountType.AccountInfo
}

type EventObjects = {
    type: EnumAccountEventName.LOGIN,
  }

type TypeEventObject = {
    value: 'idle',
    context: AccountState & AccountNull,
} | {
    value: 'failure',
    context: AccountState & AccountNull
} | {
    value: 'login',
    context: AccountState & AccountNull
} | {
    value: 'success',
    context: AccountState & AccountSuccess
}


export const accountMachine = createMachine<AccountState, EventObjects, TypeEventObject>({
    id: 'account',
    initial: 'idle',
    context: {
        account: null,
        loginInfo: {
            username: '',
            password: '',
        }
    },
    states: {
        idle: {
            on: {
                [EnumAccountEventName.LOGIN]: 'login'
            }
        },
        login: {
            invoke: {
                id: 'account-login',
                src: (state) => accountLogin(state.loginInfo),
                onDone: {
                    target: 'success',
                    actions: assign({
                        account: (_, event) => event.data,
                    })
                },
                onError: 'failure'
            }
        },
        success: {},
        failure: {
            on: {
                [EnumAccountEventName.LOGIN]: 'login'
            }
        },
    }
})