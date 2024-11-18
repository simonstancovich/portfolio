import { HeroButton, HeroWrapper } from './Home.styles';

const Home = () => {
	console.log('hi');
	return (
		<HeroWrapper>
			<h1>Hi! I'm Simon :)</h1>
			<p>Fullstack Developer | Problem Solver | Team Player</p>
			<HeroButton>View My Work</HeroButton>
		</HeroWrapper>
	);
};

export default Home;
