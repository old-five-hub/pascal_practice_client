import { FC } from 'react';
import { CommentListItem } from './utils';
import { Avatar, Comment } from '@arco-design/web-react';
import {
  IconMessage,
  IconHeartFill,
  IconHeart,
} from '@arco-design/web-react/icon';
import useUserlike from '@/hooks/useUserlike';
import { LikeStatus, LikeType } from '@/typing/service/like';
import { time2BeforeStr } from '@/utils/time';
import CommentRepty from './CommentRepty';
import { useToggle } from 'ahooks';
import { useRecoilState } from 'recoil';
import { accountState } from '@/state/account';
import { CreateCommentRequest } from '@/typing/service/comment';

type Props = {
  data: CommentListItem;
  isChild?: boolean;
  createComment: (payload: CreateCommentRequest) => void;
  questionId: number;
  loading: boolean;
  refreshFetchComment: () => void;
};

const CommentItem: FC<Props> = ({
  data,
  isChild = false,
  createComment,
  questionId,
  loading,
  refreshFetchComment,
}) => {
  const { currLikeCount, liked, updateUserLike } = useUserlike({
    likeCount: data.likeCount,
    likeStatus: data.liked ? LikeStatus.Liked : LikeStatus.UnLike,
    likeType: LikeType.Comment,
    id: data.id,
  });

  const [reptyInputOpen, { toggle: toggleReptyInputOpen }] = useToggle();

  const [account] = useRecoilState(accountState);

  const handleCreateComment = async (content: string) => {
    await createComment({
      content,
      parentId: data.id,
      questionId,
    });
    toggleReptyInputOpen();
    refreshFetchComment();
  };

  const actions = [
    <span
      className="cursor-pointer mr-4"
      key="heart"
      onClick={() => updateUserLike()}
    >
      <span className="mr-2">
        {liked ? <IconHeartFill style={{ color: '#f53f3f' }} /> : <IconHeart />}
      </span>
      {currLikeCount}
    </span>,
    <span
      className="cursor-pointer"
      key="reply"
      onClick={() => toggleReptyInputOpen()}
    >
      <IconMessage /> 评论
    </span>,
  ];

  return (
    <div className={['mt-8', isChild ? 'pl-12' : ''].join(' ')}>
      <Comment
        actions={actions}
        author={data.author.nickname}
        avatar={
          <Avatar>
            <img src={data.author.avatar} className="object-contain" />
          </Avatar>
        }
        content={<div>{data.content}</div>}
        datetime={time2BeforeStr(data.createAt)}
      >
        {reptyInputOpen && (
          <CommentRepty
            avatar={account?.avatar || ''}
            cancelRepty={toggleReptyInputOpen}
            createComment={handleCreateComment}
            loading={loading}
          />
        )}

        {data.children.map((i) => (
          <CommentItem
            key={i.id}
            data={i}
            createComment={createComment}
            questionId={questionId}
            loading={loading}
            refreshFetchComment={refreshFetchComment}
          />
        ))}
      </Comment>
    </div>
  );
};

export default CommentItem;
