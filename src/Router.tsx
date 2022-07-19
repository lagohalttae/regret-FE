// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
import CoinCalculation from './pages/CoinCalculation';
import CoinMain from './pages/CoinMain';
import CoinPrice from './pages/CoinPrice';
import ProductPage from './pages/ProductPage';
import Temp from './pages/Temp';

// const Pagination = styled.div`
//   &.fadeIn {
//     animation: 0.8s fadeIn forwards;
//   }
//   /*
//   ${(props) =>
//     props.className === 'fadeIn'
//       ? `animation: 0.5s fadeIn forwards`
//       : `animation: 0.5s fadeOut forwards`} */

//   &.fadeOut {
//     animation: 0.8s fadeOut forwards;
//   }

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translate(0px, -200px);
//     }
//     to {
//       opacity: 1;
//       transform: translate(0px, 0);
//     }
//   }

//   @keyframes fadeOut {
//     from {
//       opacity: 1;
//       transform: translate(0px, 0px);
//     }
//     to {
//       transform: translate(0px, 200px);
//       opacity: 0;
//     }
//   }
// `;

function Router(): any {
  // const location = useLocation();
  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransistionStage] = useState('fadeIn');

  // useEffect(() => {
  //   if (location !== displayLocation) setTransistionStage('fadeOut');
  // }, [location, displayLocation]);

  return (
    // <Pagination
    //   className={`${transitionStage}`}
    //   onAnimationEnd={() => {
    //     if (transitionStage === 'fadeOut') {
    //       setTransistionStage('fadeIn');
    //       setDisplayLocation(location);
    //     }
    //   }}
    // >
    <Routes>
      <Route path="/" element={<CoinMain />} />
      <Route path="/calculation" element={<CoinCalculation />} />
      <Route path="/temp" element={<Temp />} />
      <Route path="/price" element={<CoinPrice />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    // </Pagination>
  );
}
export default Router;
