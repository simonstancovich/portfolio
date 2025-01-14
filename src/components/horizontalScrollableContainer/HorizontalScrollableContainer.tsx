import { Wrapper } from './HorizontalScrollableContainer.styled';

interface HorizontalScrollableContainerProps {
	children: React.ReactNode;
	align?: string;
	justify?: string;
}

export const HorizontalScrollableContainer: React.FC<
	HorizontalScrollableContainerProps
> = ({ children, align, justify }) => {
	return <Wrapper>{children}</Wrapper>;
};
