import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: ${({ theme }) => theme.transitions.default};
  }

  html, body {
    // padding: ${({ theme }) => theme.spacing.small};
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.gradients.main};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    // padding: 0 ${({ theme }) => theme.spacing.medium};
    font-size: ${({ theme }) => theme.sizes.fontSize};
  }

  input, textarea {
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: ${({ theme }) => theme.borderRadius.medium}; 
    border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} ${theme.colors.border}`};
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.fontSize};
    margin-bottom: ${({ theme }) => theme.spacing.medium}; 
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus {
    border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} ${theme.colors.accent}`};
  }

  button {
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) =>
	theme.spacing.medium};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonText};
    font-family: ${({ theme }) => theme.fonts.primary};
    border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} transparent`};
    transition: ${({ theme }) => theme.transitions.default};
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} ${theme.colors.primary}`};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.largeFont};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  h2 {
    font-size: ${({ theme }) => theme.sizes.smallFont};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

    @font-face {
    font-family: 'Raleway';
    src: url('/assets/fonts/raleway/Raleway-Regular.ttf') format('truetype');
    font-weight: 400; 
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/assets/fonts/Raleway-Italic.ttf') format('truetype');
    font-weight: 700; 
    font-style: normal;
  }
`;

export const ContentWrapper = styled.div`
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: transparent; /* Keep it transparent to let the body gradient show */
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.small};
`;
