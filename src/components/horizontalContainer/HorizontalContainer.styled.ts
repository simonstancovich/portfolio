import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.medium};
	background: ${({ theme }) => theme.gradients.main};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	box-shadow: ${({ theme }) => theme.shadows.small};
	gap: ${({ theme }) => theme.spacing.small};

	& > * {
		margin: 0;
	}
`;
