import * as tagType from '@/typing/service/tag';
import { FC } from 'react';
import { Badge, Tag } from '@arco-design/web-react';

type Props = {
  data: tagType.Tag;
  showCount?: boolean;
  handleCheckTag?: (checked: boolean, id: number) => void;
  showHot?: boolean;
  size?: 'small' | 'default' | 'medium' | 'large';
  className?: string;
  color?: string;
  showIcon?: boolean;
};

const BaseTag: FC<Props> = ({
  data,
  showCount = false,
  handleCheckTag,
  showHot = false,
  size = 'small',
  className = '',
  color = 'cyan',
  showIcon = false,
}) => {
  return (
    <Badge text={showHot && data.hot ? 'hot' : ''} offset={[-25, -2]}>
      <Tag
        color={color}
        checkable={Boolean(handleCheckTag)}
        className={className}
        size={size}
        onCheck={(checked) =>
          handleCheckTag && handleCheckTag(checked, data.id)
        }
      >
        {showIcon && <img className="h-6 mr-2" src={data.icon} alt="" />}
        {data.name}
        {showCount && `(${data.count})`}
      </Tag>
    </Badge>
  );
};

export default BaseTag;
