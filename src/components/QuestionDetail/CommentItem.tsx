import { FC } from 'react';
import { CommentListItem } from './utils';
import { Avatar } from '@arco-design/web-react';
import {
  IconThumbUp,
  IconThumbUpFill,
  IconMessage,
} from '@arco-design/web-react/icon';
import useUserlike from '@/hooks/useUserlike';
import { LikeStatus, LikeType } from '@/typing/service/like';

type Props = {
  data: CommentListItem;
};

const CommentItem: FC<Props> = ({ data }) => {
  const { currLikeCount, liked, updateUserLike } = useUserlike({
    likeCount: data.likeCount,
    likeStatus: data.liked ? LikeStatus.Liked : LikeStatus.UnLike,
    likeType: LikeType.Comment,
    id: data.id,
  });

  return (
    <div className="flex mt-8">
      <Avatar>
        <img src={data.author.avatar} className="object-contain" />
      </Avatar>
      <div className="flex-1 ml-8">
        <div className="font-bold text-sm pt-2">{data.author.nickname}</div>
        <div className="mt-2">{data.content}</div>
        <div className="mt-2 flex items-center">
          <div className="cursor-pointer" onClick={updateUserLike}>
            {liked ? (
              <IconThumbUpFill style={{ color: '#3955f6' }} />
            ) : (
              <IconThumbUp />
            )}
            <span className="ml-2 text-xs from-neutral-300">
              {currLikeCount ? currLikeCount : '点赞'}
            </span>
          </div>
          <div className="cursor-pointer ml-8">
            <IconMessage />
            <span className="ml-2 text-xs from-neutral-300">
              {data.children.length ? data.children.length : '评论'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
