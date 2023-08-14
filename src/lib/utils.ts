export const join = (...classNames: (string | boolean | undefined | null)[]): string => {
	return classNames.map((className) => (className ? className : '')).join(' ');
};