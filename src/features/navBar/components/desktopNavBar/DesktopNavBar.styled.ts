import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DesktopNavBarWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 10px;
`;

export const DesktopNavBarContainer = styled.div`
	display: flex;
	position: relative;
	max-width: fit-content;
	border-radius: ${({ theme }) => theme.borderRadius.xxl};
	background: ${({ theme }) => theme.colors.navBar.background};
	backdrop-filter: blur(17.5px);
`;

export const Slider = styled.div`
	position: absolute;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.navBar.active};
	border-radius: ${({ theme }) => theme.borderRadius.xxl};
	transition: left 0.3s ease, width 0.3s ease;
`;

export const DesktopNavBarItem = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.accent};
	padding: ${({ theme }) => theme.spacing.xxs}
		${({ theme }) => theme.spacing.xs};
	border-radius: ${({ theme }) => theme.borderRadius.xxl};
	transition: ${({ theme }) => theme.transitions.default};

	&.active {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		color: ${({ theme }) => theme.colors.font.white};
	}

	&:hover:not(.active) {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		color: ${({ theme }) => theme.colors.font.white};
		transform: ${({ theme }) => theme.scale.xsFull};
	}

	&:active {
		transform: ${({ theme }) => theme.scale.xsFull};
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
	}
`;
