import { createMachine, assign } from 'xstate';
import { Tag } from '@/typing/service/tag';
import { Request } from '@/api/request';

type tagState = {
    tags: Tag[]
}

async function getTags() {
    const res = await Request({
        method: 'getTags',
    })
    if (res.ok) {
        return res.val.lists;
    } 
    return [];
}

type TypeEventObject = {
    value: 'loading',
    context: tagState,
}

export const TagMachine = createMachine<tagState, any, TypeEventObject>({
    id: 'tag',
    initial: 'loading',
    context: {
        tags: [],
    },
    states: {
        loading: {
            invoke: {
                id: 'fetch-tags',
                src: getTags,
                onDone: {
                    actions: assign({
                        tags: (_, event) => event.data,
                    })
                }
            }
        }
    }
})