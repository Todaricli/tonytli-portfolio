<script>
	import { onMount } from 'svelte';

	export let mounted = false;
    export let time = 0;

	onMount(() => {
		const timer = setTimeout(() => {
			mounted;
		}, time);
		console.log('Window has finished loading');
        return () => clearTimeout(timer)
	});
</script>

<div
	class="loader-wrapper w-full h-full absolute top-0 left-0 bg-black flex flex-col justify-center items-center"
	class:hide={mounted}
>
	<span class="loader inline-block w-52 h-52 absolute border-8 text-white"
		><span class="inner-loader align-top inline-block w-full text-white"></span></span
	>
	<span class="loader inline-block w-36 h-36 absolute border-4 text-white"
		><span class="inner-loader align-top inline-block w-full text-white"></span></span
	>
	<span class="text-white text-center">Hold on!</span>
</div>

<style>
	.loader {
		animation: loader 3s infinite ease;
	}
	.inner-loader {
		animation: loader-inner 3s infinite ease-in;
	}
	.hide {
		visibility: hidden;
	}
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(180deg);
		}
		50% {
			transform: rotate(180deg);
		}
		75% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes loader-inner {
		0% {
			height: 0%;
		}
		25% {
			height: 0%;
		}
		50% {
			height: 100%;
		}
		75% {
			height: 100%;
		}
		100% {
			height: 0%;
		}
	}
</style>