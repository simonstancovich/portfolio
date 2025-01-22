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
	background-color: ${({ theme }) => theme.colors.navBar.mobileBackground};
	position: absolute;
	top: 80px;
	left: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: ${({ theme }) => theme.borderRadius.md};
	z-index: 1000;
	animation: ${slideIn} 0.3s ease-out;

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
	}
`;

export const MobileMenuItem = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.font.accent};
	padding: ${({ theme }) => theme.spacing.xs}
		${({ theme }) => theme.spacing.sm};
	border-radius: ${({ theme }) => theme.borderRadius.xs};
	transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;

	&.active {
		background-color: ${({ theme }) => theme.colors.navBar.active};
		color: ${({ theme }) => theme.colors.font.white};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		color: ${({ theme }) => theme.colors.font.white};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.highlight};
		transform: scale(0.95);
	}
`;
