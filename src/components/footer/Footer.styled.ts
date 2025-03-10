import styled from 'styled-components';

export const FooterContainer = styled.footer`
	max-width: 1130px;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xxs};
	padding: ${({ theme }) => theme.spacing.xs} 0;
	margin: 0 auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: ${({ theme }) => theme.spacing.xs};
	}
`;

export const SocialBox = styled.div`
	width: 100%;
	margin: 0 auto;

	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.font.white};

	border-radius: ${({ theme }) => theme.borderRadius.xxxl};

	padding: ${({ theme }) => theme.spacing.xs};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: ${({ theme }) => theme.spacing.xxs};
		border-radius: ${({ theme }) => theme.borderRadius.xl};
	}
`;

export const SocialBoxContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const FollowMeText = styled.span`
	font-size: ${({ theme }) => theme.sizes.font.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.font.teal};
`;

export const SocialLink = styled.a`
	margin-left: ${({ theme }) => theme.spacing.xs};
	color: ${({ theme }) => theme.colors.font.white};
	font-size: ${({ theme }) => theme.sizes.font.lg};
	transition: ${({ theme }) => theme.transitions.default};

	&:hover {
		color: ${({ theme }) => theme.colors.accent};
	}

	&:first-child {
		margin-left: 0;
	}
`;

export const CopyrightText = styled.span`
	align-self: flex-start;

	font-size: ${({ theme }) => theme.sizes.font.xs};
	color: ${({ theme }) => theme.colors.font.white};

	opacity: 0.8;
`;
