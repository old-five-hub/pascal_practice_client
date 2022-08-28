import { FC, useMemo } from 'react';
import { useRequest } from 'ahooks';
import { questionComments } from '@/state/question';
import { CoverntCommentList } from './utils';
import CommentItem from './CommentItem';

type Props = {
  id: number;
};

const QuestionComments: FC<Props> = ({ id }) => {
  const { loading, data } = useRequest(() =>
    questionComments({ questionId: id })
  );

  const comments = useMemo(() => {
    return CoverntCommentList(data?.comments || []);
  }, [data]);

  return (
    <div className="mt-32 p-8 border border-slate-400 rounded-md">
      <div className="font-bold text-base ">
        评论（{data?.comments.length || 0}）
      </div>
      {comments.map((i) => (
        <CommentItem key={i.id} data={i} />
      ))}
    </div>
  );
};

export default QuestionComments;
