<script lang="ts">
	import Partner from './Partner.svelte';

	type PartnerT = {
		name: string;
		logo: string;
		href: string;
	};

	const partners: PartnerT[] = [
		{
			name: '',
			logo: 'https://i0.wp.com/bthcrhqa.preview.infomaniak.website/wp-content/uploads/2018/05/JEF-1.png?w=1080',
			href: 'https://jef.ch'
		},
		{
			name: '',
			logo: 'https://42lausanne.ch/wp-content/uploads/2021/01/42_logo.svg',
			href: 'https://42lausanne.ch/'
		}
	];
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-6xl md:text-8xl">Partners</h1>

	<div class={`grid gap-4 sm:grid-cols-1 md:grid-cols-2`}>
		{#each partners as partner}
			<Partner {...partner} />
		{/each}
	</div>
</div>
