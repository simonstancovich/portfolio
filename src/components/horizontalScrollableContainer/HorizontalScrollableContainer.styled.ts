import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 100%;
	overflow-x: scrollbar;
	overflow-y: hidden;
	white-space: nowrap;

	display: flex;
	gap: ${({ theme }) => theme.spacing.sm};

	-webkit-overflow-scrolling: touch;

	&::-webkit-scrollbar {
		height: 0px;
	}
	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.scrollBar.gray};
	}
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.scrollBar.lightGray};
		border-radius: ${({ theme }) => theme.spacing.xxxs};
	}
`;
