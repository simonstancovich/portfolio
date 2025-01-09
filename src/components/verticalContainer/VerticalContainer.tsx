import React from 'react';
import { Container } from './VerticalContainer.styled';

type FlexAlign = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type FlexJustify =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around';

interface VerticalContainerProps {
	children: React.ReactNode;
	alignItems?: FlexAlign;
	justifyContent?: FlexJustify;
	width?: string;
}

export const VerticalContainer: React.FC<VerticalContainerProps> = ({
	children,
	alignItems = 'flex-start',
	justifyContent = 'flex-start',
	width = '100%',
}) => {
	return (
		<Container
			alignItems={alignItems}
			justifyContent={justifyContent}
			width={width}
		>
			{children}
		</Container>
	);
};
