import { Experience } from '../features/experience/Experience';
import Home from '../features/home/Home';
import { NotFound } from '../features/notFound/NotFound';
import { MainLayout } from '../layouts/MainLayout';

const Portfolio = () => <div>Here is the Portfolio Page</div>;
const Contact = () => <div>Get in Touch on the Contact Page</div>;

export const routes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/experience', element: <Experience /> },
			{ path: '/portfolio', element: <Portfolio /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '*', element: <NotFound /> },
		],
	},
];

// export const routes = [
// 	{ path: '/', element: <Home /> },
// 	{ path: '/experience', element: <Experience /> },
// 	{ path: '/portfolio', element: <Portfolio /> },
// 	{ path: '/contact', element: <Contact /> },
// ];
