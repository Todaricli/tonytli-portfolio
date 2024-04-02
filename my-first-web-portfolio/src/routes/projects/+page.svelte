<script>
	export let data;
	import SingleProject from '../../lib/components/SingleProject.svelte';
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';

    $mounted = false;
	const loadingMessage = "Projects."

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});

</script>

<Loader message={loadingMessage}></Loader>
<div class="flex flex-col gap-5 justify-center item-center w-full h-full box-border px-32 py-8 tablet:px-16 laptop:px-16" class:hide={!$mounted}>
	<h1 class="text-3xl text-white font-mono">My projects: </h1>
	<div class="flex flex-col items-center justify-center gap-5 tablet:grid tablet:grid-cols-2 laptop:grid laptop:grid-cols-3 w-full h-full">
		{#if data.projects && data.projects.length > 0}
			{#each data.projects as project (project.slug)}
				<SingleProject {project}/>
			{/each}
		{/if}
	</div>
</div>

<style>
	.hide {
		display: none;
	}
</style>
