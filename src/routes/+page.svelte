<script lang="ts">
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import AboutImage from '$lib/components/AboutImage.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Dev from '$lib/icons/Dev.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const elements = document.querySelectorAll('[data-animate-in]');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove('before-visible-left', 'before-visible-right');
					}
				});
			},
			{ threshold: [0.5] }
		);

		elements.forEach((element) => {
			observer.observe(element);
		});
	});
</script>

<section id="header">
	<NavMenu />
	<div class="py-20 md:py-28 centered">
		<div class="grid items-center grid-cols-1 gap-4 sm:px-4 md:grid-cols-2">
			<div class="max-w-xs row-start-2 sm:max-w-sm md:row-start-1">
				<h1 class="mb-8 h1">Hi, I'm Shane Rimoro, A Web Developer</h1>
				<p class="mb-5">
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
			<div data-animate-in class="before-visible-right transition duration-300 flex justify-end">
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
			<div
				data-animate-in
				class="before-visible-left transition duration-300 flex justify-end md:justify-start"
			>
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
		<h2 class="mb-8 text-center h2">Featured Projects</h2>
		<ul class="space-y-6">
			<ProjectItem
				imgUrl="/proj1.jpg"
				imgAlt="react-polymorphed package logo"
				firstLink="https://github.com/nasheomirro/react-polymorphed"
				secondLink="https://www.npmjs.com/package/react-polymorphed"
				animateClass="before-visible-left"
			>
				<svelte:fragment slot="title">react-polymorphed</svelte:fragment>
				<svelte:fragment slot="description">
					A typescript package to easily create fast polymorphic components in react! The package is
					open-source and downloadable through NPM and gets an average of 800+ weekly downloads. I
					wanted to create polymorphic components for a project but a lot of implementations felt
					too slow, so I tried solving the problem and created my own solution.
				</svelte:fragment>
				<svelte:fragment slot="second-button">npm</svelte:fragment>
			</ProjectItem>
			<ProjectItem
				imgUrl="/proj2.jpg"
				imgAlt="a screenshot of the gradials website"
				firstLink="https://github.com/nasheomirro/gradials-2"
				secondLink="https://gradials-2.pages.dev/"
				animateClass="before-visible-right"
			>
				<svelte:fragment slot="title">gradials</svelte:fragment>
				<svelte:fragment slot="description">
					A web application to quickly create radial gradient backgrounds for CSS. Just add and
					customize gradients and instantly get visual feedback, after you're satisfied with how it
					looks you can copy the CSS generated and paste it on your own website. Fun fact this is
					the same tool I used to create the background you are looking at now.
				</svelte:fragment>
				<svelte:fragment slot="second-button">live</svelte:fragment>
			</ProjectItem>
			<ProjectItem
				imgUrl="/proj3.jpg"
				imgAlt="a screenshot of the kanban app"
				firstLink="https://github.com/nasheomirro/kanban"
				secondLink="https://kanban-sand.vercel.app/"
				animateClass="before-visible-left"
			>
				<svelte:fragment slot="title">kanban</svelte:fragment>
				<svelte:fragment slot="description">
					A kanban board with sveltekit bootstrapped with skeleton UI! I wanted some place I can
					organize my tasks so I landed on kanban boards, unfortunately I couldn't find any existing
					apps that were to my liking, fortunately though I can make one myself 😊.
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
