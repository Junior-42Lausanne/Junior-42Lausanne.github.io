<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	/*
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/themes/theme-sahara.css';
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	*/
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppBar, AppShell, Avatar, Tab, TabGroup, TableOfContents } from '@skeletonlabs/skeleton';
	import { ROOT_URL } from '$lib/env';
</script>

<!-- svelte-ignore a11y-missing-content -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"
				><a href="/"><Avatar width="w-12" rounded="rounded-full" initials="42" /></a
				></svelte:fragment
			>
			<a href="/"> JE 42 Lausanne</a>
			<svelte:fragment slot="trail">
				<a type="button" class="btn variant-ghost" href="./accordion">Accordion</a>
				<!-- <a type="button" class="btn variant-ghost" href="{ROOT_URL}/subjects">Subjects</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight">
		<TableOfContents target="#h" />
	</svelte:fragment>

	<slot />

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
</AppShell>
