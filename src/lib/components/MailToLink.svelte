<script lang="ts">
	import { maitTo } from '$lib/mail';

	export let mail: string;
	export let subject = '';
	export let body = '';
	export let customClass: string | undefined = undefined;

	const href = maitTo(mail, subject, body);
</script>

<a {href} class={customClass ? customClass : 'btn'}>
	<slot />
</a>
