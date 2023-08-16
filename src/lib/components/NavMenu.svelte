<script lang="ts">
	import { join } from '$lib/utils';
	import NavHamburger from '../icons/NavHamburger.svelte';
	import NavLogo from '../icons/NavLogo.svelte';

	let showMenu = false;
</script>

<div class="centered">
	<div class="relative flex items-center pt-4">
		<a class="block w-9" href="/">
			<NavLogo />
		</a>
		<div class="ml-auto">
			<button class="w-7 sm:hidden" on:click={() => (showMenu = !showMenu)}>
				<NavHamburger />
			</button>
			<ul
				class={join(
					'absolute left-0 z-10 w-full mt-2 border rounded shadow-sm border-surface-300 top-full bg-surface-50',
					showMenu ? 'block' : 'hidden',
					'sm:static sm:bg-transparent sm:border-none sm:flex sm:shadow-none sm:gap-6'
				)}
			>
				<li class="border-b border-b-surface-300 sm:border-none">
					<a href="#about" class="block w-full p-2 font-semibold">about</a>
				</li>
				<li class="border-b border-b-surface-300 sm:border-none">
					<a href="#projects" class="block w-full p-2 font-semibold">projects</a>
				</li>
			</ul>
		</div>
	</div>
</div>
