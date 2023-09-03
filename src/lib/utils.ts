import { onMount } from 'svelte';

export const join = (...classNames: (string | boolean | undefined | null)[]): string => {
	return classNames.map((className) => (className ? className : '')).join(' ');
};

export const useTransitionIn = () => {
	onMount(() => {
		let elements = Array.from(document.querySelectorAll('[data-animate-in]'));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(({ target, isIntersecting }) => {
					if (isIntersecting) {
						let targetId = target.getAttribute('data-animate-in');
						let elementsToModify = !targetId
							? [target]
							: targetId.split(',').map((id) => document.getElementById(id.trim()));
						elementsToModify.forEach((element) => {
							if (element) {
								element.className = element.className.replaceAll('before-visible-', 'after');
							}
						});
						observer.unobserve(target);
					}
				});
			},
			{ threshold: [0.5] }
		);

		elements.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			elements.forEach((element) => {
				observer.unobserve(element);
			});
		};
	});
};
