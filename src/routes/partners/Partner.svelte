<!-- a little card to display the logo of a partner -->

<script lang="ts">
	export let name: string;
	export let logo: string;
	export let href: string;
</script>

<a {href} rel="external" class="card card-hover flex flex-row p-8">
	<img src={logo} alt="JEF" class="aspect-auto h-16 flex-nowrap" />
	<div class="items-left flex flex-col pl-4">
		<h3 class="h3 pb-2">{name}</h3>
	</div>
</a>
