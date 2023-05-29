<script lang="ts">
	import WebService from './WebService.svelte';

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

{#each services as service}
	<WebService name={service.name} description={service.description} picture={service.picture} />
{/each}
