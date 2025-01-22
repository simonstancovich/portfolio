import React from 'react';
import { Wrapper } from './GradientText.styled';

interface GradientTextProps {
	text: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ text }) => {
	return <Wrapper>{text}</Wrapper>;
};
