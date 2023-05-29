<!-- a little card to display a team member -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let picture: string;
	export let description: string;
	export let href: string;
</script>

<a {href} class="card card-hover flex flex-row p-8">
	<Avatar
		width="w-32"
		max-width="w-32"
		min-width="w-5"
		rounded="rounded-full"
		initials={name}
		src={picture}
	/>
	<div class="items-left flex flex-col pl-4">
		<h3 class="h3 pb-2">{name}</h3>
		<p class="text-sm text-gray-400">{description}</p>
	</div>
</a>
