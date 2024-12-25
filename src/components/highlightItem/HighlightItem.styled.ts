import styled from 'styled-components';

export const Wrapper = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.primary};
`;
