<!-- a little card to display the logo of a partner -->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name: string;
	export let logo: string;
	export let link: string;
</script>

<div class="card flex flex-row p-8">
  <Avatar width="w-12" rounded="rounded-full" initials={name} src={logo} />
	<a href={link} class="flex flex-col items-left pl-4">

		<h3 class="h3 pb-2">{name}</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</a>
</div>
