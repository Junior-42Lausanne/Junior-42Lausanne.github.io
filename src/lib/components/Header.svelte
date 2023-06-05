<script lang="ts">
	export let name: string;
	export let description: string | undefined = undefined;
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 pt-16 text-7xl md:text-8xl">{name}</h1>
	{#if description}
		<h2 class=" h2 text-1xl pt-4 sm:text-3xl md:text-4xl lg:text-5xl">{description}</h2>
	{/if}
	<hr class="my-8 w-1/2" />
</div>
