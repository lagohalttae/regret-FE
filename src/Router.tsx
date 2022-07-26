import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage';

function Router(): any {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}
export default Router;
