import { HamburgerContainer } from './Hamburger.styled';

interface HamburgerProps {
	mobileMenuOpen: boolean;
	onToggle: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
	mobileMenuOpen,
	onToggle,
}) => {
	return (
		<HamburgerContainer onClick={onToggle} isOpen={mobileMenuOpen}>
			<span />
			<span />
			<span />
		</HamburgerContainer>
	);
};
