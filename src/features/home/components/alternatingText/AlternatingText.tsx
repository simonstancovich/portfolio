import React from 'react';
import { Wrapper } from './AlternatingText.styled';

interface AlternatingTextProps {
	skills: string[];
}

export const AlternatingText: React.FC<AlternatingTextProps> = ({ skills }) => {
	return (
		<div>
			{skills.map((skill, index) => (
				<Wrapper key={index} isLight={index % 2 === 0}>
					{skill}
					{index < skills.length - 1 && '\u200B'}{' '}
				</Wrapper>
			))}
		</div>
	);
};
