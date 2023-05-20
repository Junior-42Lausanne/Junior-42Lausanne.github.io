<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// import '@skeletonlabs/skeleton/themes/theme-rocket.css';

	// import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// import '@skeletonlabs/skeleton/themes/theme-sahara.css';
	// import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';

	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppBar, AppShell, Avatar, TableOfContents } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"
				><a href="/"><Avatar width="w-12" rounded="rounded-full" initials="42" /></a
				></svelte:fragment
			>
			<a href="/" class="gradient-heading text-xl"> JE 42 Lausanne </a>
			<svelte:fragment slot="trail">
				<a type="button" class="btn variant-ghost" href="/service">Prestation</a>
				<a type="button" class="btn variant-ghost" href="/team">Equipe</a>
				<a type="button" class="btn variant-ghost" href="/contact">Contact</a>
				<a type="button" class="btn variant-ghost" href="/partners">Partenaires</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
