import { FC } from 'react';
import { getTagList } from '@/state/question';
import { useRequest } from 'ahooks';
import { Tag, Badge } from '@arco-design/web-react';
import { HandleCheckTag } from './type';

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
          <Badge key={i.id} text={i.hot ? 'hot' : ''} offset={[-25, -2]}>
            <Tag
              key={i.id}
              color="arcoblue"
              checkable
              className="mr-12"
              onCheck={(checked) => handleCheckTag(checked, i.id)}
              size="large"
            >
              <img className="h-6 mr-2" src={i.icon} alt="" />
              {i.name}({i.count})
            </Tag>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default QuestionTabFilter;
