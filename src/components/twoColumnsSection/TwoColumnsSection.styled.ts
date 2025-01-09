import styled from 'styled-components';

interface TwoColumnsSectionProps {
	justifyContent?: string;
	alignItems?: string;
	gap?: string;
}

export const Wrapper = styled.section<TwoColumnsSectionProps>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start; 
	gap: ${({ theme }) => theme.spacing.md};

	/* Ensure equal column widths */
	& > div {
		flex: 1;
		min-width: 300px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing.xs};
		& > div {
			width: 100%; 
	}
`;
