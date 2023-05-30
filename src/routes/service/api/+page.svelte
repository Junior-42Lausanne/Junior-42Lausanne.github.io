<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Service from '../Service.svelte';

	const services = [
		{
			name: "Utilisation d'API",
			description: 'Nous creeons le lien entre vous et un service externe selon vos besoins',
			picture: '/service-pictures/api.png'
		},
		{
			name: "Création d'API",
			description: 'Nous creeons le lien entre vos données et un service externe',
			picture: '/service-pictures/api.png'
		}
	];
</script>

<Header name={'API'} description={'Découvrez nos services API'} />

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
