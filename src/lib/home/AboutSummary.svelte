<script lang="ts">
	import AboutImage from './AboutImage.svelte';
</script>

<section data-animate-in="about-1, about-2" id="about">
	<div class="py-20 centered">
		<div class="grid items-center grid-cols-1 gap-10 sm:px-4 lg:grid-cols-2">
			<div
				id="about-1"
				class="before-visible-left transition duration-500 flex justify-end lg:justify-normal"
			>
				<div class="max-w-lg lg:max-w-none grow">
					<AboutImage />
				</div>
			</div>
			<div
				id="about-2"
				class="before-visible-bottom delay-150 transition duration-500 max-w-lg lg:max-w-md lg:mx-auto"
			>
				<h1 class="mb-6 h2">About me</h1>
				<p class="mb-6 font-light">
					I am a web developer based in the Philippines, I started teaching myself how to code
					around 2019 with java and python. I figured that this is something I actually like doing
					that wasn't goofing around so I decided to do it professionally.
				</p>
			</div>
		</div>
	</div>
</section>
