<script>
	import ContactForm from "../../lib/components/ContactForm.svelte";
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';

	const loadingMessage = 'Contact.';
	$mounted = false;
	let timer;

	onMount(() => {
		timer = setTimeout(() => {
			$mounted = true;
			console.log($mounted + 'in contact');
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>
<ContactForm></ContactForm>
