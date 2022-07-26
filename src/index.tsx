import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { globalTheme } from './theme';

ReactDOM.render(
  // 애플리케이이션 내 잠재적인 문제를 알아내기 위한 도구.
  <React.StrictMode>
    {/* recoil 사용하기 위해 작성 */}
    <RecoilRoot>
      {/* theme 설정을 위해 작성 */}
      <ThemeProvider theme={globalTheme}>
        {/** 전역 스타일 적용을 위해 작성 */}
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
