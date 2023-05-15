<script>
	import Partner from '$lib/components/Partner.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="h1">Partners</h1>
	<p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} comment={'un petit commentaire'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
	</div>
</div>
