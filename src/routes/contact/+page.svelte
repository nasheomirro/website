<script lang="ts">
	import { useTransitionIn } from '$lib/utils';

	useTransitionIn();
</script>

<section data-animate-in="title, description, item-1, item-2">
	<div class="py-20 centered">
		<h1 id="title" class="before-visible-left duration-700 transition mb-4 h1">Contact me</h1>
		<div class="max-w-3xl">
			<p
				id="description"
				class="before-visible-right transition duration-700 delay-200 text-lg font-light leading-relaxed mb-10"
			>
				Feel free to reach out! Whether you have questions, want to discuss potential
				collaborations, or just want to say hello, I'm here to connect. Use the provided contact
				information below, and I'll get back to you as soon as possible. I look forward to hearing
				from you!
			</p>
			<ul
				class="grid grid-cols-1 sm:grid-cols-2 gap-8"
			>
				<li id="item-1" class="before-visible-bottom-shrink transition duration-500 delay-300 space-y-2 flex flex-col justify-start">
					<span class="text-lg text-surface-800">My Email</span>
					<a href="mailto:shanenescarimoro@gmail.com" class="text-lg font-light hover:underline"
						>shanenescarimoro@gmail.com</a
					>
				</li>
				<li id="item-2" class="before-visible-bottom-shrink transition duration-500 delay-500  space-y-2 flex flex-col justify-start">
					<span class="text-lg text-surface-800">On Linkedin</span>
					<a
						href="https://www.linkedin.com/in/shane-rimoro-413aa523b/"
						class="text-lg font-light hover:underline">linkedin/shanerimoro</a
					>
				</li>
			</ul>
		</div>
	</div>
</section>
