<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import { join } from '$lib/utils';

	export let src: string;
	export let alt: string;
	export let firstLink: string;
	export let secondLink: string;
	export let isPackage = false;
	export let i: number;

	let dir = i % 2 !== 0;
</script>

<li
	data-animate-in={`proj-${i}-img, proj-${i}-text`}
	class={join(
		'flex flex-col md:items-center sm:justify-start gap-6 md:gap-12',
		dir ? 'md:flex-row' : 'md:flex-row-reverse'
	)}
>
	<div
		id={`proj-${i}-img`}
		class="before-visible-bottom-shrink transition duration-700 p-2 md:p-3 max-w-2xl md:max-w-3xl bg-surface-200 rounded-lg bg-opacity-80 backdrop-blur-lg shadow-lg"
	>
		<img class="rounded" {src} {alt} />
	</div>
	<div
		id={`proj-${i}-text`}
		class={join(
			'delay-300 duration-500 transition p-2',
			dir ? 'before-visible-right' : 'before-visible-left'
		)}
	>
		<h2 class="h2 mb-4 sm:mb-8 sm:max-w-xs flex sm:flex-col sm:items-start items-center gap-2">
			<slot />
		</h2>
		<div class="flex gap-2">
			<a
				href={firstLink}
				target="_blank"
				class="button bg-surface-900 text-white pl-2 max-w-fit text-sm"
			>
				<div class="w-6">
					<Github />
				</div>
				<span> Github </span>
			</a>
			<a
				href={secondLink}
				target="_blank"
				class="button bg-primary-500 border-none text-white max-w-fit text-sm"
			>
				<span> {isPackage ? 'npm' : 'live'} </span>
			</a>
		</div>
	</div>
</li>
