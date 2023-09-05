<script>
	import Book from '$lib/icons/Book.svelte';
	import Lightbulb from '$lib/icons/Lightbulb.svelte';
	import NavLogo from '$lib/icons/NavLogo.svelte';
	import Pen from '$lib/icons/Pen.svelte';
	import { useTransitionIn } from '$lib/utils';
	import AboutItem from './AboutItem.svelte';

	useTransitionIn();
</script>

<section>
	<ul class="py-14 centered grid-cols-1 sm:grid-cols-3 grid gap-6 md:gap-12">
		<AboutItem id="a1" class="">
			<Book slot="icon" />
			<svelte:fragment slot="title">Learning Enjoyer</svelte:fragment>
			<svelte:fragment slot="description"
				>I possess a strong enthusiasm for continuous learning, with a knack for grasping complex
				concepts and discerning patterns. Learning new and better ways to solve problems is always a
				welcome experience.</svelte:fragment
			>
		</AboutItem>
		<AboutItem id="a2" class="sm:delay-200">
			<Pen slot="icon" />
			<svelte:fragment slot="title">Web Artisan</svelte:fragment>
			<svelte:fragment slot="description"
				>As a dedicated artisan, I prioritize the simplicity and maintainability of the project even
				when faced with time constraints as a stand against the never ending war with technical
				debt.</svelte:fragment
			>
		</AboutItem>
		<AboutItem id="a3" class="sm:delay-300">
			<Lightbulb slot="icon" />
			<svelte:fragment slot="title">Student Mindset</svelte:fragment>
			<svelte:fragment slot="description"
				>One of my core principles is maintaining a student mindset, recognizing that there's always
				room for improvement in my work and acknowledging the existence of unknowns.</svelte:fragment
			>
		</AboutItem>
	</ul>
</section>
