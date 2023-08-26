<script lang="ts">
	import Github from '$lib/icons/Github.svelte';

	export let firstLink: string;
	export let secondLink: string;
	export let imgUrl: string;
	export let imgAlt: string;
</script>

<li data-animate-in class="before-visible-left transition w-full overflow-hidden border rounded-lg border-surface-800">
	<div class="flex items-center h-8 gap-2 pl-5 md:h-10 bg-surface-400">
		<div class="w-3 border rounded-full aspect-square border-surface-900 bg-surface-200" />
		<div class="w-3 border rounded-full aspect-square border-surface-900 bg-surface-200" />
		<div class="w-3 border rounded-full aspect-square border-surface-900 bg-surface-200" />
	</div>
	<div
		class="flex flex-col-reverse justify-between gap-4 p-4 md:flex-row md:p-6 lg:p-8 bg-surface-300"
	>
		<div class="mx-auto space-y-4 md:max-w-sm lg:max-w-xl xl:max-w-2xl md:mx-0">
			<h3 class="h3">
				<slot name="title" />
			</h3>
			<p>
				<slot name="description" />
			</p>
			<div class="flex justify-end gap-2 md:justify-start">
				<a href={firstLink} target="_blank" class="button bg-surface-900 text-white pl-2">
					<div class="w-6">
            <Github />
          </div>
					<span> github </span>
				</a>
				<a href={secondLink} target="_blank" class="button bg-primary-500"
					><slot name="second-button">
						<span>live</span>
					</slot>
				</a>
			</div>
		</div>
		<div class="w-full md:max-w-sm">
			<img class="w-full border rounded-lg border-surface-800" alt={imgAlt} src={imgUrl} />
		</div>
	</div>
</li>
