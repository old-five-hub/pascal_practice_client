import { Button, Avatar } from '@arco-design/web-react';
import { useRecoilState } from 'recoil';
import { accountState, loginModalVisibleState } from '@/state/account';
import { useMount, useRequest } from 'ahooks';
import { getAccountInfo } from '@/state/account';
import Cookies from 'js-cookie';

const UserInfo = () => {
  const { runAsync } = useRequest(getAccountInfo, {
    manual: true,
  });
  const [account, setAccountInfo] = useRecoilState(accountState);
  const [_, setVisible] = useRecoilState(loginModalVisibleState);

  const openLoginModal = () => {
    setVisible(true);
  };

  useMount(async () => {
    const token = Cookies.get('access-token');
    if (token) {
      const res = await runAsync();
      setAccountInfo(res);
    }
  });

  if (!account) {
    return (
      <div>
        <Button onClick={openLoginModal}>登录</Button>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Avatar shape="square">
        <img alt="avatar" src={account.avatar} />
      </Avatar>
      <div className="ml-2 font-bold text-base">{account.nickname}</div>
    </div>
  );
};

export default UserInfo;
