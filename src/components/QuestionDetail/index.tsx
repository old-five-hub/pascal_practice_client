import { useRequest } from 'ahooks';
import { getQuestionInfo } from '@/state/question';
import { useParams } from 'react-router-dom';
import QuestionBaseInfo from './QuestionBaseInfo';
import QuestionDetailInfo from './QuestionDetailInfo';
import QuestionComments from './QuestionComments';

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useRequest(() => getQuestionInfo({ id: Number(id) }));

  return (
    <div>
      <QuestionBaseInfo data={data} />
      <QuestionDetailInfo data={data} />
      <QuestionComments id={Number(id)} />
    </div>
  );
};

export default QuestionDetail;
