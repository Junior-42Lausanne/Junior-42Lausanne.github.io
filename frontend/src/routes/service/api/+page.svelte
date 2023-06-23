<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Services from '../Services.svelte';

	const services = [
		{
			name: "Integration d'API",
			description: 'Nous creeons le lien entre vous et un service externe selon vos besoins',
			picture: '/service-pictures/api.png'
		},
		{
			name: "Création d'API",
			description: 'Nous creeons un API pour permettre de communiquer avec votre service',
			picture: '/service-pictures/api.png'
		}
	];
</script>

<Header name={'API'} description={'Découvrez nos services API'} />

<Services {services} />
