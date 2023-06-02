<script lang="ts">
	import Bg3D from '$lib/components/BG3D.svelte';
	import Header from '$lib/components/Header.svelte';
	import Partner from './Partner.svelte';

	type PartnerT = {
		name: string;
		logo: string;
		href: string;
	};

	const partners: PartnerT[] = [
		{
			name: '',
			logo: 'partner-logos/JEF.webp',
			href: 'https://jef.ch'
		},
		{
			name: '',
			logo: 'partner-logos/42.svg',
			href: 'https://42lausanne.ch/'
		}
	];
</script>

<Header name="Partenaires" description="Decouvrez ceux qui nous font confiance" />

<!-- <div class="flex flex-col items-center justify-center"> -->
<div class={`grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2`}>
	{#each partners as partner}
		<Partner {...partner} />
	{/each}
</div>
<!-- </div> -->

<Bg3D />
