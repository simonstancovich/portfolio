import styled from 'styled-components';

export const Wrapper = styled.div`
	color: ${({ theme }) => theme.colors.teal};
	font-size: 20px;
	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: 500;
	word-wrap: break-word;
`;
