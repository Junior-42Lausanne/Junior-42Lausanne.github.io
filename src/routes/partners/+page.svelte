<script>
	import Partner from './Partner.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="h1 gradient-heading text-8xl p-16">Partners</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} comment={'un petit commentaire'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
		<Partner name={'je fribourg'} logo={'todo'} link={'todo'} />
	</div>
</div>
