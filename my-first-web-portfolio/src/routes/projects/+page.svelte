<script>
    import { onMount } from 'svelte';
	export let data;
	import SingleProject from '../../lib/components/SingleProject.svelte';
    import Loader from '../../lib/components/Loader.svelte';

    let mounted = false
    let time = 1000

    onMount(() => {
		const timer = setTimeout(() => {
			mounted = true;
		}, time);
		console.log('Window has finished loading');
        return () => clearTimeout(timer)
	});
</script>

<div class="flex flex-col justify-center item-center w-full h-full box-border px-32 py-8 tablet:px-16 laptop:px-16">
	<div class="flex flex-col items-center justify-center gap-5 tablet:grid tablet:grid-cols-2 laptop:grid laptop:grid-cols-3 w-full h-full">
		{#if data.projects && data.projects.length > 0}
			{#each data.projects as project (project.slug)}
				<SingleProject {project}/>
			{/each}
		{/if}
	</div>
    <Loader mounted={mounted} time={time}></Loader>
</div>
