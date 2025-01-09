import styled from 'styled-components';

interface ContainerProps {
	align?: string;
	justify?: string;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: ${({ align }) => align};
	justify-content: ${({ justify }) => justify};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	gap: ${({ theme }) => theme.spacing.xs};
`;
