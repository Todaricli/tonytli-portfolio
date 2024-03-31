<script>
	import SingleExperience from '../../lib/components/SingleExperience.svelte';

	export let data;
</script>

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
					<button class="bg-sky-500 hover:bg-sky-700"><a class="text-center" href="/experiences/{singleExperience.slug}">{singleExperience.title}</a></button>
				</div>
			</div>
		{/each}
	</div>
{/if}
