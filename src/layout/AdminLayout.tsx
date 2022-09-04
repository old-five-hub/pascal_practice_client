import BaseHeader from '@/components/Common/BaseHeader';
import { Layout, Menu } from '@arco-design/web-react';
import { Outlet } from 'react-router';
import BaseNavigationTab from '@/components/Common/BaseNavigationTab';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;
const MenuItem = Menu.Item;

const tabs = [
  {
    key: '/admin/content',
    title: '内容管理',
    active: (path: string) => {
      return path.indexOf('/admin/content') > -1;
    },
  },
  {
    key: '/admin/role',
    title: '权限管理',
    active: (path: string) => {
      return path.indexOf('/admin/role') > -1;
    },
  },
];

const menus = [
  {
    activeKey: '/admin/content',
    list: [
      {
        title: '问题管理',
        key: '/admin/content/question',
      },
      {
        title: '标签管理',
        key: '/admin/content/tag',
      },
    ],
  },
];

export const AdminLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuList = useMemo(() => {
    return menus.find((i) => pathname.indexOf(i.activeKey) > -1)?.list || [];
  }, [pathname]);

  const selectedKeys = useMemo(() => {
    return menuList
      .filter((i) => pathname.indexOf(i.key) > -1)
      .map((i) => i.key);
  }, [menuList, pathname]);

  const onClickMenuItem = (key: string) => {
    navigate(key);
  };

  return (
    <Layout className="h-full">
      <Header>
        <BaseHeader>
          <BaseNavigationTab tabs={tabs} />
        </BaseHeader>
      </Header>
      <Layout>
        <Sider>
          <Menu
            selectedKeys={selectedKeys}
            onClickMenuItem={onClickMenuItem}
            className="pt-8"
          >
            {menuList.map((i) => (
              <MenuItem key={i.key}>{i.title}</MenuItem>
            ))}
          </Menu>
        </Sider>
        <Content className="my-0 mx-auto p-10 overflow-y-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
