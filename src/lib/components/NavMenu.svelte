<script lang="ts">
	import { join } from '$lib/utils';
	import NavHamburger from '../icons/NavHamburger.svelte';
	import NavLogo from '../icons/NavLogo.svelte';
	import { page } from '$app/stores';

	let showMenu = false;

	type Link = {
		href: string;
		text: string;
		isActive: boolean;
	};

	let links: Link[] = [
		{
			text: 'Home',
			href: '/',
			isActive: false
		},
		{
			text: 'Contact',
			href: '/contact/',
			isActive: false
		}
	];

	$: links = links.map((link) => ({ ...link, isActive: link.href === $page.url.pathname }));
</script>

<div class="centered">
	<div class="relative flex items-center pt-10">
		<a class="block w-9 hover:text-primary-500 transition-colors" href="/">
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
				{#each links as link (link.href)}
					<li class="border-b border-b-surface-300 sm:border-none">
						<a
							href={link.href}
							on:click={() => (showMenu = !showMenu)}
							class={join(
								'block w-full p-2 sm:transition font-light sm:px-4 sm:hover:bg-primary-500 sm:rounded-full',
								link.isActive ? 'sm:font-bold' : ''
							)}>{link.text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
