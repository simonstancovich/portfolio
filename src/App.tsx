import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { ContentWrapper, GlobalStyle } from './styles/global';
import { images } from './assets/images';
import { NavBar } from './features/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <div>Welcome to the Home Page</div>;
const Experience = () => <div>This is the Experience Page</div>;
const Portfolio = () => <div>Here is the Portfolio Page</div>;
const Contact = () => <div>Get in Touch on the Contact Page</div>;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<NavBar />
				<ContentWrapper>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/experience' element={<Experience />} />
						<Route path='/portfolio' element={<Portfolio />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</ContentWrapper>
			</Router>
			<img src={images.tattoo} alt='Example' width={200} />
		</ThemeProvider>
	);
}

export default App;
