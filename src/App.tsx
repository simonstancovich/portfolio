import Home from './features/home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import PageWrapper from './components/pageWrapper/PageWrapper';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<PageWrapper>
				<Home />
			</PageWrapper>
		</ThemeProvider>
	);
}

export default App;
