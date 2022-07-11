import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinCalculation from './pages/CoinCalculation';
import CoinMain from './pages/CoinMain';
import Temp from './pages/Temp';

function Router(): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinMain />} />
        <Route path="/calculation" element={<CoinCalculation />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
