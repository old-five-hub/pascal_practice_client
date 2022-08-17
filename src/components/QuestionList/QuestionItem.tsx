import { FC } from 'react';
import { Question } from '@/typing/service/question';
import { List, Tag } from '@arco-design/web-react';
import BaseTag from '@/components/Common/BaseTag';

type Props = {
  data: Question;
  goQuestionDetail: () => void;
};

const QuestionItem: FC<Props> = ({ data, goQuestionDetail }) => {
  return (
    <List.Item>
      <div
        className="text-lg font-bold cursor-pointer hover:underline hover:text-sky-700"
        onClick={goQuestionDetail}
      >
        {data.name}
      </div>
      <div className="mt-2">
        {data.tags.map((i) => (
          <BaseTag key={i.id} data={i}></BaseTag>
        ))}
      </div>
    </List.Item>
  );
};

export default QuestionItem;
