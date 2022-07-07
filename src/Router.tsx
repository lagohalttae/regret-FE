import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinCalculation from './pages/CoinCalculation';
import CoinMain from './pages/CoinMain';

function Router(): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinMain />} />
        <Route path="/calculation" element={<CoinCalculation />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
