<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Service from '../Service.svelte';

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

<Header name={'Web'} description={'Découvrez nos prestations web'} />

<div class="mx-6 grid gap-4">
	{#each services as service}
		<Service
			name={service.name}
			description={service.description}
			picture={service.picture}
			href={''}
		/>
	{/each}
</div>
