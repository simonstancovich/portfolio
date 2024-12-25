import React from 'react';
import { Wrapper } from './HighlightItem.styled';

interface HighlightedItemProps {
	children: React.ReactNode;
}

export const HighlightItem: React.FC<HighlightedItemProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
