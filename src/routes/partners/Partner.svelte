<!-- a little card to display the logo of a partner -->

<script lang="ts">
	export let logo: string;
	export let href: string;
</script>

<a
	{href}
	rel="noopener noreferrer external "
	target="”_blank”"
	class="card card-hover flex items-center justify-center p-8"
>
	<img src={logo} alt="JEF" class="aspect-auto h-16 flex-nowrap" />
</a>
