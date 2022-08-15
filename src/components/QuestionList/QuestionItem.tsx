import { FC } from 'react';
import { Question } from '@/typing/service/question';
import { List, Tag } from '@arco-design/web-react';

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
          <Tag key={i.id} color="cyan">
            {i.name}
          </Tag>
        ))}
      </div>
    </List.Item>
  );
};

export default QuestionItem;
