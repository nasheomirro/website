<script lang="ts">
	let n = Array.from({ length: 12 }).fill(0);
</script>

<div class="fixed -z-10 top-0 left-0 w-full h-full">
	<div class=" ease-in-out flex opacity-[0.03] gap-8 w-full h-full centered mx-auto">
		{#each n as _, i}
			<div
				class:hidden={i > 3}
				class:sm:block={i < 6}
				class:lg:block={i < 8}
				class="xl:block grow border-x border-black h-full"
			/>
		{/each}
	</div>
</div>
