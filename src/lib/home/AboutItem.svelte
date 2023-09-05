<script lang="ts">
	import { join } from '$lib/utils';

	export let id: string;
	let className: string;
	export { className as class };
</script>

<li data-animate-in {id} class={join('before-visible-bottom transition duration-500 max-w-lg sm:max-w-none', className)}>
	<div class="w-8 mb-4">
		<slot name="icon" />
	</div>
	<h2 class="text-lg font-semibold mb-2">
		<slot name="title" />
	</h2>
	<p class="font-light">
		<slot name="description" />
	</p>
</li>
