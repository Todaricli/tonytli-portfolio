<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { mounted } from '../lib/store/store';
	import { globalDataLoadingDuration } from '../lib/store/store';

	$mounted = false;
	let ScreenWidth;
	let clickToDrop = false;
	let changePage = false;
	let timer;

	const openIcon = 'fa-rectangle-list';
	const closeIcon = 'fa-angle-up';

	onMount(() => {

		return () => {
			clearTimeout(timer)
		};
	});

	function expandNavlinks() {
		if (ScreenWidth > 740) {
			clickToDrop = false;
		}
	}

	function pageChangeThroughDropdownMenue() {
		clickToDrop = !clickToDrop
		changePage = !changePage;
		timer = setTimeout(() => {
			changePage = !changePage;
		}, $globalDataLoadingDuration);
	}

</script>

<svelte:window on:resize={expandNavlinks} bind:innerWidth={ScreenWidth} />

<div class="row-navlinks tablet:flex flex-row hidden justify-between text-gray-300 p-2">
	<h1 class="invisible">Tony T Li</h1>
	<nav class="w-1/2 flex flex-row justify-evenly">
		<a class="hover:translate-y-3" href="/">Home</a>
		<a class="hover:translate-y-3" href="/experiences">Experiences</a>
		<a class="hover:translate-y-3" href="/projects">Projects</a>
		<a class="hover:translate-y-3" href="/about">About</a>
		<a class="hover:translate-y-3" href="/contact">Contact</a>
	</nav>
</div>

<div class="tablet:hidden top-11 left-5 fixed z-20 hover:animate-pulse" class:hide={changePage}>
	<button on:click={() => clickToDrop = !clickToDrop}>
		<i class="fa-solid {clickToDrop ? closeIcon : openIcon} text-white text-3xl"></i>
	</button>
</div>

<div
	class="w-72 top-20 left-5 fixed dropdown-menu right-5 rounded-2xl overflow-hidden z-30 p-2 text-white hidden text-2xl"
	class:showNav={clickToDrop}
>
	<nav class="flex flex-col justify-evenly items-center gap-5">
		<a class="hover:translate-x-5 hover:text-stone-400" on:click={pageChangeThroughDropdownMenue} href="/">Home</a>
		<a class="hover:translate-x-5 hover:text-stone-400" on:click={pageChangeThroughDropdownMenue} href="/experiences">Experiences</a>
		<a class="hover:translate-x-5 hover:text-stone-400" on:click={pageChangeThroughDropdownMenue} href="/projects">Projects</a>
		<a class="hover:translate-x-5 hover:text-stone-400" on:click={pageChangeThroughDropdownMenue} href="/about">About</a>
		<a class="hover:translate-x-5 hover:text-stone-400" on:click={pageChangeThroughDropdownMenue} href="/contact">Contact</a>
	</nav>
</div>

<div class="slot-wrapper" class:shade-background={clickToDrop}>
	<slot />
</div>

<footer class="flex flex-col opacity-50 mb-5 pt-28 text-white text-center justify-center items-center" class:hide={changePage}>
	<div class="flex flex-row justify-evenly gap-2 text-2xl">
		<a class="hover:scale-110 hover:text-amber-300" href="https://github.com/Todaricli" target="_blank"><i class="fa-brands fa-github"></i></a>
		<a class="hover:scale-110 hover:text-amber-300" href="https://www.linkedin.com/in/tuocheng-li-b86b59231/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
		<a class="hover:scale-110 hover:text-amber-300" href="mailto:leetony347@yahoo.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
	</div>
	<div class="flex flex-col items-center">
		<h1 class="text-xl font-bold underline">TONY TUOCHENG LI</h1>
		<span>Company images from <a class="underline" href="https://www.pngwing.com/en/search?q=king">PNGWING</a></span>
	</div>
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
	.dropdown-menu, .dropdown-menu a {
		animation: dropdown-items-effect 1s forwards linear;
		transition-property: transform, color;
		transition-duration: 1s;
		font-family: Titillium, Arial, Helvetica, sans-serif;
	}

	.dropdown-menu {
		background-color: rgba(0, 0, 0, 0.1);
	}
	.shade-background {
		opacity: 25%;
	}

	.showNav {
		display: block;
	}

	.row-navlinks, .row-navlinks a {
		transition-property: position, display, transform, color;
		transition-duration: 1s;
		font-family: Titillium, Arial, Helvetica, sans-serif;
	}
	.slot-wrapper {
		transition-property: opacity;
		transition-duration: 2s;
	}
	.hide {
		display: none;
	}
</style>
