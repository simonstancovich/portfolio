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
    min-height:100%;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.gradients.main};
    font-family: ${({ theme }) => theme.fonts.primary};
    background-attachment: fixed;
    }
    
    body {
    color: ${({ theme }) => theme.colors.font.accent};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.sizes.font.md};
  }

  input, textarea {
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.md}; 
    border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} ${theme.colors.border.main}`};
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.font.md};
    margin-bottom: ${({ theme }) => theme.spacing.md}; 
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus {
    border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} ${theme.colors.accent}`};
  }

  button {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) =>
	theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
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
    color: ${({ theme }) => theme.colors.font.accent};
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.font.dxxl};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.sizes.font.xxl}; 
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.sizes.font.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.fonts.secondary};
	  color: ${({ theme }) => theme.colors.font.accent};

  }

  span {
  font-size: ${({ theme }) => theme.sizes.font.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 1.6;
  color: ${({ theme }) => theme.colors.font.white};
  }

  p{
    color: ${({ theme }) => theme.colors.font.white};
    font-family:${({ theme }) => theme.fonts.p};
    weight:${({ theme }) => theme.fontWeight.bold};
  }

`;

export const ContentWrapper = styled.div`
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	margin: 0 auto;
	padding: 0 ${({ theme }) => theme.spacing.md};
	background-color: transparent;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xs};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 0 ${({ theme }) => theme.spacing.xs};
	}
`;
