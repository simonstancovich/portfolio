import { navigationLinks } from '../../../../config/navigation';
import { MobileMenuItem, MobileMenuWrapper } from './MobileNavBar.styled';

interface MobileNavBarProps {
	mobileMenuOpen: boolean;
	onToggle: () => void;
}

export const MobileNavBar: React.FC<MobileNavBarProps> = ({
	mobileMenuOpen,
	onToggle,
}) => {
	if (!mobileMenuOpen) return null;
	return (
		<MobileMenuWrapper>
			{navigationLinks.map((link) => (
				<MobileMenuItem
					key={link.path}
					to={link.path}
					onClick={onToggle}
				>
					{link.label}
				</MobileMenuItem>
			))}
		</MobileMenuWrapper>
	);
};
