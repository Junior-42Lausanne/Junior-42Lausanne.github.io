<!-- a little card to display a team member -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let picture: string;
	export let linkedin_link: string;
	export let description: string;

	export let role: null | string = null;
</script>

<a href={linkedin_link} class="card card-hover flex flex-row p-8 ml-3 mr-3 sm:ml-1 sm:mr-1">
	<Avatar width="w-32" rounded="rounded-full" initials={name} src={picture} />
	<div class="items-left flex flex-col pl-4">
		<h3 class="h3 pb-2">{name}</h3>
		{#if role}
			<h4 class="h4">{role}</h4>
		{/if}
		<p class="text-sm text-gray-600">{description}</p>
	</div>
</a>
