<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-8xl">{$page.data.name}</h1>
	{#if $page.data.description}
		<p>{$page.data.description}</p>
	{/if}
	<hr class="my-8 w-1/2" />
	<slot />
</div>
