import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MobileMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	// gap: ${({ theme }) => theme.spacing.small};
	// padding: ${({ theme }) => theme.spacing.small};
	background-color: ${({ theme }) => theme.colors.lightGray};
	position: absolute;
	top: 70px;
	left: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	z-index: 1000;
	animation: ${slideIn} 0.3s ease-out;

	@media (min-width: 768px) {
		display: none; /* Hide on desktop */
	}
`;

export const MobileMenuItem = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	padding: ${({ theme }) => theme.spacing.small}
		${({ theme }) => theme.spacing.xsMedium};
	border-radius: ${({ theme }) => theme.borderRadius.small};
	transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;

	&.active {
		background-color: ${({ theme }) => theme.colors.active};
		color: ${({ theme }) => theme.colors.lightText};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		color: ${({ theme }) => theme.colors.lightText};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.highlight};
		transform: scale(0.95);
	}
`;
