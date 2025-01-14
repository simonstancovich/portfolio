import { Footer } from '../components';
import { NavBar } from '../features/navBar';
import { ContentWrapper } from '../styles/global';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
	return (
		<>
			<NavBar />
			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
			<Footer />
		</>
	);
}
