<script>
	import Service from '../Service.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-7xl md:text-8xl">Web</h1>
	<hr class="my-8 w-1/2" />

	<div class="flex flex-col lg:flex-row">
		<Service
			name={'Wordpress'}
			description={'...'}
			picture={'/service-pictures/wordpress.png'}
			href={'web/wordpress'}
		/>

		<Service
			name={'Intégration'}
			description={'...'}
			picture={'/service-pictures/web.png'}
			href={'web/wordpress'}
		/>

		<Service
			name={'Sur mesure'}
			description={'...'}
			picture={'/service-pictures/web.png'}
			href={'web/wordpress'}
		/>
	</div>
</div>
