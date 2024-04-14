<script>
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';
	import About from '../../lib/components/About.svelte';

	$mounted = false;
	let timer;

	const loadingMessage = 'About.';

	onMount(() => {
		timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>
<div>
	<About></About>
</div>
