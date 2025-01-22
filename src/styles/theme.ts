import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	colors: {
		primary: 'rgba(40, 38, 44, 0.549)',
		accent: 'rgb(30, 224, 199)',
		white: 'rgb(255, 255, 255)',
		translucentWhite: 'rgba(255, 255, 255,0.02)',
		lightGray: 'rgba(0, 0, 0, 0.8)',
		navBar: {
			background: 'rgba(33, 31, 35, 0.35)',
			mobileBackground: 'rgb(16, 16, 16)',
			active: 'rgba(6, 148, 148, 0.286)',
		},
		scrollBar: {
			gray: 'rgba(51, 51, 51,1)',
			lightGray: 'rgba(136, 136, 136,1)',
		},
		font: {
			accent: '#069494',
			teal: 'rgb(21, 158, 158)',
			white: 'rgb(255, 255, 255)',
			gray: 'rgba(40, 38, 44, 1)',
			lightGray: 'rgb(139, 138, 138)',
		},
		border: {
			main: 'rgb(163, 203, 56)',
			gray: 'rgba(40, 38, 44, 1)',
		},
	},
	gradients: {
		main: 'linear-gradient(180deg, rgb(29, 22, 30) 0%, rgb(0, 0, 0) 100%)',
		hover: 'linear-gradient(180deg, rgb(163, 203, 56) 0%, rgb(244, 162, 97) 100%)',
		background:
			'linear-gradient(135deg, rgb(30, 224, 199) 0%, rgb(141, 63, 255) 100%)',
	},
	fonts: {
		primary: "'Raleway', sans-serif",
		secondary: "'Inter', sans-serif",
		p: "'Roboto', sans-serif",
	},
	fontWeight: {
		normal: '400',
		medium: '500',
		bold: '600',
	},
	sizes: {
		font: {
			xs: '12px',
			sm: '14px',
			md: '16px',
			lg: '20px',
			xl: '24px',
			xxl: '28px',
			dxxl: '56px',
		},
		maxWidth: '1200px',
		headerHeight: '80px',
	},
	borderRadius: {
		xs: '4px',
		md: '8px',
		xl: '12px',
		xxl: '20px',
		xxxl: '24px',
		full: '50%',
	},
	borderWidth: {
		thin: '1px',
		thick: '2px',
	},
	borderStyle: {
		solid: 'solid',
		dashed: 'dashed',
	},
	spacing: {
		xxxs: '4',
		xxs: '8px',
		xs: '16px',
		sm: '24px',
		md: '32px',
		lg: '48px',
		xl: '64px',
		xxl: '96px',
	},
	shadows: {
		xs: '0 2px 4px rgba(0, 0, 0, 0.1)',
		xl: '0 4px 8px rgba(0, 0, 0, 0.2)',
	},
	transitions: {
		default: 'all 0.3s ease',
		quick: 'all 0.2s ease-in-out',
		defaultOpacity: 'opacity 0.3s ease',
		defaultTransform: 'transform 0.3s ease',
		defaultFilter: 'filter 0.3s ease',
		defaultLeft: 'left 0.3s ease',
		defaultWidth: 'width 0.3s ease',
	},
	scale: {
		xsFull: 'scale(0.95)',
	},
	breakpoints: {
		mobile: '768px',
		tablet: '1024px',
		desktop: '1200px',
	},
};
