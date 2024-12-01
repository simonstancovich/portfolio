import React from 'react';
import { Container } from './BodyContainer.styled';

interface BodyContainerProps {
	children: React.ReactNode;
}

export const BodyContainer: React.FC<BodyContainerProps> = ({ children }) => {
	return <Container>{children}</Container>;
};
