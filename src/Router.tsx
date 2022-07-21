import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function Router(): any {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default Router;
