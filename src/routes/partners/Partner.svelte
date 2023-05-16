<!-- a little card to display the logo of a partner -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let logo: string;
	export let href: string;
	export let comment: string | null = null;
</script>

<a {href} rel="external" class="card card-hover flex flex-row p-8">
	<Avatar width="w-12" rounded="rounded-full" initials={name} src={logo} />
	<div class="items-left flex flex-col pl-4">
		<h3 class="h3 pb-2">{name}</h3>
		{#if comment}
			<p class="text-sm text-gray-600">{comment}</p>
		{/if}
	</div>
</a>
