<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import MyAppBar from './MyAppBar.svelte';

	export let links: { href: string; label: string }[];

	function href_matches_page(href: string) {
		return $page.url.href.endsWith(href);
	}
</script>

<Drawer duration={0} position="top">
	<MyAppBar {links} closing={true} />
	<hr />
	<nav class="list-nav">
		<ul>
			{#each links as { href, label }}
				<li class="p-2">
					<a class:active={href_matches_page(href)} {href} on:click={() => drawerStore.close()}>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>

<style lang="postcss">
	.active {
		@apply bg-primary-500 text-gray-900;
	}
</style>
