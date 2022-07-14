import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CoinCalculation from './pages/CoinCalculation';
import CoinMain from './pages/CoinMain';
import Temp from './pages/Temp';

const Pagination = styled.div`
  &.fadeIn {
    animation: 1s fadeIn forwards;
  }
  /* 
  ${(props) =>
    props.className === 'fadeIn'
      ? `animation: 0.5s fadeIn forwards`
      : `animation: 0.5s fadeOut forwards`} */

  &.fadeOut {
    animation: 1s fadeOut forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(0px, -200px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, 200px);
      opacity: 0;
    }
  }
`;

function Router(): any {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);

  return (
    <Pagination
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<CoinMain />} />
        <Route path="/calculation" element={<CoinCalculation />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </Pagination>
  );
}
export default Router;
