<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Services from '../Services.svelte';

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

<Services {services} />
