import React from 'react';
import { Container } from './HorizontalContainer.styled';

interface HorizontalContainerProps {
	children: React.ReactNode;
}

export const HorizontalContainer: React.FC<HorizontalContainerProps> = ({
	children,
}) => {
	return <Container>{children}</Container>;
};
