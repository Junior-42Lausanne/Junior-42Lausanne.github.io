<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Service from './Service.svelte';

	const services = [
		{
			name: 'Creation Web',
			description: `Nous creeons votre site web ! Nous proposons des services web personnalisés et de haute qualité 
				pour répondre à vos besoins numériques. 
				Notre équipe maîtrise les technologies les plus recentes et se consacre à la création de sites web attrayants.`,
			picture: '/service-pictures/web.png',
			href: 'service/web'
		},
		{
			name: 'API',
			description: `Notre implémentation, integrons ou deployons vos API de manière efficace. 
				Notre équipe de développeurs s'occupe de tous les aspects de l'implémentation, 
				en veillant à ce que les API soient correctement configurées, sécurisées pour des performances optimales.`,
			picture: '/service-pictures/api.png',
			href: 'service/api'
		},
		{
			name: 'Support',
			description: `Notre service de support technique et de mise à jour de site web vous offre
				une assistance fiable et le support nessecaire pour assurer la performance 
				et la sécurité continues de votre site. `,
			picture: '/service-pictures/support.png',
			href: 'service/support'
		}
	];
</script>

<Header name={'Prestations'} description={'Découvrez nos prestations'} />

<div class="mx-6 grid gap-4">
	{#each services as service}
		<Service {...service} />
	{/each}
</div>
