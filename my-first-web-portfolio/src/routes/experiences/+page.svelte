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
<div class:hide={!$mounted} class="flex flex-col justify-center items-center py-4 px-16 gap-5">
	<div class="flex flex-col items-start w-full mb-6">
		<h1 class="title font-bold font-mono text-3xl pb-4 pr-8">My experience:</h1>
	</div>

	{#if data.experiencesData && data.experiencesData.length > 0}
		<div class="flex flex-col justify-center items-center tablet:grid tablet:grid-cols-2 gap-16">
			{#each data.experiencesData as singleExperience}
				<div class="rounded-3xl flex flex-col justify-start items-start w-full h-full">
					<div
						class="bg-gray-300 rounded-3xl w-full h-full flex flex-col justify-center items-center"
					>
						<img class="w-full h-full tablet:w-96" src={singleExperience.img} alt={singleExperience.slug} />
					</div>
					<div class="flex flex-col justify-start items-start pl-2 pr-14 py-7 text-slate-300 gap-4 font-serif font-extralight">
						<p>Tenure: {singleExperience.tenure} Years</p>
						<div class="p-2 pl-0">
							<button class="hover:animate-bounce"
								><a class="text-center" href="/experiences/{singleExperience.slug}"
									>{singleExperience.title} &#8592;</a
								></button
							>
						</div>
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
	.title {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
</style>
