import styled from 'styled-components';

export const Wrapper = styled.div`
	color: ${({ theme }) => theme.colors.text.teal};
	font-size: ${({ theme }) => theme.sizes.lg};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: font-weight: ${({ theme }) => theme.fontWeight.medium};
	overflow-wrap: break-word;
	word-wrap: break-word;
`;
