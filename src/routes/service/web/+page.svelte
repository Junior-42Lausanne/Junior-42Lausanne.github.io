<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	const services = [
		{
			name: 'Wordpress',
			description: '...',
			picture: '/service-pictures/wordpress.png'
		},
		{
			name: 'Intégration',
			description: '...',
			picture: '/service-pictures/web.png'
		},
		{
			name: 'Sur mesure',
			description: '...',
			picture: '/service-pictures/web.png'
		}
	];
</script>

<div class="flex flex-col items-center justify-center">
	<Accordion
		spacing="space-y-16
		"
	>
		{#each services as service}
			<AccordionItem>
				<svelte:fragment slot="lead">
					<img src={service.picture} alt={service.name} class="h-16 w-16" />
				</svelte:fragment>
				<svelte:fragment slot="summary">
					{service.name}
				</svelte:fragment>
				<svelte:fragment slot="content">
					{service.description}
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
