<script lang="ts">
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
</script>

<section class="bg">
  <NavMenu />
	<div class="grid items-center grid-cols-1 gap-4 py-20 md:py-28 centered md:grid-cols-2">
		<div class="max-w-sm row-start-2 md:row-start-1">
			<h1 class="mb-8 h1">Hi, I'm Shane Rimoro, A Web Developer</h1>
			<p>
				I convert time, energy, and a little bit of caffeine into responsive and fully functioning
				web applications.
			</p>
		</div>
		<div class="flex justify-end">
			<div class="max-w-md grow text-primary-500 md:max-w-none">
				<HeaderImage />
			</div>
		</div>
	</div>
</section>

<style>
	.bg {
		height: 100%;
		background-repeat: no-repeat;
		background-image: radial-gradient(
				ellipse at 95.02% 0%,
				hsl(275.82deg 70% 76.02% / 100%) 0%,
				hsl(0deg 0% 0% / 0%) 50%
			),
			radial-gradient(
				ellipse at 0% 0%,
				hsl(298.91deg 71.01% 78.82% / 100%) 0%,
				hsl(0deg 0% 0% / 0%) 50%
			);
	}
</style>
