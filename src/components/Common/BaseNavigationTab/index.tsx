import { useMemo, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;

type Props = {
  tabs: { key: string; title: string; active?: (path: string) => boolean }[];
};

const BaseNavigationTab: FC<Props> = ({ tabs }) => {
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

export default BaseNavigationTab;
