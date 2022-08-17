import { useRequest } from 'ahooks';
import { getQuestionInfo } from '@/state/question';
import { useParams } from 'react-router-dom';
import MarkDownEditor from '../MarkDownEditor';
import QuestionBaseInfo from './QuestionBaseInfo';

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useRequest(() =>
    getQuestionInfo({ id: Number(id) })
  );

  return (
    <div>
      <QuestionBaseInfo data={data} />
      {data?.answer && (
        <MarkDownEditor markdown={data.answer} editable={false} />
      )}
    </div>
  );
};

export default QuestionDetail;
