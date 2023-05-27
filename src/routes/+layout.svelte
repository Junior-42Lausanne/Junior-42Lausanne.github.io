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
	import { AppBar, AppShell, Avatar, TableOfContents, Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import Navigation from './Navigation.svelte';

	function drawerOpen() {
		drawerStore.open({});
	}
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
			        <button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
			            <span>
			                <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
			                    <rect width="100" height="20" />
			                    <rect y="30" width="100" height="20" />
			                    <rect y="60" width="100" height="20" />
			                </svg>
			            </span>
			        </button>
			        <!--<strong class="text-xl uppercase">Skeleton</strong>-->
			    </div>


				<a href="/"><Avatar width="w-12" rounded="rounded-full" initials="42" /></a>
			</svelte:fragment>
			
			<a href="/" class="gradient-heading text-xl"> JE 42 Lausanne </a>

			<svelte:fragment slot="trail">
				<a type="button" class="btn variant-ghost hidden md:block" href="/service">Prestations</a>
				<a type="button" class="btn variant-ghost hidden md:block" href="/team">Equipe</a>
				<a type="button" class="btn variant-ghost hidden md:block" href="/contact">Contact</a>
				<a type="button" class="btn variant-ghost hidden md:block" href="/partners">Partenaires</a>
			</svelte:fragment>
		</AppBar>

	</svelte:fragment>

	
<!-- 	<svelte:fragment slot="sidebar"> -->
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col items-center ">
			<div class="flex flex-row">
				<button class="btn variant-filled m-1 sm:m-5"> <a href="/legal">Mentions légales</a> </button>
			<button class="btn variant-filled m-1 sm:m-5"> <a href="/legal">Copyright</a> </button>
			</div>
			
		</div>
		
	</svelte:fragment>

	<slot />
</AppShell>
