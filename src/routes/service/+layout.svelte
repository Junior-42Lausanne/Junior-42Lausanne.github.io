<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-7xl md:text-8xl">{$page.data.name}</h1>
	{#if $page.data.description}
		<p class="text-1xl sm:text-3xl md:text-4xl lg:text-5xl">{$page.data.description}</p>
	{/if}
	<hr class="my-8 w-1/2" />
	<div class="mx-6 grid items-center justify-center gap-6">
		<slot />
	</div>
</div>
