<!-- a little card to display a team member -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let picture: string;
	export let linkedin_link: string;
	export let role: string;
	// export let mail: string;

	const linkedin_logo =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png';
</script>

<div class="sm:mr-1card card card-hover ml-3 mr-3 flex flex-row flex-nowrap p-8 sm:ml-1">
	<Avatar width="w-32" rounded="rounded-full" initials={name} src={picture} />
	<div class="mx-4 flex flex-1 flex-col">
		<h2 class="h2 pb-2">{name}</h2>
		<p>{role}</p>
	</div>
	<div class="flex flex-col justify-end gap-2">
		<a href={linkedin_link}>
			<Avatar width="w-8" rounded="rounded-xl" initials="in" src={linkedin_logo} />
		</a>
		<!-- <a href={'mailto:' + mail}><Avatar width="w-8" rounded="rounded-xl" initials="@" /> </a> -->
	</div>
</div>
