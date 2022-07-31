
import PascalPracticeServer from '../typing/service'

const PathMap: Partial<Record<keyof PascalPracticeServer, string>> = {
    getTags: '/app/v1/tags'
}

function Request<M extends keyof PascalPracticeServer>(params: {
    data: {
        method: M,
        payload: PascalPracticeServer[M],
    }
}) {

}