<script lang="ts">
	import WebService from './WebService.svelte';

	const services = [
		{
			name: 'Wordpress',
			description:
				'WordPress est un système de gestion de contenu (CMS) populaire pour la création et la gestion de sites web. Il offre une interface conviviale et intuitive, permettant aux utilisateurs de créer et de personnaliser facilement leur site web. WordPress offre une grande flexibilité et de nombreuses fonctionnalités pour répondre aux besoins spécifiques de chaque utilisateur.',
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
