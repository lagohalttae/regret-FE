import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import CoinCalculation from './CoinCalculation';
import CoinMain from './CoinMain';
import CoinPrice from './CoinPrice';

function Main(): any {
  // const CustomControls : React.FC<ControlComponentsProps>= ({getCurrentSlideIndex }) => {
  //   const currentSlideIndex = getCurrentSlideIndex();
  //   const onClickMenu = useCallback((e) => {
  //     scrollToSlide(e.key - 1);
  //   }, []);
  return (
    <FullPage>
      <Slide>
        <CoinMain />
      </Slide>
      <Slide>
        <CoinPrice />
      </Slide>
      <Slide>
        <CoinCalculation />
      </Slide>
    </FullPage>
  );
}
export default Main;
