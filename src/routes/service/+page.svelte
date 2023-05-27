<script>
	import Service from './Service.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-7xl md:text-8xl">Prestations</h1>
	<p class="text-1xl sm:text-3xl md:text-4xl lg:text-5xl">Nous avons plusieurs services a vous proposer</p>

	<hr class="my-8 w-1/2" />

	<div class="flex flex-col xl:flex-row">
		<Service
			name={'Creation Web'}
			description={'Que ce soit un simple site wordpress ou un vrai truc sur mesure, blablabla'}
			picture={'/service-pictures/web.png'}
			href={'service/web'}
		/>

		<Service
			name={'API'}
			description={'Creation ou communication avec une API'}
			picture={'/service-pictures/api.png'}
			href={'service/api'}
		/>

		<Service
			name={'Support'}
			description={"Vous avez besoin d'aide"}
			picture={'/service-pictures/support.png'}
			href={'service/support'}
		/>
	</div>
</div>
