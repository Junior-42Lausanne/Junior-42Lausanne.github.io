<script>
	import Partner from './Partner.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-6xl md:text-8xl">Partners</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<Partner
			name={'je fribourg'}
			logo={'partner-logos/fribourg.png'}
			href={'https://www.google.com'}
			comment={'un petit commentaire'}
		/>
		<Partner
			name={'je fribourg'}
			logo={'partner-logos/fribourg.png'}
			href={'https://www.google.com'}
		/>
		<Partner
			name={'je fribourg'}
			logo={'partner-logos/fribourg.png'}
			href={'https://www.google.com'}
		/>
		<Partner
			name={'je fribourg'}
			logo={'partner-logos/fribourg.png'}
			href={'https://www.google.com'}
		/>
	</div>
</div>
