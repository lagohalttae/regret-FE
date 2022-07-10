import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinCalculation from './pages/CoinCalculation';
import CoinMain from './pages/CoinMain';
import Temp from './pages/Temp';

function Router(): any {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<CoinMain />} />
        <Route path="/calculation" element={<CoinCalculation />} />
=======
        <Route path="/*" element={<CoinMain />} />
        <Route path="/temp" element={<Temp />} />
>>>>>>> bfab8f98a771781f5c958c98b6ff50d15401cd0f
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
