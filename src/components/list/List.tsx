import React from 'react';
import { Wrapper } from './List.styled';

interface ListProps {
	children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
