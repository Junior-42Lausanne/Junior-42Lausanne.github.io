<script lang="ts">
	/// Keep this import order ===========================
	import '../themes/c4.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	/// ==================================================

	import { AppShell } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import MyAppBar from '$lib/components/MyAppBar.svelte';
	import { scrollY } from '$lib/stores';

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
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	function scrollHandler(event: any) {
		scrollY.set(event.currentTarget.scrollTop);
	}
</script>

<Navigation {links} />

<AppShell slotPageHeader="sticky top-0 z-10" on:scroll={scrollHandler}>
	<svelte:fragment slot="pageHeader">
		<MyAppBar {links} closing={false} />
	</svelte:fragment>

	<div class="flex w-screen justify-center">
		<div class="lg:w-xscreen">
			<slot />
		</div>
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="mt-10 p-4 text-center text-gray-400">
			<p>© 2023 JE 42 Lausanne</p>
		</div>
	</svelte:fragment>
</AppShell>

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
