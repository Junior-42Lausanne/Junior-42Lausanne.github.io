<!-- a little card to display a team member -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let picture: string;
	export let description: string;
</script>

<div class="card m-1 flex items-center justify-center p-8 lg:m-4 md-max:flex-col">
	<div class="flex w-24 flex-row items-center justify-center p-4">
		<img src={picture} alt={name} class="h-full min-h-[50px] min-w-[50px] max-w-[150px]" />
		<h3 class="h3 pb-2 lg:hidden">{name}</h3>
	</div>

	<div class="flex flex-col">
		<h3 class="h3 pb-2 md-max:hidden">{name}</h3>
		<p class="text-sm text-gray-400">{description}</p>
	</div>
</div>
