import styled from 'styled-components';

interface StyledSvgWrapperProps {
	width?: string;
	height?: string;
	color?: string;
}

export const StyledSvgWrapper = styled.img<StyledSvgWrapperProps>`
	width: ${({ width }) => width || '24px'};
	height: ${({ height }) => height || '24px'};
	display: inline-block;
	object-fit: contain;

	${({ color }) =>
		color &&
		`
    filter: brightness(0) saturate(100%) invert(37%) sepia(80%) saturate(500%) hue-rotate(${color});
  `}

	transition: transform 0.3s ease, filter 0.3s ease;

	&:hover {
		transform: scale(1.1);
		filter: brightness(0.8);
	}
`;
