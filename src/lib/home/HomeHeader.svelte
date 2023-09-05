<script lang="ts">
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import Github from '$lib/icons/Github.svelte';
</script>

<section id="header">
	<div class="py-20 centered">
		<div class="grid items-center grid-cols-1 gap-4 sm:px-4 lg:grid-cols-2">
			<div
				data-animate-in
				class="before-visible-left transition duration-500 ease-in-out max-w-lg row-start-2 lg:row-start-1 lg:max-w-sm"
			>
				<h1 class="mb-6 h1">
					Hi, I'm Shane Rimoro, A
					<span class=""> Web Developer.</span>
				</h1>
				<p class="mb-6 font-light">
					I convert time, energy, and a little bit of caffeine into responsive and fully functioning
					web applications.
				</p>
				<a
					href="https://github.com/nasheomirro"
					target="_blank"
					class="button bg-surface-900 text-white pl-2 max-w-fit"
				>
					<div class="w-6">
						<Github />
					</div>
					<span> Check My Github </span>
				</a>
			</div>
			<div
				data-animate-in
				class="before-visible-right transition ease-in-out delay-150 duration-700 flex justify-end"
			>
				<div class="max-w-lg grow text-primary-500 lg:max-w-none">
					<HeaderImage />
				</div>
			</div>
		</div>
	</div>
</section>
