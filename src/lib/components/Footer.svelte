<script>
	import GridFooterBackground from '$lib/components/GridFooterBackground.svelte';
	import NavLogo from '$lib/icons/NavLogo.svelte';
</script>

<footer class="mt-auto pt-40">
	<div
		class="relative text-surface-800 bg-white bg-opacity-40 border-t border-t-surface-300 py-20"
	>
		<GridFooterBackground />
		<div class="footer-inner centered">
			<div class="w-14">
				<NavLogo />
			</div>
			<div class="max-w-md lg:max-w-xl">
				<p class="mb-6 md:mb-10">
					Have questions or interested in collaborating on web development projects? Don't hesitate
					to get in touch with me – I'd love to hear from you!
				</p>
				<a href="/contact" class="button max-w-fit py-3 px-5 bg-surface-900 text-white shadow-xl"
					>Get in touch</a
				>
			</div>
			<div>
				<span class="block font-bold text-lg md:text-xl mb-4">socials</span>
				<ul class="flex items-center md:flex-col md:items-start gap-4">
					<li>
						<a
							class="underline hover:text-surface-600 transition"
							target="_blank"
							href="https://github.com/nasheomirro"
						>
							Github
						</a>
					</li>
					<li>
						<a
							class="underline hover:text-surface-600 transition"
							target="_blank"
							href="https://www.linkedin.com/in/shane-rimoro-413aa523b/"
						>
							Linkedin
						</a>
					</li>
					<li>
						<a
							class="underline hover:text-surface-600 transition"
							target="_blank"
							href="https://dev.to/nasheomirro"
						>
							Dev.to
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	.footer-inner {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		@media (min-width: theme(screens.sm)) {
			grid-template-columns: 1fr 4fr;
		}

		@media (min-width: theme(screens.md)) {
			grid-template-columns: 0.5fr 2fr 0.5fr;
		}
	}
</style>
