import BaseHeader from '@/components/Common/BaseHeader';
import { Layout } from '@arco-design/web-react';
import { Outlet } from 'react-router';

const Header = Layout.Header;
const Content = Layout.Content;


const HomeLayout = () => {
    return <Layout className="h-full">
        <Header>
            <BaseHeader />
        </Header>
        <Content className="w-[1200px] my-0 mx-auto p-10 overflow-y-auto">
            <Outlet />
        </Content>
    </Layout>
}

export default HomeLayout;