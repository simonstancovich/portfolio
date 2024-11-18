import React from 'react';
import { Wrapper } from './PageWrapper.styled';

interface PageWrapperProps {
	children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
