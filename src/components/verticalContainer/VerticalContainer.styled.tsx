import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing.large};
	background: ${({ theme }) => theme.gradients.main};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: ${({ theme }) => theme.transitions.default};

	& > *:not(:last-child) {
		margin-bottom: ${({ theme }) => theme.spacing.medium};
	}

	&:hover {
		background: ${({ theme }) => theme.gradients.hover};
		box-shadow: ${({ theme }) => theme.shadows.large};
		transform: translateY(-4px);
	}
`;
