<script>
    import '../app.css';
</script>

<nav class="text-white">
	<a href="/">home</a>
	<a href="/experiences">experiences</a>
</nav>

<slot />

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.stone.950);
    }
</style>