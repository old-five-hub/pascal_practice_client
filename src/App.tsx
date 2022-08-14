import Router from './router';
import LoginModal from '@/components/LoginModal';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <LoginModal />
      <Router />
    </RecoilRoot>
  );
}

export default App;
