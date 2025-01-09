import styled from 'styled-components';

interface SkillProps {
	isLight: boolean;
}

export const Wrapper = styled.span<SkillProps>`
	max-width: 100px;
	word-wrap: break-word;
	word-break: keep-all;
	overflow-wrap: break-word;
	line-height: 1.6;
	color: ${({ isLight, theme }) =>
		isLight ? theme.colors.font.white : theme.colors.font.lightGray};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.sizes.font.sm};
`;
