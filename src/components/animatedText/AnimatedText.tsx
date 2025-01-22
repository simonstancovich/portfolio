import { splitTextForAnimation } from '../../utils/splitText';
import { AnimatedTextWrapper, CharSpan } from './AnimatedText.styled';

interface AnimatedTextProps {
	text: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
	const characters = splitTextForAnimation(text);
	return (
		<AnimatedTextWrapper>
			{characters.map(({ char, index }) => (
				<CharSpan key={index} index={index}>
					{char}
				</CharSpan>
			))}
		</AnimatedTextWrapper>
	);
};
