import React from 'react';
import { Wrapper } from './TwoColumnsSection.styled';

interface TwoColumnsSectionProps {
	children: React.ReactNode;
}

export const TwoColumnsSection: React.FC<TwoColumnsSectionProps> = ({
	children,
}) => {
	return <Wrapper>{children}</Wrapper>;
};
