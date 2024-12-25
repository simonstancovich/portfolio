import React from 'react';
import { Container } from './Section.styled';

interface SectionProps {
	children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
	return <Container>{children}</Container>;
};
