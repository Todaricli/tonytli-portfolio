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
			console.log($mounted + "in experience")
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});

</script>

<Loader message={loadingMessage}></Loader>
<div class:hide={!$mounted} class="experience-main-container w-full h-full flex flex-col justify-center items-center py-4 px-16 gap-5">
	<div class="flex flex-col items-start w-full mb-24 pl-6 pt-28">
		<h1 class="title text-white text-6xl tablet:scale-[1.4] tablet:translate-x-20 laptop:scale-[2.0] laptop:translate-x-72 pb-2 tablet:pr-8 opacity-70">MY EXPERIENCE</h1>
		<div class="w-[400px] text-lg pt-2 tablet:pt-4 tablet:ml-16 laptop:ml-36 mt-6">
			<p class="experience-main-desc">With a rich history spanning Apple, Google, SpaceX, and Tencent, I bring a wealth of experience as a developer, analyst, and marketing director. From pioneering tech solutions to crafting strategic marketing campaigns, my journey reflects a commitment to innovation, collaboration, and driving measurable impact in dynamic, global environments.</p>
		</div>
	</div>

	{#if data.experiencesData && data.experiencesData.length > 0}
		<div class="experience-flex-container flex flex-col justify-center items-center tablet:grid tablet:grid-cols-2 gap-16 pt-12 pb-24">
			{#each data.experiencesData as singleExperience}
				<div class="rounded-3xl flex flex-col justify-start items-start w-full h-full">
					<div
						class="bg-gray-300 rounded-3xl w-full h-96 tablet:w-full tablet:h-full flex flex-col justify-center items-center"
					>
						<img
							class="company-img w-auto h-96 tablet:w-96 tablet:h-full opacity-50"
							src={singleExperience.img}
							alt={singleExperience.slug}
						/>
					</div>
					<div
						class="flex flex-col justify-start items-start pl-2 pr-14 pd-5 text-slate-300 gap-4 font-serif text-xl"
					>
						<p class="pt-2 text-sm">Tenure: {singleExperience.tenure} Years</p>
						<div class="experience-button-div p-2 pl-0">
							<button class="hover:translate-x-10 hover:text-stone-600"
								><a class="w-full h-full text-center" href="/experiences/{singleExperience.slug}"
									>{singleExperience.title} &#8594</a
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
		font-family: page-title, Arial, Helvetica, sans-serif;
		transition: transform 1000ms;
	}

	.company-img:hover {
		animation: image-effect 1s forwards linear;
	}
	.experience-flex-container {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}
	.experience-button-div button {
		transition: transform 1s;
	}
	.experience-main-desc {
		font-family: DMSans, Arial, Helvetica, sans-serif;
	}

	.experience-main-container {
		animation: page-effect 500ms forwards linear
	}
</style>
