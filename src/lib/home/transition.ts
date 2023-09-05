import { crossfade } from 'svelte/transition';

export const [send, receive] = crossfade({ duration: 400 });

export const ids = {
	pomodoro: 'pomodoro'
};
