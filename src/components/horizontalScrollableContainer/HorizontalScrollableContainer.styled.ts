import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 100%;
	overflow-x: scrollbar;
	overflow-y: hidden;
	white-space: nowrap;

	display: flex;
	gap: 24px;

	-webkit-overflow-scrolling: touch;

	&::-webkit-scrollbar {
		height: 0px;
	}
	&::-webkit-scrollbar-track {
		background: #333;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}
`;
