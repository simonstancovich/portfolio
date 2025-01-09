export function toPx(
	value: string | number | undefined,
	fallback?: string,
): string {
	if (value === undefined) {
		return fallback ?? 'auto';
	}
	return typeof value === 'number' ? `${value}px` : value;
}
