<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	const mail = 'harneisjoshua@gmail.com';
</script>

<Header name="Contact" description="N'hésitez pas à nous contacter" />

<div class="m-24 flex flex-col items-center justify-center">
	<a href="mailto:{mail}" class="btn variant-filled-primary"> Contactez nous !</a>
</div>
