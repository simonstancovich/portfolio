import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DesktopNavBarWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 10px;
`;

export const DesktopNavBarContainer = styled.div`
	display: flex;
	position: relative;
	max-width: fit-content;
	border-radius: ${({ theme }) => theme.borderRadius.xLarge};
	background: ${({ theme }) => theme.colors.navBarTranslucent};
	backdrop-filter: blur(17.5px);
`;

export const Slider = styled.div`
	position: absolute;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.active};
	border-radius: ${({ theme }) => theme.borderRadius.xLarge};
	transition: left 0.3s ease, width 0.3s ease;
`;

export const DesktopNavBarItem = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	padding: ${({ theme }) => theme.spacing.xsSmall}
		${({ theme }) => theme.spacing.small};
	border-radius: ${({ theme }) => theme.borderRadius.xLarge};
	transition: ${({ theme }) => theme.transitions.default};

	&.active {
		color: ${({ theme }) => theme.colors.lightText};
	}

	&:hover:not(.active) {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		color: ${({ theme }) => theme.colors.lightText};
		transform: ${({ theme }) => theme.scale.xsFull};
	}

	&:active {
		transform: ${({ theme }) => theme.scale.xsFull};
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
	}
`;
