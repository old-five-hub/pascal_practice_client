import { Question } from '@/typing/service/question';
import { FC } from 'react';
import BaseTag from '@/components/Common/BaseTag';
import MarkDownEditor from '../MarkDownEditor';

type Props = {
  data: Question | undefined;
};

const QuestionBaseInfo: FC<Props> = ({ data }) => {
  return (
    <div className=" mb-4 p-8 border border-slate-400 rounded">
      <div className="title text-lg font-bold">{data?.name}</div>
      <div className="mt-4">
        {data?.tags.map((i) => (
          <BaseTag key={i.id} data={i}></BaseTag>
        ))}
      </div>
      <div className="mt-8">
        {data?.desc && (
          <MarkDownEditor markdown={data?.desc || ''} editable={false} />
        )}
      </div>
    </div>
  );
};

export default QuestionBaseInfo;
