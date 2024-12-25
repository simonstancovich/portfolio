import React from 'react';
import { StyledSvgWrapper } from './SvgIcon.styled';

interface SvgIconProps {
	src: string;
	width?: string;
	height?: string;
	color?: string;
	alt?: string;
	className?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
	src,
	width,
	height,
	color,
	alt = '',
	className,
}) => {
	return (
		<StyledSvgWrapper
			src={src}
			width={width}
			height={height}
			color={color}
			alt={alt}
			className={className}
		/>
	);
};
