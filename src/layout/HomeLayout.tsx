import BaseHeader from '@/components/Common/BaseHeader';
import { Layout } from '@arco-design/web-react';
import { Outlet } from 'react-router';
import BaseNavigationTab from '@/components/Common/BaseNavigationTab';

const Header = Layout.Header;
const Content = Layout.Content;

const tabs = [
  {
    key: '/',
    title: '首页',
  },
  {
    key: '/question/list',
    title: '题库',
    active: (path: string) => {
      return path.indexOf('/question') > -1;
    },
  },
];

const HomeLayout = () => {
  return (
    <Layout className="h-full">
      <Header>
        <BaseHeader>
          <BaseNavigationTab tabs={tabs} />
        </BaseHeader>
      </Header>
      <Content className="w-[1200px] my-0 mx-auto p-10 overflow-y-auto">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default HomeLayout;
