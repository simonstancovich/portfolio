import styled from 'styled-components';

export const CardContainer = styled.div`
	background-color: #111;
	border: 1px solid #333;
	border-radius: 8px;
	padding: 16px;
	min-width: 200px;
`;

export const CardTitle = styled.h3`
	margin: 0 0 16px 0;
	color: #fff;
	font-weight: 600;
`;

export const TechList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const TechItemWrapper = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 12px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const TechLabel = styled.span`
	margin-left: 12px;
	color: #ccc;
`;

export const IconWrapper = styled.div`
	svg {
		color: ${({ theme }) => theme.colors.accent};
		font-size: 24px;
	}
`;
