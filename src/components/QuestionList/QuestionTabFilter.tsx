import { FC } from 'react';
import { getTagList } from '@/state/question';
import { useRequest } from 'ahooks';
import { HandleCheckTag } from './type';
import BaseTag from '@/components/Common/BaseTag';

type Props = {
  handleCheckTag: HandleCheckTag;
};

const QuestionTabFilter: FC<Props> = ({ handleCheckTag }) => {
  const { data } = useRequest(getTagList);

  return (
    <div className="flex  p-8 border rounded items-center">
      <div className="label">题目标签：</div>
      <div className="flex-1">
        {data?.lists.map((i) => (
          <BaseTag
            key={i.id}
            data={i}
            handleCheckTag={handleCheckTag}
            showCount
            showHot
            showIcon
            size="large"
            className="mr-12"
            color="arcoblue"
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionTabFilter;
