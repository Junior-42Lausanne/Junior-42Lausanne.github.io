<!-- a little card to display a team member -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let picture: string;
	export let linkedin_link: string;
	export let role: string;

	let isHovering = false;
	const linkedin_logo =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png';
</script>

<div
	class="card card-hover flex flex-row flex-nowrap p-8"
	on:mouseenter={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
>
	<img class="w-32 rounded-full" alt={name} src={picture} />
	<div class:truncate={!isHovering} class="mx-4 flex flex-1 flex-col hover:text-clip">
		<h2 class:whitespace-nowrap={!isHovering} class:truncate={!isHovering} class=" h2 pb-2">
			{name}
		</h2>
		<p>{role}</p>
	</div>
	<div class="flex flex-col justify-end gap-2">
		<a rel="noopener noreferrer " target="”_blank”" href={linkedin_link}>
			<Avatar width="w-8" rounded="rounded-full" initials="in" src={linkedin_logo} />
		</a>
	</div>
</div>
