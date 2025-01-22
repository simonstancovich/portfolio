import { createGlobalStyle } from 'styled-components';

export const FontFaces = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url('/assets/fonts/raleway/Raleway-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/assets/fonts/raleway/Raleway-Italic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

`;
