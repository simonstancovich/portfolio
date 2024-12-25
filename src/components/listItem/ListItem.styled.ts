import styled from 'styled-components';

export const Wrapper = styled.li`
	margin-bottom: 12px;
	font-size: ${({ theme }) => theme.sizes.fontSize};
	line-height: 1.6;

	a {
		color: ${({ theme }) => theme.colors.accent};
		text-decoration: none;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		&:hover {
			text-decoration: underline;
		}
	}
`;
