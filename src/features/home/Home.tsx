import { HeroButton, HeroWrapper } from './Home.styles';
import { BodyContainer } from '../../components/bodyContainer/BodyContainer';
import { Resume } from '../hero/Resume';

const Home = () => {
	console.log('hi');
	return (
		<>
			<HeroWrapper>
				<h1>Hi! I'm Simon :)</h1>
				<p>
					Fullstack Developer | Problem Solver | Bug hunter | Team
					Player
				</p>
				<HeroButton>View My Work</HeroButton>
			</HeroWrapper>
			<BodyContainer>
				<Resume />
			</BodyContainer>
		</>
	);
};

export default Home;
