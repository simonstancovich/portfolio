import styled from 'styled-components';
import { toPx } from '../../utils/toPx';

interface StyledSvgWrapperProps {
	width?: string | number;
	height?: string | number;
	color?: 'primary' | 'accent' | 'white';
}

export const StyledSvgWrapper = styled.img<StyledSvgWrapperProps>`
	width: ${({ width }) => toPx(width)};
	height: ${({ height }) => toPx(height, '100%')};
	display: inline-block;
	object-fit: contain;

	${({ color }) =>
		color &&
		`
    filter: brightness(0) saturate(100%) invert(37%) sepia(80%) saturate(500%) hue-rotate(${color});
  `}

	transition: ${({ theme }) => theme.transitions.defaultTransform}, ${({
		theme,
	}) => theme.transitions.defaultFilter};

	&:hover {
		transform: scale(1.1);
		filter: brightness(0.8);
	}
`;
