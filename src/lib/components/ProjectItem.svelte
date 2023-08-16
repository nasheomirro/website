<script lang="ts">
	export let firstLink: string;
	export let secondLink: string;
	export let imgUrl: string;
	export let imgAlt: string;
</script>

<li class="w-full overflow-hidden border rounded-lg border-surface-800">
	<div class="h-8 md:h-10 bg-primary-500" />
	<div class="flex flex-col-reverse justify-between gap-4 p-4 md:flex-row md:p-6 lg:p-8 bg-surface-100">
		<div class="mx-auto space-y-4 md:max-w-sm lg:max-w-xl xl:max-w-2xl">
			<h3 class="h3">
				<slot name="title" />
			</h3>
			<p>
				<slot name="description" />
			</p>
			<div class="flex justify-end gap-4 md:justify-start">
				<a
					href={firstLink}
					target="_blank"
					class="px-3 py-1 font-semibold border rounded-sm hover:brightness-110 border-surface-800 bg-primary-500"
					>github</a
				>
				<a
					href={secondLink}
					target="_blank"
					class="px-3 py-1 font-semibold border rounded-sm hover:brightness-110 border-surface-800 bg-primary-700"
					><slot name="second-button">
						<span>live</span>
					</slot>
				</a>
			</div>
		</div>
		<div class="w-full max-w-sm">
			<img class="w-full border rounded-lg border-surface-800" alt={imgAlt} src={imgUrl} />
		</div>
	</div>
</li>
