<script>
	export let data;

	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';

	$mounted = false;
	const loadingMessage = 'Experience.';

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>
<div class:hide={!$mounted}>
	<h1>My experience</h1>

	{#if data.experiencesData && data.experiencesData.length > 0}
		<div class="grid grid-cols-3 gap-4">
			{#each data.experiencesData as singleExperience}
				<div class="bg-slate-100">
					<div>
						<img class="w-20" src={singleExperience.img} alt={singleExperience.slug} />
					</div>
					<div>
						<p><strong>Tenure: </strong>{singleExperience.tenure}Years</p>
						<button class="bg-sky-500 hover:bg-sky-700"
							><a class="text-center" href="/experiences/{singleExperience.slug}"
								>{singleExperience.title}</a
							></button
						>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.hide {
		display: none;
	}
</style>
