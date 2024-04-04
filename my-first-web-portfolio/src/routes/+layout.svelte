<script>
	import '../app.css';
	import { globalDataLoadingDuration } from '../lib/store/store';
	import { onMount } from 'svelte';
	import Loader from '../lib/components/Loader.svelte';
	import { mounted } from '../lib/store/store';

	$mounted = false;
	const loadingMessage = 'Lets get started!';

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<div class="flex flex-row justify-between text-white p-2">
	<h1 class="invisible">Tony T Li</h1>
	<nav class="w-1/2 flex flex-row justify-evenly">
		<a href="/">Home</a>
		<a href="/experiences">Experiences</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
</div>

<slot />
<footer class="opacity-50 sticky top-full mb-5">
	<h1 class="text-center text-1xl font-bold underline text-white">Welcome to HOME</h1>
	<p class="text-center text-white">Coded by Tony Tuocheng Li</p>
</footer>

<style lang="postcss">
	:global(body) {
		/**There is some bugs occurs simply followed the setup guide on tailwind css*/
		/* background-color: theme(colors.stone.950); */
		background: linear-gradient(112.1deg, #696969 11.4%, black 70.2%);
		width: 100%;
		min-height: 100vh;
		height: 100%;
	}

	:global(html) {
		/**There is some bugs occurs simply followed the setup guide on tailwind css*/
		/* background-color: theme(colors.stone.950); */
		width: 100%;
		min-height: 100vh;
	}
</style>
