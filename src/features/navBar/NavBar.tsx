import { useState } from 'react';
import { MobileNavBar } from './components/mobileNavBar/MobileNavBar';
import { DesktopNavBar } from './components/desktopNavBar/DesktopNavBar';
import { Hamburger } from './components/hamburger/Hamburger';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	return (
		<>
			<DesktopNavBar />
			<Hamburger
				mobileMenuOpen={mobileMenuOpen}
				onToggle={toggleMobileMenu}
			/>
			{mobileMenuOpen && (
				<MobileNavBar mobileMenuOpen onToggle={toggleMobileMenu} />
			)}
		</>
	);
};
