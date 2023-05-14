<script lang="ts">
	import { onMount } from 'svelte';
	import { AppBar, TableOfContents } from '@skeletonlabs/skeleton';
	let value = 0;
</script>

<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<main id="h">
	<h1 class="h1">
		<span
			class="text-9xl bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
		>
			We build amazing apps
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