<script>
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../lib/store/store';
	import Loader from '../lib/components/Loader.svelte';
	import { mounted } from '../lib/store/store';

	const loadingMessage = 'Home.';
	$mounted = false;

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>

<div class="flex flex-col justify-start" class:hide={!$mounted}>
	<div class="w-full p-28 flex flex-col justify-center items-start gap-5 pb-48">
			<div class="flex flex-col justify-start items-start gap-5">
				<h3 class="w-80 text-lg text-slate-950">
					Welcome to John Smith's World of Web Wizardry! I'm John, a skilled web developer
					passionate about creating stunning online experiences. Explore my portfolio and discover
					how I can bring your digital dreams to life.
				</h3>
				<button class="bg-slate-200 rounded-xl px-5 py-3 hover:bg-slate-300 animate-pulse"
					><a href="/projects"><span class="font-mono">PROJECTS</span></a></button
				>
			</div>
	</div>

	<div class="text-container flex flex-col items-center justify-end pb-24 overflow-hidden">
		<div class="whitespace-nowrap text-inner-wrapper overflow-hidden">
			<div class="text-slides">
				<h1 class="text-9xl text-white font-bold">John Smith - Prospective Web Developer</h1>
			</div>
			<div class="text-slides">
				<h1 class="text-9xl text-white font-bold">John Smith - Prospective Web Developer</h1>
			</div>
			<div class="text-slides">
				<h1 class="text-9xl text-white font-bold">John Smith - Prospective Web Developer</h1>
			</div>
		</div>
	</div>
</div>

<style>
	.text-container {
		height: auto;
	}

	.text-inner-wrapper:hover .text-slides {
		animation-play-state: paused;
	}
	.text-slides {
		display: inline-block;
		animation: slide 18s infinite linear;
		padding-right: 5em;
	}

	button {
		transition: transform 2s;
	}

	button:hover {
		transform: translateX(20px);
		animation-play-state: paused;
        border-bottom-right-radius: 100px;
        border-top-right-radius: 100px;
	}
	.hide {
		display: none;
	}

	@keyframes slide {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
