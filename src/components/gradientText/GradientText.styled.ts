import styled from 'styled-components';

export const Wrapper = styled.h2`
	background: linear-gradient(
		90deg,
		rgb(30, 224, 199) 0%,
		rgb(141, 63, 255) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	display: inline-block;
	font-size: ${({ theme }) => theme.sizes.largeFont}; /* Adjust font size */
	font-weight: ${({ theme }) =>
		theme.fontWeight.bold}; /* Adjust font weight */
	text-align: center;
	line-height: 1.2;
`;
