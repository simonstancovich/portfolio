import React from 'react';
import { Wrapper } from './SectionHeader.styled';

interface SectionHeaderProps {
	children: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
