import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeLayout from '@/layout/HomeLayout';
import HomePage from '@/components/HomePage';
import QuestionList from '@/components/QuestionList';
import QuestionDetail from '@/components/QuestionDetail';
import MarkDownEditor from '@/components/MarkDownEditor';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/question">
            <Route path="/question/list" element={<QuestionList />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
          </Route>
          <Route path="/markdown" element={<MarkDownEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
