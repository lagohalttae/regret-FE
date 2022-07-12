import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinCalculation from './pages/CoinCalculation';
import CoinMain from './pages/CoinMain';
import CoinPrice from './pages/CoinPrice';
import Temp from './pages/Temp';

function Router(): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinMain />} />
        <Route path="/calculation" element={<CoinCalculation />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/price" element={<CoinPrice />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
