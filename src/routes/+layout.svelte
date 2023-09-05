<script lang="ts">
	import NavMenu from '$lib/components/NavMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GridBackground from '$lib/components/GridBackground.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Shane Rimoro - Web Dev</title>
</svelte:head>

<div class="w-full overflow-x-hidden">
	<GridBackground />
	<div class="flex flex-col h-full w-full items-stretch">
		<NavMenu />
		<div class="grid">
			<slot />
		</div>
		<Footer />
	</div>
</div>
