import Home from './features/home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { PageWrapper } from './components';

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
