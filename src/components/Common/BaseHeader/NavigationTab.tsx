import { useNavigate } from 'react-router-dom';
import { Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;

const tabs = [
    {
        key: '/',
        title: '首页',
    },
    {
        key: '/question-list',
        title: '题库',
    },
]

const NavigationTab = () => {
    const navigation = useNavigate();

    const goPage = (path: string) => {
        navigation(path);
    }

    return <Tabs onChange={goPage}>
        {
            tabs.map(
                i => <TabPane key={i.key} title={i.title} />
            )
        }
    </Tabs>
}

export default NavigationTab;