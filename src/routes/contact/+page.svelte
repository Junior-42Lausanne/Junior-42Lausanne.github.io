<script lang="ts">
	import Birds from '$lib/components/Birds.svelte';
	import Header from '$lib/components/Header.svelte';
	import MailToLink from '$lib/components/MailToLink.svelte';
	import { mail } from '$lib/mail';
</script>

<Header name="Contact" description="N'hésitez pas à nous contacter" />

<div class="m-24 flex flex-col items-center justify-center">
	<MailToLink {mail} customClass="btn variant-filled-primary">Contactez nous !</MailToLink>
</div>
<Birds />
