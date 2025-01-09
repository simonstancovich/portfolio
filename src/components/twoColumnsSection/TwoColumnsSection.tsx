import React from 'react';
import { Wrapper } from './TwoColumnsSection.styled';

interface TwoColumnsSectionProps {
	children: React.ReactNode;
	justifyContent?: string;
	alignItems?: string;
	gap?: string;
}

export const TwoColumnsSection: React.FC<TwoColumnsSectionProps> = ({
	children,
	justifyContent = 'space-between',
	alignItems = 'flex-start',
	gap = 'theme.spacing.md',
}) => {
	return (
		<Wrapper
			justifyContent={justifyContent}
			alignItems={alignItems}
			gap={gap}
		>
			{children}
		</Wrapper>
	);
};
