import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		primary: string;
		accent: string;
		white: string;
		navBar: {
			background: string;
			active: string;
		};
		font: {
			accent: string;
			teal: string;
			white: string;
			gray: string;
			lightGray: string;
		};
		sizes: {
			font: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				xxl: string;
				dxxl: string;
			};
			maxWidth: string;
			headerHeight: string;
		};
		border: {
			main: string;
		};
		fontWeight: {
			normal: string;
			medium: string;
			bold: string;
		};
		gradients: {
			main: string;
			hover: string;
			background: string;
		};
	}
}
