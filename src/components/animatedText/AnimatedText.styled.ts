import styled, { keyframes } from 'styled-components';

interface AnimatedTextProps {
	index: number;
}

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedTextWrapper = styled.h1`
	text-align: center;
	color: ${({ theme }) => theme.colors.font.white};
`;

export const CharSpan = styled.span<AnimatedTextProps>`
	display: inline-block;
	opacity: 0;
	animation: ${appear} 0.3s forwards;
	animation-delay: ${({ index }) => index * 0.1}s;
	font-size: ${({ theme }) => theme.sizes.font.dxxl};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: ${({ theme }) => theme.sizes.font.xl};
	}
`;
