<script>
	import Github from '$lib/icons/Github.svelte';
	import Pomodoro from '$lib/icons/Pomodoro.svelte';
</script>

<section>
	<div class="py-20 space-y-12 flex flex-col centered">
		<li
			data-animate-in="proj-1-img, proj-1-text"
			class="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 md:gap-12"
		>
			<div
				id="proj-1-img"
				class="before-visible-bottom-shrink transition duration-700 p-3 max-w-lg md:max-w-3xl bg-surface-200 rounded-xl bg-opacity-80 backdrop-blur-lg shadow-lg"
			>
				<img
					class="rounded-lg"
					src="/project-pomodoro.jpg"
					alt="a preview of the pomodoro project website"
				/>
			</div>
			<div id="proj-1-text" class="before-visible-right delay-300 duration-500 transition">
				<h2 class="h2 mb-2 flex sm:flex-col sm:items-start items-center gap-2">
					<span class="w-8 inline-block rounded-full bg-surface-100 shadow p-1">
						<Pomodoro />
					</span>
					pomodoro
				</h2>
				<p class="mb-4">A pomodoro timer made with react.</p>
				<div class="flex gap-2">
					<a
						href="https://github.com/nasheomirro/pomodoro"
						target="_blank"
						class="button bg-surface-900 text-white pl-2 max-w-fit text-sm"
					>
						<div class="w-6">
							<Github />
						</div>
						<span> Github </span>
					</a>
					<a
						href="https://pomodoro.nasheomirro.dev"
						target="_blank"
						class="button bg-primary-500 border-none text-white max-w-fit text-sm"
					>
						<span> live </span>
					</a>
				</div>
			</div>
		</li>

		<li
			data-animate-in="proj-2-img, proj-2-text"
			class="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 md:gap-10"
		>
			<div
				id="proj-2-img"
				class="before-visible-bottom-shrink transition duration-700 p-3 max-w-lg md:max-w-2xl bg-surface-200 rounded-xl bg-opacity-80 backdrop-blur-lg shadow-lg"
			>
				<img
					class="rounded-lg"
					src="/project-pomodoro.jpg"
					alt="a preview of the pomodoro project website"
				/>
			</div>
			<div
				id="proj-2-text"
				class="before-visible-right sm:order-first ml-auto delay-300 duration-500 transition"
			>
				<h2 class="h2 mb-2 flex sm:flex-col sm:items-start items-center gap-2">
					<span class="w-8 inline-block rounded-full bg-surface-100 shadow p-1">
						<Pomodoro />
					</span>
					pomodoro
				</h2>
				<p class="mb-4">A pomodoro timer made with react.</p>
				<div class="flex gap-2">
					<a
						href="https://github.com/nasheomirro/pomodoro"
						target="_blank"
						class="button bg-surface-900 text-white pl-2 max-w-fit text-sm"
					>
						<div class="w-6">
							<Github />
						</div>
						<span> Github </span>
					</a>
					<a
						href="https://pomodoro.nasheomirro.dev"
						target="_blank"
						class="button bg-primary-500 border-none text-white max-w-fit text-sm"
					>
						<span> live </span>
					</a>
				</div>
			</div>
		</li>
	</div>
</section>
