import styled from 'styled-components';

export const CardContainer = styled.div`
	background: ${({ theme }) => theme.colors.translucentWhite};
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: ${({ theme }) =>
		`${theme.borderWidth.thin} ${theme.borderStyle.solid} ${theme.colors.border.gray}`};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	padding: ${({ theme }) => theme.spacing.xs};
	min-width: 200px;
	color: ${({ theme }) => theme.colors.white};
`;

export const CardTitle = styled.h3`
	margin: ${({ theme }) => `0 0 ${theme.spacing.xs} 0`};
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const TechList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const TechItemWrapper = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: ${({ theme }) => theme.spacing.xs};

	&:last-child {
		margin-bottom: 0;
	}
`;

export const TechLabel = styled.span`
	margin-left: ${({ theme }) => theme.spacing.xs};
	color: #ccc;
	text-align: center;
`;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		color: ${({ theme }) => theme.colors.accent};
		font-size: ${({ theme }) => theme.sizes.font.xl};
	}
`;
