import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeLayout from '@/layout/HomeLayout';
import HomePage from '@/components/HomePage';
import QuestionList from '@/components/QuestionList';
import QuestionDetail from '@/components/QuestionDetail';
import AdminLayout from '@/layout/AdminLayout';
import QuestionManageList from '@/components/QuestionManage/QuestionManageList';
import TagManageList from '@/components/TagManage/TagList';

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
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/content">
            <Route
              path="/admin/content/question"
              element={<QuestionManageList />}
            ></Route>
            <Route
              path="/admin/content/tag"
              element={<TagManageList />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
