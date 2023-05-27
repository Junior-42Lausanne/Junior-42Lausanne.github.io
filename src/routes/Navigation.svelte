<script>
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const navItems = [
        {
          href: '/',
          label: 'Home'
        },
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

	function drawerClose() {
		drawerStore.close();
	}
	console.log("bruh");
	console.log($page.url.href);

	function href_matches_page(href) {
		return $page.url.href.endsWith(href);
	}
</script>

<nav class="list-nav">
	<!--<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/service" on:click={drawerClose}>Prestations</a></li>
		<li><a href="/team" on:click={drawerClose}>Equipe</a></li>
		<li><a href="/contact" on:click={drawerClose}>Contact</a></li>
		<li><a href="/partners" on:click={drawerClose}>Partenaires</a></li>
	</ul>-->
	<ul>
		{#each navItems as {href, label}}
    	<li><a class:active={href_matches_page(href)} {href} on:click={drawerClose}>{label}</a></li>
    	{/each}
	</ul>
	
	
</nav>

<style lang="postcss">
	.active {
		@apply variant-filled-primary;
	}
</style>
