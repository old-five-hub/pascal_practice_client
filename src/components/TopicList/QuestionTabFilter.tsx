import { useMachine } from '@xstate/react';
import { TagMachine } from '@/machine/tag';
import { Button, Badge } from '@arco-design/web-react';

const QuestionTabFilter = () => {
    const [current, send] = useMachine(TagMachine)

    const { tags } = current.context;

    return <div>
        {
            tags.map(i => <Badge text={i.Hot ? ' hot' : ''} key={i.Id} dotStyle={{
                height: 16,
                fontSize: 14,
                lineHeight: "16px"
              }}
              ><Button  className="mr-8">
                    {i.Name}
                </Button></Badge>
            )
        }
    </div>
}

export default QuestionTabFilter;