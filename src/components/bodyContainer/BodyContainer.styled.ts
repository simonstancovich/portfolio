import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.maxWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.spacing.large};
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: ${({ theme }) => theme.borderRadius.large};
	box-shadow: ${({ theme }) => theme.shadows.large};

	/* Allow flexibility for child layouts */
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.large};
`;
