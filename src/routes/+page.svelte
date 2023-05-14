<script lang="ts">
	import { onMount } from 'svelte';
	import { AppBar, TableOfContents } from '@skeletonlabs/skeleton';
	let value = 0;
</script>



<main id="h">
	<h1 class="h1">
		<span
			class="gradient-heading text-6xl
			"
		>
			We build amazing apps
		</span>
	</h1>
	<h1 class="h1">
		<span
			class="gradient-heading text-9xl
			"
		>
			JE 42 Lausanne
		</span>
	</h1>
	<section class="flex">
		<section class="grow">
			<h2 class="h2">Subject A</h2>
			<h2 class="h2">Subject B</h2>
		</section>
		<section>
			<TableOfContents target="#h" />
		</section>
	</section>
</main>

<style lang="postcss">
	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-br;
		/* Color Stops */
		@apply from-primary-500 to-secondary-500;
	}
</style>
