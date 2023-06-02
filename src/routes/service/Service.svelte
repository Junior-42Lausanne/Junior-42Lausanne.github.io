<script lang="ts">
	export let name: string;
	export let picture: string;
	export let description: string;
	export let href = '';
</script>

<a
	{href}
	rel="noopener noreferrer "
	target="”_blank”"
	class="card card-hover flex flex-row items-center p-8"
>
	<img class="h-16 w-16 lg:h-32 lg:w-32" alt={name} src={picture} />
	<div class="items-left flex flex-col pl-4">
		<h3 class="h3 pb-2">{name}</h3>
		<p class="text-sm text-gray-400">{description}</p>
	</div>
	<slot />
</a>
