import React from 'react';
import { Wrapper } from './ListItem.styled';

interface ListItemProps {
	children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
