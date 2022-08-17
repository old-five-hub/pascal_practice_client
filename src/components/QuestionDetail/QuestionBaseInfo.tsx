import { Question } from '@/typing/service/question';
import { Tag } from '@arco-design/web-react';
import { FC } from 'react';
import BaseTag from '@/components/Common/BaseTag';

type Props = {
  data: Question | undefined;
};

const QuestionBaseInfo: FC<Props> = ({ data }) => {
  return (
    <div className="shadow mb-4 p-8 rounded">
      <div className="title text-lg font-bold">{data?.name}</div>
      <div className="mt-4">
        {data?.tags.map((i) => (
          <BaseTag key={i.id} data={i}></BaseTag>
        ))}
      </div>
    </div>
  );
};

export default QuestionBaseInfo;
