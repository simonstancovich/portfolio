export function splitTextForAnimation(text: string) {
	return text.split('').map((char, index) => ({
		char: char === ' ' ? '\u00A0' : char,
		index,
	}));
}
