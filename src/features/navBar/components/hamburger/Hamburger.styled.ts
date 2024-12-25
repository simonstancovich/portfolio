import styled from 'styled-components';

export const HamburgerContainer = styled.div.withConfig({
	shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
	display: none;
	cursor: pointer;
	position: relative;
	width: 30px;
	height: 24px;

	span {
		display: block;
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: ${({ theme }) => theme.colors.text};
		border-radius: ${({ theme }) => theme.borderRadius.small};
		transition: ${({ theme }) => theme.transitions.default};

		&:nth-child(1) {
			top: ${({ isOpen }) => (isOpen ? '50%' : '0')};
			transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
		}

		&:nth-child(2) {
			top: 50%;
			opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
			transform: translateY(-50%);
		}

		&:nth-child(3) {
			bottom: ${({ isOpen }) => (isOpen ? '50%' : '0')};
			transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: block;
	}
`;
