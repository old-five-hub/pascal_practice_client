import { FC, useRef, useEffect } from 'react';
import { Comment, Button, Avatar, Input } from '@arco-design/web-react';

type Props = {
  avatar: string;
  cancelRepty: () => void;
  createComment: (content: string) => void;
  loading: boolean;
};

const CommentRepty: FC<Props> = ({
  avatar,
  cancelRepty,
  createComment,
  loading,
}) => {
  const ref = useRef<{ dom: HTMLInputElement }>(null);

  const handleReptyClick = () => {
    if (!ref.current) {
      return;
    }
    createComment(ref.current.dom.value || '');
  };

  return (
    <Comment
      align="right"
      actions={[
        !loading && (
          <Button key="0" type="secondary" onClick={cancelRepty}>
            取消
          </Button>
        ),
        <Button
          key="1"
          type="primary"
          onClick={handleReptyClick}
          disabled={loading}
        >
          评论
        </Button>,
      ]}
      avatar={
        <Avatar>
          <img src={avatar} className="object-contain" />
        </Avatar>
      }
      content={
        <div>
          <Input.TextArea ref={ref} placeholder="Here is you content." />
        </div>
      }
    ></Comment>
  );
};

export default CommentRepty;
