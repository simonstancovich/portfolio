import { navigationLinks } from '../../../../config/navigation';
import {
	DesktopNavBarContainer,
	DesktopNavBarItem,
	DesktopNavBarWrapper,
} from './DesktopNavBar.styled';

interface DesktopNavBarProps {}

export const DesktopNavBar: React.FC<DesktopNavBarProps> = () => {
	return (
		<DesktopNavBarWrapper>
			<DesktopNavBarContainer>
				{navigationLinks.map((link) => (
					<DesktopNavBarItem key={link.path} to={link.path}>
						{link.label}
					</DesktopNavBarItem>
				))}
			</DesktopNavBarContainer>
		</DesktopNavBarWrapper>
	);
};
