import { FC, useMemo } from 'react';
import { useRequest } from 'ahooks';
import { questionComments, createComment } from '@/state/question';
import { CoverntCommentList } from './utils';
import CommentItem from './CommentItem';

type Props = {
  id: number;
};

const QuestionComments: FC<Props> = ({ id }) => {
  const { data, refresh: refreshFetchComment } = useRequest(() =>
    questionComments({ questionId: id })
  );

  const { loading: createCommentPending, runAsync: runCreateComment } =
    useRequest(createComment, {
      manual: true,
    });

  const comments = useMemo(() => {
    return CoverntCommentList(data?.comments || []);
  }, [data]);

  return (
    <div className="mt-32 p-8 border border-slate-400 rounded-md">
      <div className="font-bold text-base ">
        评论（{data?.comments.length || 0}）
      </div>
      {comments.map((i) => (
        <CommentItem
          key={i.id}
          data={i}
          createComment={runCreateComment}
          questionId={id}
          loading={createCommentPending}
          refreshFetchComment={refreshFetchComment}
        />
      ))}
    </div>
  );
};

export default QuestionComments;
