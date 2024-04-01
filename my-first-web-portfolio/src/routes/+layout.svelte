<script>
	import '../app.css';
</script>

<div class="flex flex-row justify-between bg-black text-white">
    <h1>John Smith</h1>
	<nav class="w-1/2 flex flex-row justify-evenly">
		<a href="/">Home</a>
		<a href="/experiences">Experiences</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
</div>

<slot />

<footer>
	<h1 class="text-center text-3xl font-bold underline text-white">Welcome to HOME</h1>
	<p class="text-center text-white">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
</footer>

<style lang="postcss">
	:global(body) {
		/**There is some bugs occurs simply followed the setup guide on tailwind css*/
		/* background-color: theme(colors.stone.950); */
		background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
		width: 100%;
		height: fit-content;
	}
</style>
