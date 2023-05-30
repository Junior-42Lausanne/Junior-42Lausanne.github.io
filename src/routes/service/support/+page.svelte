<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Service from '../Service.svelte';

	const services = [
		{
			name: 'Assistance',
			description:
				'Nous vous accompagnons dans la gestion de votre site web, de votre application ou de votre API',
			picture: '/service-pictures/support.png'
		},
		{
			name: 'Cours',
			description: 'Nous vous formons a la demande sur les technologies que nous utilisons',
			picture: '/service-pictures/support.png'
		}
	];
</script>

<Header name={'Support'} description={'Découvrez nos offres de support'} />

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
