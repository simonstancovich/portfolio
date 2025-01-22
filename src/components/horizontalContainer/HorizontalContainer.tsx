import React from 'react';
import { Container } from './HorizontalContainer.styled';

interface HorizontalContainerProps {
	children: React.ReactNode;
	align?: string;
	justify?: string;
}

export const HorizontalContainer: React.FC<HorizontalContainerProps> = ({
	children,
	align = 'flex-start',
	justify = 'space-between',
}) => {
	return (
		<Container align={align} justify={justify}>
			{children}
		</Container>
	);
};
