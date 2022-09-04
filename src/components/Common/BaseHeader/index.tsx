import { FC, PropsWithChildren } from 'react';
import { Avatar } from '@arco-design/web-react';
import UserInfo from './UserInfo';
import './index.scss';

const BaseHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-30 shadow-md flex items-center px-4 base-header relative z-10">
      <Avatar shape="square" className="mr-4">
        <img
          src="https://avatars.githubusercontent.com/u/28853627?s=400&u=6f72855d598441ac670d51036f72c4c75d4f123b&v=4"
          alt=""
        />
      </Avatar>
      <div className="flex-1">{children}</div>
      <UserInfo />
    </div>
  );
};

export default BaseHeader;
