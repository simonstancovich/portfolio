import React from 'react';
import {
	CardContainer,
	CardTitle,
	IconWrapper,
	TechItemWrapper,
	TechLabel,
	TechList,
} from './TechCard.styled';
import { IconType } from 'react-icons';

export interface TechItem {
	icon: IconType;
	label: string;
}

interface TechCardProps {
	title: string;
	items: TechItem[];
}

export const TechCard: React.FC<TechCardProps> = ({ title, items }) => {
	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<TechList>
				{items.map(({ icon: IconComponent, label }) => (
					<TechItemWrapper key={label}>
						<IconWrapper>
							<IconComponent />
						</IconWrapper>
						<TechLabel>{label}</TechLabel>
					</TechItemWrapper>
				))}
			</TechList>
		</CardContainer>
	);
};
