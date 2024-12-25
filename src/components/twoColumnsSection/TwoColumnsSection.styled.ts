import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start; /* Align items to the top */
	gap: ${({ theme }) => theme.spacing.medium};

	/* Ensure equal column widths */
	& > div {
		flex: 1; /* Allow columns to grow equally */
		min-width: 300px; /* Minimum width for each column */
	}

	/* Responsive stacking */
	@media (max-width: 768px) {
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing.small};
		& > div {
			width: 100%; /* Columns take full width on small screens */
		}
	}
`;
