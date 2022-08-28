import { FC } from 'react';
import { Question } from '@/typing/service/question';
import MarkDownEditor from '../MarkDownEditor';
import QuestionLike from './QuestionLike';

type Props = {
  data: Question | undefined;
};

const QuestionDetailInfo: FC<Props> = ({ data }) => {
  return (
    <div className="p-8 mt-8 border border-slate-400 rounded-md">
      {data && <MarkDownEditor markdown={data.answer} editable={false} />}
      {data && <QuestionLike data={data} />}
    </div>
  );
};

export default QuestionDetailInfo;
