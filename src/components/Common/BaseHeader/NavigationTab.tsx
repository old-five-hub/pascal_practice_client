import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;

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

const NavigationTab = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const activeTab = useMemo(() => {
    const { pathname } = location;
    return (
      tabs.find((i) => (i.active ? i.active(pathname) : pathname === i.key))
        ?.key ||
      tabs[0]?.key ||
      ''
    );
  }, [location.pathname]);

  const goPage = (path: string) => {
    navigation(path);
  };

  return (
    <Tabs onChange={goPage} activeTab={activeTab}>
      {tabs.map((i) => (
        <TabPane key={i.key} title={i.title} />
      ))}
    </Tabs>
  );
};

export default NavigationTab;
