<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let links: { href: string; label: string }[];

	const drawerClose = () => drawerStore.close();

	function href_matches_page(href: string) {
		return $page.url.href.endsWith(href);
	}
</script>

<Drawer>
	<nav class="list-nav">
		<ul>
			<h2 class="p-2">
				<a class:active={href_matches_page('/')} href="/" on:click={drawerClose}>JE 42 Lausanne</a>
			</h2>
			<hr />
			{#each links as { href, label }}
				<li class="p-2">
					<a class:active={href_matches_page(href)} {href} on:click={drawerClose}>{label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>

<style lang="postcss">
	.active {
		@apply bg-primary-500;
	}
</style>
