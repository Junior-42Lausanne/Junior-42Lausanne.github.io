<script lang="ts">
	import { maitTo, mail } from '$lib/mail';
	import Service from './Service.svelte';

	export let services: {
		name: string;
		description: string;
		picture: string;
	}[];
</script>

<div class="mx-6 grid gap-4">
	{#each services as { name, description, picture }}
		<Service {name} {description} {picture} href={maitTo(mail, `Demande de service "${name}"`)} />
	{/each}
</div>
