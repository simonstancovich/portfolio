import React from 'react';
import { Container } from './VerticalContainer.styled';

interface VerticalContainerProps {
	children: React.ReactNode;
}

export const VerticalContainer: React.FC<VerticalContainerProps> = ({
	children,
}) => {
	return <Container>{children}</Container>;
};
