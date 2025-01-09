import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontFaces } from './styles/fonts';
import { routes } from './routes';
import { Suspense } from 'react';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<FontFaces />
			<GlobalStyle />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						{routes.map((route) => {
							return (
								<Route
									path={route.path}
									element={route.element}
									key={route.path}
								>
									{route.children?.map((child) => (
										<Route
											key={child.path}
											path={child.path}
											element={child.element}
										/>
									))}
								</Route>
							);
						})}
					</Routes>
				</Suspense>
			</Router>
		</ThemeProvider>
	);
}

export default App;
