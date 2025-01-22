import styled from 'styled-components';

export const Wrapper = styled.h2`
	background: ${({ theme }) => theme.gradients.background};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	display: inline-block;
	font-size: ${({ theme }) => theme.sizes.largeFont};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-align: center;
	line-height: 1.2;
`;
