import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Temp from './pages/Temp';

function Router(): any {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="temp" element={<Temp />} />
    </Routes>
  );
}
export default Router;
