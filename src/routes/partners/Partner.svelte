<!-- a little card to display the logo of a partner -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let logo: string;
	export let link: string;
	export let comment: string | null = null;
</script>

<a href={link} class="card flex flex-row p-8 card-hover">
	<Avatar width="w-12" rounded="rounded-full" initials={name} src={logo} />
	<div  class="items-left flex flex-col pl-4">
		<h3 class="h3 pb-2">{name}</h3>
		{#if comment}
			<p class="text-sm text-gray-600">{comment}</p>
		{/if}
	</div>
</a>
