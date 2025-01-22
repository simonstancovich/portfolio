import React, { useState, useEffect, useRef } from 'react';
import {
	DesktopNavBarWrapper,
	DesktopNavBarContainer,
	DesktopNavBarItem,
	Slider,
} from './DesktopNavBar.styled';

import { useLocation } from 'react-router-dom';
import { navigationLinks } from '../../../../config/navigation';

export const DesktopNavBar: React.FC = () => {
	const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
	const navRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation();

	useEffect(() => {
		const activeLink =
			navRef.current?.querySelector(`[data-active="true"]`);
		if (activeLink) {
			const target = activeLink.getBoundingClientRect();
			const container = navRef.current?.getBoundingClientRect();

			if (container) {
				setSliderStyle({
					left: target.left - container.left,
					width: target.width,
				});
			}
		}
	}, [location.pathname]);

	return (
		<DesktopNavBarWrapper>
			<DesktopNavBarContainer ref={navRef}>
				<Slider style={sliderStyle} />
				{navigationLinks.map((link) => (
					<DesktopNavBarItem
						key={link.path}
						to={link.path}
						data-active={location.pathname === link.path}
					>
						{link.label}
					</DesktopNavBarItem>
				))}
			</DesktopNavBarContainer>
		</DesktopNavBarWrapper>
	);
};
