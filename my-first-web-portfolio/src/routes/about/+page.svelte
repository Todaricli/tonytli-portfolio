<script>
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
    import { mounted } from '../../lib/store/store';

    $mounted = false;

	const loadingMessage = 'About.';

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>

<div class:hide={!$mounted}>
	<h1 class="text-white text-3xl">I am about</h1>
</div>

<style>
	.hide {
		display: none;
	}
</style>
