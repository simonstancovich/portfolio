import styled from 'styled-components';

export const Wrapper = styled.h2`
	font-size: 1.8rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;
