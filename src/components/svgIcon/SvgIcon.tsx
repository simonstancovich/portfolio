import React from 'react';
import { StyledSvgWrapper } from './SvgIcon.styled';

interface SvgIconProps {
	src: string;
	width?: string | number;
	height?: string | number;
	color?: 'primary' | 'accent' | 'white';
	className?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
	src,
	width = 24,
	height = 24,
	color = 'accent',
	className,
}) => {
	return (
		<StyledSvgWrapper
			src={src}
			width={width}
			height={height}
			color={color}
			className={className}
		/>
	);
};
