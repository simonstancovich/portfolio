import styled from 'styled-components';

type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

type FlexJustify =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

interface ContainerProps {
	alignItems?: FlexAlign;
	justifyContent?: FlexJustify;
	width?: string;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	width: ${({ width }) => width};
	flex-direction: column;
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	transition: ${({ theme }) => theme.transitions.default};
`;
