import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeLayout from '@/layout/HomeLayout';
import HomePage from '@/components/HomePage';
import TopicList from '@/components/QuestionList';

export default () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route index element={<HomePage />} />
                <Route path="/question-list" element={<TopicList />} />
            </Route>
        </Routes>
    </BrowserRouter>
}