import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinMain from './pages/CoinMain';

function Router(): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CoinMain />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
