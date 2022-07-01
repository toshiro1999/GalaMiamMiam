import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family:  system-ui; 
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
