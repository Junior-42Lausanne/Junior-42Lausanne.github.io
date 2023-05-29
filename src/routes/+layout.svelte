<script lang="ts">
	/// Keep this import order ===========================
	import '../themes/c4.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	/// ==================================================

	import { AppBar, AppShell, drawerStore } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	const links: { href: string; label: string }[] = [
		{
			href: '/service',
			label: 'Prestations'
		},
		{
			href: '/team',
			label: 'Equipe'
		},
		{
			href: '/contact',
			label: 'Contact'
		},
		{
			href: '/partners',
			label: 'Partenaires'
		}
	];
</script>

<Navigation {links} />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 md:hidden" on:click={() => drawerStore.open()}>
						<span>
							<svg viewBox="0 0 100 80" class="h-4 w-4 fill-token">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>

			<a href="/" class="gradient-heading text-xl"> JE 42 Lausanne </a>

			<svelte:fragment slot="trail">
				{#each links as { href, label }}
					<a type="button" class="btn text-gray-400 hover:text-white md:block" {href}>{label}</a>
				{/each}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="pageFooter">
		<div class="mt-10 p-4 text-center text-gray-400">
			<p>© 2023 JE 42 Lausanne</p>
		</div>
		<!-- 
			TODO : Add legal and copy right when needed
			<div class="flex flex-col items-center">
			<div class="flex flex-row">
				<button class="btn variant-filled m-1 sm:m-5">
					<a href="/legal">Mentions légales</a>
				</button>
				<button class="btn variant-filled m-1 sm:m-5"> <a href="/legal">Copyright</a> </button>
			</div>
		</div> -->
	</svelte:fragment>

	<slot />
</AppShell>
