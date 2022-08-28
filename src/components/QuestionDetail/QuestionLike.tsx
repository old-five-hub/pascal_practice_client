import { FC } from 'react';
import { Question } from '@/typing/service/question';
import { IconStar, IconStarFill } from '@arco-design/web-react/icon';
import useUserLike from '@/hooks/useUserlike';
import { LikeStatus, LikeType } from '@/typing/service/like';

type Props = {
  data: Question;
};

const QuestionLike: FC<Props> = ({ data }) => {
  const { updateUserLike, currLikeCount, liked } = useUserLike({
    likeCount: data.likeCount,
    likeStatus: data.liked ? LikeStatus.Liked : LikeStatus.UnLike,
    likeType: LikeType.Question,
    id: data.id,
  });

  return (
    <div className="flex mt-32 items-center justify-center">
      <div
        onClick={updateUserLike}
        className={[
          'h-50 w-50 border rounded-[50%] flex items-center justify-center flex-col cursor-pointer duration-300 hover:border-[#ffcd00] hover:border-4 hover:text-[#ffcd00] active:bg-[#ffcd00]',
          liked
            ? 'border-[#ffcd00] text-[#ffcd00] border-4 hover:border hover:border-inherit active:bg-white'
            : '',
        ].join(' ')}
      >
        {liked ? (
          <IconStarFill style={{ fontSize: '32px', color: '#ffcd00' }} />
        ) : (
          <IconStar style={{ fontSize: '32px' }} />
        )}
        <div>{currLikeCount}</div>
      </div>
    </div>
  );
};

export default QuestionLike;
