import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const SubHeaderText = styled.p`
	color: ${({ theme }) => theme.colors.font.white};
`;

export const TechStackHeader = styled.h2`
	padding-top: ${({ theme }) => theme.spacing.lg};
	margin: 0;
	text-align: left;
`;

export const SubAboutText = styled.span`
	padding-top: ${({ theme }) => theme.spacing.xxxs};
	word-wrap: break-word;
	word-break: keep-all;
	overflow-wrap: break-word;
	max-width: 490px;
	color: ${({ theme }) => theme.colors.font.white};
`;
