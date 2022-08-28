import { useState, useCallback, useMemo } from 'react';
import { updateLike } from '@/state/question/effect';
import { LikeStatus, LikeType } from '@/typing/service/like';
import { useRequest } from 'ahooks';

type Props = {
  likeType: LikeType;
  likeStatus: LikeStatus;
  id: number;
  likeCount: number;
};

const useUserLike = ({ likeType, likeStatus, id, likeCount }: Props) => {
  const [currLikeStatus, setCurrLikeStatus] = useState(likeStatus);
  const [currLikeCount, setLikeCount] = useState(likeCount);
  const [ready, setReady] = useState(false);

  const liked = useMemo(() => Boolean(currLikeStatus), [currLikeStatus]);

  const updateLikeCount = useCallback(() => {
    if (currLikeStatus === LikeStatus.Liked) {
      setLikeCount((count) => count + 1);
    } else {
      setLikeCount((count) => count - 1);
    }
  }, [currLikeStatus]);

  const { loading } = useRequest(
    () =>
      updateLike({
        likeType,
        likeStatus: currLikeStatus,
        typeId: id,
      }),
    {
      onSuccess: updateLikeCount,
      refreshDeps: [currLikeStatus],
      ready,
    }
  );

  const updateUserLike = () => {
    if (loading) return;
    setCurrLikeStatus((status) => {
      return status === LikeStatus.Liked ? LikeStatus.UnLike : LikeStatus.Liked;
    });
    setReady(true);
  };

  return {
    updateUserLike,
    currLikeCount,
    loading,
    liked,
  };
};

export default useUserLike;
