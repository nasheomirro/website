<script lang="ts">
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import AboutImage from '$lib/components/AboutImage.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Dev from '$lib/icons/Dev.svelte';
</script>

<section id="header">
	<NavMenu />
	<div class="py-20 md:py-28 centered">
		<div class="grid items-center grid-cols-1 gap-4 sm:px-4 md:grid-cols-2">
			<div class="max-w-xs row-start-2 sm:max-w-sm md:row-start-1">
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
	</div>
</section>

<section id="about">
	<div class="py-20 md:py-28 centered">
		<div class="grid items-center grid-cols-1 gap-10 sm:px-4 md:grid-cols-2">
			<div class="flex justify-end md:justify-start">
				<div class="max-w-md xl:max-w-lg grow">
					<AboutImage />
				</div>
			</div>
			<div class="max-w-lg row-start-2 md:mx-auto md:row-start-1 md:col-start-2">
				<h1 class="mb-8 h2">About me</h1>
				<p>
					I am a web developer based in the Philippines, I started teaching myself how to code
					around 2019 with java and python. I figured that this is something I actually like doing
					that wasn't goofing around so I decided to do it professionally.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="projects">
	<div class="py-20 centered">
		<h2 class="mb-6 text-center h2">Projects</h2>
		<ul class="space-y-6">
			<ProjectItem
				imgUrl="/proj1.jpg"
				imgAlt="react-polymorphed package logo"
				firstLink="https://github.com/nasheomirro/react-polymorphed"
				secondLink="https://www.npmjs.com/package/react-polymorphed"
			>
				<svelte:fragment slot="title">react-polymorphed</svelte:fragment>
				<svelte:fragment slot="description">
					A typescript package to easily create fast polymorphic components in react! The package is
					open-source and downloadable through NPM and gets an average of 700+ weekly downloads. I
					wanted to create polymorphic components for a project but a lot of implementations felt
					too slow, so I tried solving the problem and created my own solution.
				</svelte:fragment>
				<svelte:fragment slot="second-button">npm</svelte:fragment>
			</ProjectItem>
			<ProjectItem
				imgUrl="/proj2.jpg"
				imgAlt="react-polymorphed package logo"
				firstLink="https://github.com/nasheomirro/gradials"
				secondLink="https://gradials.vercel.app/"
			>
				<svelte:fragment slot="title">gradials</svelte:fragment>
				<svelte:fragment slot="description">
					A tool to quickly create radial gradient backgrounds for CSS. Built using sveltekit, it
					takes advantage of two-way binding to help sync updates in multiple places. Honestly I
					only built this just to test myself whether or not I could replicate the tool on
					cssgradient.io, they didn't have a way to create multiple radial gradients at different
					positions so that's what I went with.
				</svelte:fragment>
				<svelte:fragment slot="second-button">live</svelte:fragment>
			</ProjectItem>
		</ul>
	</div>
</section>

<div class="flex flex-wrap items-center justify-center pb-8">
	<a
		target="_blank"
		class="p-1 transition-colors hover:text-primary-500"
		href="https://github.com/nasheomirro"
	>
		<span class="sr-only">check my Github</span>
		<div class="w-8 md:w-9">
			<Github />
		</div>
	</a>
	<a
		target="_blank"
		class="p-1 transition-colors hover:text-primary-500"
		href="https://www.linkedin.com/in/shane-rimoro-413aa523b/"
	>
		<span class="sr-only">check my Linkedin</span>
		<div class="w-8 md:w-9">
			<Linkedin />
		</div>
	</a>
	<a
		target="_blank"
		class="p-1 transition-colors hover:text-primary-500"
		href="https://dev.to/nasheomirro"
	>
		<span class="sr-only">check my Github</span>
		<div class="w-8 md:w-9">
			<Dev />
		</div>
	</a>
</div>
