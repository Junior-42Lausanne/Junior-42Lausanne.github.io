<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
	import { scrollY } from '$lib/stores';

	export let links: { href: string; label: string }[];
	export let closing: boolean;
	const toggleDrawer = () => (closing ? drawerStore.close() : drawerStore.open());
	$: border = $scrollY > 50 ? 'border-b' : '';
</script>

<AppBar background="backdrop-blur-sm" border={`${border} border-gray-900`}>
	<div class="flex w-screen justify-center">
		<div class="flex w-xscreen items-center">
			<a href="/" class="gradient-heading h1 text-xl"> JE 42 Lausanne </a>

			<div class="flex-1" />

			<div class="md-max:hidden">
				{#each links as { href, label }}
					<a type="button" class="h2 btn text-gray-400 hover:text-white" {href}>
						{label}
					</a>
				{/each}
			</div>

			<button class="btn lg:hidden" on:click={toggleDrawer}>
				<svg viewBox="0 0 100 80" class="mx-4 h-4 w-4 fill-token">
					<rect y="00" width="100" height="10" />
					<rect y="30" width="100" height="10" />
					<rect y="60" width="100" height="10" />
				</svg>
			</button>
		</div>
	</div>
</AppBar>
